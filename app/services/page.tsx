"use client"

import Image from "next/image";
import React, { useState } from "react";
import WaveSection from "../components/WaveSection";



export default function ServicesPage() {
    const [ripple, setRipple] = useState(false);

    const handleRipple = () => {
        setRipple(true);
        setTimeout(() => setRipple(false), 1000); // Reset after animation duration
  };
    const services = [
            {
              title: 'Frontend Development',
              description: 'Responsive websites using React, Next.js, and modern CSS',
              image: '/images/services_frontend.webp'
            },
            {
              title: 'Backend Development',
              description: 'Scalable server solutions with Node.js and databases',
              image: '/images/services_backend.webp'
            },
            {
              title: 'UI/UX Design',
              description: 'User-centric design with modern aesthetics',
              image: '/images/services_ux.webp'
            },
            {
              title: 'Web Performance Optimization',
              description: 'Enhancing speed and accessibility for better user experiences',
              image: '/images/services_performance.webp'
            },
            {
              title: 'SEO Services',
              description: 'Improving search engine rankings with technical and on-page SEO',
              image: '/images/services_seo.webp'
            },
            {
              title: 'E-commerce Solutions',
              description: 'Building custom e-commerce platforms with seamless integrations',
              image: null
            },
          ];

  return (
    
    <div className="bg-gray-900">
        <nav className="bg-black shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">Alex Wachowski</div>
                    <div className="flex space-x-4">
                        <a href="/services" className="hover:text-blue-600">Services</a>
                        <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
                        <a href="#contact" className="hover:text-blue-600">Contact</a>
                    </div>
                </div>
            </div>
        </nav>  
      {services.map((service, index) => (
        <section
          key={index}
          className="relative w-screen h-screen flex items-center justify-center"
        >
          {/* Background Image */}
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={service.image!}
              alt={`${service.title} Background`}
              layout="fill"
              objectFit="cover"
              priority
              className="opacity-60"
            />
          </div>

          {/* Overlay Content */}
          <div className="relative z-10 text-center text-white px-6">
            <h2 className="text-5xl font-bold mb-4">{service.title}</h2>
            <p className="text-xl">{service.description}</p>
          </div>
        </section>
      ))}
        <WaveSection></WaveSection>
    {/* Footer */}
    <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Alex Wachowski. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  );
}
