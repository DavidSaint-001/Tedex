import { useState, useEffect, useRef, useCallback } from 'react';

const useHoverMobile = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    // Detect touch device
    isTouchDevice.current = !window.matchMedia('(hover: hover)').matches;

    // Intersection Observer for 'while in view'
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // For touch: toggle on touchstart + in view
  const handleTouchStart = useCallback(() => {
    if (isTouchDevice.current && isInView) {
      setIsHovered(true);
    }
  }, [isInView]);

  const handleFocus = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsHovered(false);
  }, []);

  return {
    ref,
    isActive: isHovered || (isTouchDevice.current ? isInView : false), // On mobile: hover if in view
    isHovered,
    isInView,
    handlers: {
      onPointerEnter: handlePointerEnter,
      onPointerLeave: handlePointerLeave,
      onTouchStart: handleTouchStart,
      onFocus: handleFocus,
      onBlur: handleBlur,
    },
  };
};

export default useHoverMobile;

