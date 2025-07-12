"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useMemo, useState, useLayoutEffect } from "react";
import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 800;

// Optimize globe configuration for maximum performance
const GLOBE_CONFIG = {
  width: 600, // Reduced size for better performance
  height: 600, // Reduced size for better performance
  onRender: () => {},
  devicePixelRatio: 2, // Drastically lower for better performance
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 7000, // Further reduced for better performance from  16000
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [19.076, 72.8777], size: 0.1 }, // India
    { location: [40.7128, -74.006], size: 0.1 }, // New York
    { location: [51.5074, -0.1278], size: 0.08 }, // London
  ],
};


// Enhanced throttle function for more aggressive performance optimization
function throttle(func, delay) {
  let lastCall = 0;
  let requestId = null;
  
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      // Cancel any pending execution
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
      
      // Schedule execution for next frame
      requestId = requestAnimationFrame(() => {
        lastCall = now;
        func(...args);
      });
      return;
    }
    
    lastCall = now;
    return func(...args);
  };
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const globeInstance = useRef(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };


  // Heavily throttled movement update with smoother motion
  const updateMovement = useMemo(
    () =>
      throttle(
        (clientX) => {
          if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            // Skip tiny movements to reduce updates
            if (Math.abs(delta) < 2) return;
            
            pointerInteractionMovement.current = delta;
            
            // Use requestAnimationFrame for smoother updates
            requestAnimationFrame(() => {
              // Apply damping based on device capability
              const damping = window.devicePixelRatio > 1 ? MOVEMENT_DAMPING : MOVEMENT_DAMPING * 1.5;
              r.set(r.get() + delta / damping);
            });
          }
        },
        32, // More aggressive throttling (30fps)
      ),
    [r],
  );

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    // Throttle resize event to prevent performance issues
    const throttledResize = throttle(onResize, 100);
    window.addEventListener("resize", throttledResize);
    onResize();

    // Use smaller multiplier for better performance
    const sizeMultiplier = Math.min(window.devicePixelRatio, 1.5);

    // Create globe with optimized settings
    globeInstance.current = createGlobe(canvasRef.current, {
      ...config,
      width: width * sizeMultiplier,
      height: width * sizeMultiplier,
      onRender: (state) => {
        // Slower rotation for better performance
        if (!pointerInteracting.current) phi += 0.002;
        state.phi = phi + rs.get();
        state.width = width * sizeMultiplier;
        state.height = width * sizeMultiplier;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);

    return () => {
      if (globeInstance.current) {
        globeInstance.current.destroy();
      }
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      ref={containerRef}
      className={twMerge(
        "mx-auto aspect-[1/1] w-full max-w-[400px]", // Reduced max width
        className,
      )}
    >
        <canvas
          className={twMerge(
            "size-[20rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size]", // Smaller size
          )}
          ref={canvasRef}
          onPointerDown={(e) => {
            pointerInteracting.current = e.clientX;
            updatePointerInteraction(e.clientX);
          }}
          onPointerUp={() => updatePointerInteraction(null)}
          onPointerOut={() => updatePointerInteraction(null)}
          // Use passive event listeners for better performance
          onMouseMove={(e) => {
            e.persist();
            // Skip every other move event for even better performance
            if (Math.random() > 0.5) {
              updateMovement(e.clientX);
            }
          }}
          onTouchMove={(e) => {
            e.preventDefault(); // Prevent scrolling while touching globe
            if (e.touches[0] && Math.random() > 0.5) {
              updateMovement(e.touches[0].clientX);
            }
          }}
        />
    </div>
  );
}
