import React, { useState, MouseEvent } from 'react';

interface Wave {
  id: number;
  x: number;
  y: number;
}

const WaveSection = () => {
  const [waves, setWaves] = useState<Wave[]>([]);

  const createWave = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const section = button.closest('section');
    
    if (!section) return;
    
    const sectionRect = section.getBoundingClientRect();
    
    // Calculate click position relative to section
    const x = rect.left + rect.width / 2 - sectionRect.left;
    const y = rect.top + rect.height / 2 - sectionRect.top;
    
    // Create new wave with unique ID
    const newWave: Wave = {
      id: Date.now(),
      x,
      y
    };
    
    setWaves(prev => [...prev, newWave]);
    
    // Remove wave after animation completes - increased to 2 seconds
    setTimeout(() => {
      setWaves(prev => prev.filter(wave => wave.id !== newWave.id));
    }, 2000);
  };

  return (
    <section className="bg-gray-700 py-20 text-center text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
        <p className="mb-8 text-lg">
          Let's bring your ideas to life. Contact us today to discuss your project.
        </p>
        <button
          onClick={createWave}
          className="bg-white text-blue-600 px-8 py-4 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition relative"
        >
          Get in Touch
        </button>
      </div>
      
      {/* Render waves */}
      {waves.map(wave => (
        <div
          key={wave.id}
          className="absolute rounded-full bg-blue-400/10 pointer-events-none"
          style={{
            left: wave.x,
            top: wave.y,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
            animation: 'radialWave 2s ease-out forwards'
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes radialWave {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(100);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default WaveSection;