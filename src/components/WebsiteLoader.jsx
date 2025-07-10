import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { myProjects } from '../constants';

const WebsiteLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const loadAssets = async () => {
      try {
        // Step 1: Wait for DOM to be ready
        setLoadingText('Loading DOM...');
        await new Promise(resolve => {
          if (document.readyState === 'complete') {
            resolve();
          } else {
            window.addEventListener('load', resolve, { once: true });
          }
        });
        setProgress(20);

        // Step 2: Preload project images
        setLoadingText('Loading project images...');
        const imagePromises = myProjects.map((project, index) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setProgress(20 + ((index + 1) / myProjects.length) * 40);
              resolve();
            };
            img.onerror = reject;
            img.src = project.image;
          });
        });

        await Promise.all(imagePromises);
        setProgress(60);

        // Step 3: Preload other critical assets
        setLoadingText('Loading assets...');
        const criticalAssets = [
          '/assets/grid.png',
          '/assets/sky.jpg',
          '/assets/particles-bg.png',
          '/assets/planets.png',
          '/assets/coding-pov.png'
        ];

        const assetPromises = criticalAssets.map((asset, index) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              setProgress(60 + ((index + 1) / criticalAssets.length) * 25);
              resolve();
            };
            img.onerror = resolve; // Continue even if some assets fail
            img.src = asset;
          });
        });

        await Promise.all(assetPromises);
        setProgress(85);

        // Step 4: Wait for fonts and final resources
        setLoadingText('Finalizing...');
        await document.fonts.ready;
        setProgress(95);

        // Step 5: Minimum loading time for smooth UX
        await new Promise(resolve => setTimeout(resolve, 500));
        setProgress(100);
        setLoadingText('Welcome!');

        // Wait a bit more before hiding loader
        await new Promise(resolve => setTimeout(resolve, 800));
        setIsLoading(false);

      } catch (error) {
        console.error('Loading error:', error);
        // Even on error, continue to website
        setProgress(100);
        setTimeout(() => setIsLoading(false), 1000);
      }
    };

    loadAssets();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          >
            <div className="text-center space-y-8">
              {/* Animated Logo/Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-20 h-20 mx-auto relative">
                  {/* Rotating outer ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-transparent border-t-white rounded-full"
                  />
                  {/* Inner pulsing circle */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-4 bg-white rounded-full opacity-20"
                  />
                  {/* Center dot */}
                  <div className="absolute inset-8 bg-white rounded-full" />
                </div>
              </motion.div>

              {/* Progress Bar */}
              <div className="w-80 mx-auto space-y-4">
                <div className="relative h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
                
                {/* Progress Text */}
                <div className="flex justify-between items-center text-sm">
                  <motion.span
                    key={loadingText}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-neutral-400"
                  >
                    {loadingText}
                  </motion.span>
                  <span className="text-white font-mono">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>

              {/* Loading Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex space-x-1 justify-center"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WebsiteLoader;
