import { useState, useEffect, useRef } from 'react';

interface Section {
  id: string;
  backgroundUrl: string;
}

interface DynamicBackgroundProps {
  sections: Section[];
  children: React.ReactNode;
}

const DynamicBackground = ({ sections, children }: DynamicBackgroundProps) => {
  const [currentBackground, setCurrentBackground] = useState<string | null>(null);
  const [nextBackground, setNextBackground] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const observers = useRef<{ [key: string]: IntersectionObserver }>({});

  const switchBackground = (newUrl: string) => {
    if (newUrl !== currentBackground) {
      setNextBackground(newUrl);
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentBackground(newUrl);
        setNextBackground(null);
        setIsTransitioning(false);
      }, 1000); // Duration matches CSS transition
    }
  };

  useEffect(() => {
    // Set initial background
    setCurrentBackground(sections[0]?.backgroundUrl || null);

    // Create observers
    sections.forEach(section => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              switchBackground(section.backgroundUrl);
            }
          });
        },
        { threshold: 0.5 }
      );

      observers.current[section.id] = observer;

      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      Object.values(observers.current).forEach(observer => observer.disconnect());
    };
  }, [sections]);

  const renderBackground = (url: string | null, isNext: boolean = false) => {
    if (!url) return null;

    const style = {
      opacity: isNext ? (isTransitioning ? 1 : 0) : 1,
      backgroundImage: url === 'none' ? 'none' : `url(${url})`,
      backgroundColor: url === 'none' ? 'black' : undefined,
    };

    return (
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={style}
      />
    );
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 w-full h-full">
        {/* Base layer - always at 70% opacity */}
        <div className="absolute inset-0 bg-black opacity-30" />
        
        {/* Background layers */}
        {renderBackground(currentBackground)}
        {renderBackground(nextBackground, true)}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DynamicBackground;