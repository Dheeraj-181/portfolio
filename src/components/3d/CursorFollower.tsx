import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CursorFollower: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.interactive === 'true'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer fluid aura ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/30"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(0, 242, 254, 0.2)' : 'none',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
        }}
      />
      {/* Center pinpoint */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
};

export default CursorFollower;
