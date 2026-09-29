import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onFinish?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 15;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
        const hideTimer = setTimeout(() => {
          setHidden(true);
          onFinish?.();
        }, 600);
        return () => clearTimeout(hideTimer);
      }, 300);
      return () => clearTimeout(fadeTimer);
    }
  }, [progress, onFinish]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070a12] transition-opacity duration-600 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center gap-6 p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 shadow-[0_0_80px_rgba(0,245,255,0.2)] backdrop-blur-3xl max-w-sm w-full mx-4">
        {/* Animated MA Insignia */}
        <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-[#00f5ff]/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,245,255,0.3)] overflow-hidden">
          <span className="font-sora text-2xl font-black text-[#00f5ff] tracking-wider">
            MA
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-[#00f5ff]/20 to-transparent animate-pulse"></div>
        </div>

        <div className="flex flex-col items-center text-center gap-1.5">
          <span className="font-sora text-base sm:text-lg font-bold text-white tracking-tight">
            MUHAMMAD AHMED
          </span>
          <span className="text-xs font-mono-code text-[#00f5ff] tracking-widest uppercase animate-pulse">
            INITIALIZING NEURAL NODES... {progress}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#00f5ff] to-[#818cf8] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
