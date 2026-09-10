import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'project' | 'link' | 'hidden'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsTouchDevice(!mediaQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(!e.matches);
    };
    mediaQuery.addEventListener('change', handlePointerChange);

    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Detect cursor context based on hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const linkEl = target.closest('a, button, [data-cursor="link"], input, textarea');

      if (projectEl) {
        setCursorType('project');
      } else if (linkEl) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setCursorType('hidden');
    const onMouseEnter = () => setCursorType('default');

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handlePointerChange);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (isTouchDevice || cursorType === 'hidden') {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer follow circle */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full"
        animate={{
          x: mousePosition.x - (cursorType === 'project' ? 44 : cursorType === 'link' ? 24 : 10),
          y: mousePosition.y - (cursorType === 'project' ? 44 : cursorType === 'link' ? 24 : 10),
          width: cursorType === 'project' ? 88 : cursorType === 'link' ? 48 : 20,
          height: cursorType === 'project' ? 88 : cursorType === 'link' ? 48 : 20,
          backgroundColor: cursorType === 'project' ? '#E8E8E5' : 'transparent',
          borderColor: cursorType === 'project' ? '#E8E8E5' : cursorType === 'link' ? '#E8E8E5' : 'rgba(232, 232, 229, 0.4)',
          borderWidth: cursorType === 'project' ? 0 : 1.5,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.4,
        }}
      >
        {cursorType === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[11px] font-bold tracking-widest text-[#111111] uppercase font-mono-code select-none"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>

      {/* Tiny inner center dot */}
      {cursorType === 'default' && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#E8E8E5]"
          animate={{
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
          }}
          transition={{
            type: 'spring',
            damping: 40,
            stiffness: 800,
            mass: 0.1,
          }}
        />
      )}
    </div>
  );
};
