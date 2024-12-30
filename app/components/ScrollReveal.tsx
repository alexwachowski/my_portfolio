import { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'left' | 'right' | 'bottom';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  threshold?: number;
}

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '',
  threshold = 0.1
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px',  // Reduced from 50px to make animation trigger closer to viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (direction) {
      case 'left':
        return 'animate-fade-in-left';
      case 'right':
        return 'animate-fade-in-right';
      case 'bottom':
        return 'animate-fade-in-bottom';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div
      ref={ref}
      className={`
        opacity-0
        ${isVisible ? getAnimationClass() : ''}
        ${className}
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        willChange: 'opacity, transform'  // Performance optimization for animations
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;