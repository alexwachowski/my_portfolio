"use client"

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface MousePosition {
  x: number;
  y: number;
}

interface SpotlightProps {
  mousePosition: MousePosition;
}

interface PortfolioItem {
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const Spotlight: React.FC<SpotlightProps> = ({ mousePosition }) => {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(72, 82, 95, 0.46), transparent 40%)`
      }}
    />
  );
};

const portfolioItems: PortfolioItem[] = [
  {
    image: '/images/assistant-logo.jpg',
    title: 'AI assistant',
    description: 'An AI assitant have conversations use information from files you upload',
    tags: ['Next.js', 'TailwindCSS', 'Redux'],
    link: "https://my-ai-production.up.railway.app"
  },
  {
    image: '/images/jeremiah.png',
    title: 'Personal Brand site',
    description: 'A website built for a personal trainer in the Texas hillcountry',
    tags: ['React', 'TailwindCSS'], 
    link: "https://jeremiah-training.vercel.app"
  },
  {
    image: '/images/portfolio_mockup_3.png',
    title: 'Blog Platform',
    description: 'A content-focused blog site with dynamic routing and markdown support.',
    tags: ['Next.js', 'MDX', 'TailwindCSS'],
    link: "https://blog-example.com"
  },
  {
    image: '/images/portfolio_mockup_4.png',
    title: 'SaaS Dashboard',
    description: 'A SaaS analytics dashboard with interactive charts and responsive design.',
    tags: ['React', 'ChartJS', 'TailwindCSS'],
    link: "https://dashboard-example.com"
  },
];

const Portfolio: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <Spotlight mousePosition={mousePosition} />
      
      <nav className="bg-zinc-900 text-zinc-100 shadow-lg relative z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-light tracking-wider">
                <Link href={'/'}>Alex Wachowski</Link>
            </div>
            <div className="flex space-x-8">
              <a href="/services" className="hover:text-zinc-400 transition-colors duration-200">Services</a>
              <a href="/portfolio" className="hover:text-zinc-400 transition-colors duration-200">Portfolio</a>
              <a href="/contact" className="hover:text-zinc-400 transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-40">
        <h1 className="text-5xl font-extralight text-gray-100 mb-2">Portfolio</h1>
        <p className="text-gray-100 mb-12 text-lg">A collection of my recent work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="block group bg-gray-800 rounded-none overflow-hidden hover:bg-gray-700 transition duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`} />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-light text-gray-100 mb-3">{item.title}</h2>
                <p className="text-gray-100 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-5 text-sm text-gray-100 duration-300 ${hoveredIndex === index ? 'bg-gray-800' : 'bg-gray-700'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="bg-zinc-900 text-zinc-100 py-12 mt-20 relative z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-light mb-4">Let's Connect</h3>
              <div className="flex space-x-6">
                <a href="mailto:alex@example.com" className="hover:text-zinc-400">
                  <Mail size={24} />
                </a>
                <a href="tel:+1234567890" className="hover:text-zinc-400">
                  <Phone size={24} />
                </a>
                <a href="https://github.com" className="hover:text-zinc-400">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="hover:text-zinc-400">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="text-zinc-400 text-sm">
              © 2025 Alex Wachowski. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;