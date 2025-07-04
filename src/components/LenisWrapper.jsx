import { useEffect } from 'react';

export default function LenisWrapper({ children }) {
  useEffect(() => {
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 0.9,
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical',
        smoothTouch: false,
        touchMultiplier: 2,
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      // Recalculate scroll limits on resize/content changes
      const resizeObserver = new ResizeObserver(() => lenis.resize());
      resizeObserver.observe(document.body);

      return () => {
        lenis.destroy();
        resizeObserver.disconnect();
      };
    });
  }, []);
  return children;
}
