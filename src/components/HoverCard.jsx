import { useState } from 'react';
import useHoverMobile from '../hooks/useHoverMobile';
import clsx from 'clsx';

const HoverCard = ({ children, className = '' }) => {
  const { ref, isActive, handlers } = useHoverMobile();

  return (
    <div 
      ref={ref}
      className={clsx(
        'group relative transition-all duration-500',
        isActive && 'group-hover-equivalent',
        className
      )}
      {...handlers}
    >
      {children}
    </div>
  );
};

export default HoverCard;

