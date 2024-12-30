// "use client"

// // app/page.tsx (or pages/index.tsx depending on your Next.js version)

// import DynamicBackground from "./components/DynamicBackground";
// import ScrollReveal from "./components/ScrollReveal";
// import Image from "next/image";
// import { useState } from 'react'
// import { Mail, Phone, Github, Linkedin } from 'lucide-react'


  
// const portfolioImages = [
//   '/images/portfolio_mockup_1.png', 
//   '/images/portfolio_mockup_2.png', 
//   '/images/portfolio_mockup_3.png',
//   '/images/portfolio_mockup_4.png',
// ];

// export default function Page() {  // or 'Home' if that's your current name

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Add form handling logic here
//     console.log({ name, email, message })
//   }


//   const sections = [
//     {
//       id: 'hero',
//       backgroundUrl: '/images/new_ai_hero.webp'
//     },
//     {
//       id: 'services',
//       backgroundUrl: '/images/about-bg.webp'
//     },
//     {
//       id: 'portfolio',
//       backgroundUrl: '/images/services-bg.webp'
//     }, 
//     {
//       id:'contact',
//       backgroundUrl: 'none'
//     }
//   ];

//   return (
//     <div>
//       {/* Navigation */}
//        <nav className="bg-black shadow-lg">
//          <div className="max-w-6xl mx-auto px-4 py-3">
//            <div className="flex justify-between items-center">
//              <div className="text-xl font-bold">Alex Wachowski</div>
//              <div className="flex space-x-4">
//                <a href="#services" className="hover:text-blue-600">Services</a>
//                <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
//                <a href="#contact" className="hover:text-blue-600">Contact</a>
//              </div>
//            </div>
//          </div>
//        </nav>
//     <DynamicBackground sections={sections}>
//       {/* Keep your existing content, just make sure each section that should
//           trigger a background change has an id matching the sections array */}
//       <section id="hero" className="min-h-screen relative w-screen h-screen flex items-center justify-center">
//         {/* Your existing hero section content */}
//          {/* Overlay Content */}
//        <div className="relative z-10 text-center text-white">
//          <h1 className="text-4xl font-bold sm:text-6xl">Alex Wachowski</h1>
//          <p className="mt-4 text-lg sm:text-xl">Creating Together, Succeeding Together.</p>
//        </div>
//       </section>

//       <section id="services" className="min-h-screen py-20">
//         {/* Your existing about section content */}
//         <ScrollReveal direction='right'>
         
//            <div className="max-w-6xl mx-auto px-4">
//              <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
//              <div className="grid md:grid-cols-3 gap-12"> {/* Increased gap for more spacing */}
//                {[
//                 {
//                   title: 'Frontend Development',
//                   description: 'Responsive websites using React, Next.js, and modern CSS',
//                 },
//                 {
//                   title: 'Backend Development',
//                   description: 'Scalable server solutions with Node.js and databases',
//                 },
//                 {
//                   title: 'UI/UX Design',
//                   description: 'User-centric design with modern aesthetics',
//                 },
//               ].map((service, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-900 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-800"
//                 >
//                   <h3 className="text-xl font-bold mb-4">{service.title}</h3>
//                   <p className="text-gray-400">{service.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
        
//       </ScrollReveal>       
//       </section>

//       <section id="portfolio" className="min-h-screen py-20">
//         {/* Your existing services section content */}
//         <ScrollReveal direction='left'>
       
//          <div className="max-w-7xl mx-auto px-4">
//            <h2 className="text-3xl font-bold mb-12 text-center">Recent Work</h2>
//            <div className="grid md:grid-cols-2 gap-12"> {/* Increased gap for better spacing */}
//              {portfolioImages.map((imageSrc, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-900 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:bg-gray-800"
//               >
//                 <Image
//                   src={imageSrc}
//                   alt={`Project ${index + 1}`}
//                   width={600}
//                   height={400}
//                   className="w-full h-64 object-cover" 
//                 />
//                 <div className="p-8"> {/* Increased padding for a larger content area */}
//                   <h3 className="text-xl font-bold mb-2">Project Title {index + 1}</h3>
//                   <p className="text-gray-400">
//                     Description of project and technologies used
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
      
//     </ScrollReveal>

//       </section>
//       {/* Contact Section */}
//       <section id="contact" className="py-20">
//        <ScrollReveal direction='bottom'>
     
//          <div className="max-w-6xl mx-auto px-4">
//            <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
//            <div className="grid md:grid-cols-2 gap-12">
//              <div>
//                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
//                <div className="space-y-4">
//                  <div className="flex items-center">
//                    <Mail className="w-5 h-5 mr-2" />
//                    <span>alex@example.com</span>
//                  </div>
//                  <div className="flex items-center">
//                    <Phone className="w-5 h-5 mr-2" />
//                    <span>+1 (555) 123-4567</span>
//                  </div>
//                  <div className="flex space-x-4 mt-6">
//                    <a href="#" className="text-gray-600 hover:text-blue-600">
//                      <Github className="w-6 h-6" />
//                    </a>
//                    <a href="#" className="text-gray-600 hover:text-blue-600">
//                      <Linkedin className="w-6 h-6" />
//                    </a>
//                  </div>
//                </div>
//              </div>
//              <form onSubmit={handleSubmit} className="space-y-4">
//                <div>
//                  <label className="block text-sm font-medium mb-1">Name</label>
//                  <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full p-2 text-gray-900 border rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-sky-500
// "
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-2 text-gray-900 border rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-sky-500
// "
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Message</label>
//                 <textarea
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   className="w-full p-2 text-gray-900 border rounded-lg h-32 focus:outline-none focus:border-white focus:ring-1 focus:ring-sky-500
// "
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hover:scale-95"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
 
//     </ScrollReveal>
//     </section>

//     </DynamicBackground>
//     <footer className="bg-gray-800 text-white py-8">
//          <div className="max-w-6xl mx-auto px-4 text-center">
//            <p>&copy; 2024 Alex Wachowski. All rights reserved.</p>
//          </div>
//        </footer>
//     </div>
//   );
// }

"use client"

// pages/index.js
import Head from 'next/head'
import { useState } from 'react'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form handling logic here
    console.log({ name, email, message })
  }

const portfolioImages = [
  '/images/portfolio_mockup_1.png', 
  '/images/portfolio_mockup_2.png', 
  '/images/portfolio_mockup_3.png',
  '/images/portfolio_mockup_4.png',
];

  return (
    <div className="min-h-screen bg-black animate-fade-in">
      <Head>
        <title>Alex Wachowski - Web Developer</title>
        <meta name="description" content="Professional web development services" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Alex Wachowski</div>
            <div className="flex space-x-4">
              <a href="#services" className="hover:text-blue-600">Services</a>
              <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

     {/* Hero section */}
    <section className="relative w-screen h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/images/new_ai_hero.webp" // Path relative to the "public" directory
          alt="Hero Background"
          layout="fill" // Fills the parent container
          objectFit="cover" // Ensures the image covers the container
          priority // Optimizes loading for the hero section
          className="opacity-60"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold sm:text-6xl">Alex Wachowski</h1>
        <p className="mt-4 text-lg sm:text-xl">Creating Together, Succeeding Together.</p>
      </div>
    </section>


      {/* Services Section */}
      <ScrollReveal direction='right'>
        <section id="services" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
            <div className="grid md:grid-cols-3 gap-12"> {/* Increased gap for more spacing */}
              {[
                {
                  title: 'Frontend Development',
                  description: 'Responsive websites using React, Next.js, and modern CSS',
                },
                {
                  title: 'Backend Development',
                  description: 'Scalable server solutions with Node.js and databases',
                },
                {
                  title: 'UI/UX Design',
                  description: 'User-centric design with modern aesthetics',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-800"
                >
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>       

     {/* Portfolio Section */}
     <ScrollReveal direction='left'>
      <section id="portfolio" className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Work</h2>
          <div className="grid md:grid-cols-2 gap-12"> {/* Increased gap for better spacing */}
            {portfolioImages.map((imageSrc, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:bg-gray-800"
              >
                <Image
                  src={imageSrc}
                  alt={`Project ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover" 
                />
                <div className="p-8"> {/* Increased padding for a larger content area */}
                  <h3 className="text-xl font-bold mb-2">Project Title {index + 1}</h3>
                  <p className="text-gray-400">
                    Description of project and technologies used
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal direction='bottom'>
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>alex@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 text-gray-900 border rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-sky-500
"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 text-gray-900 border rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-sky-500
"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 text-gray-900 border rounded-lg h-32 focus:outline-none focus:border-white focus:ring-1 focus:ring-sky-500
"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hover:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </ScrollReveal>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Alex Wachowski. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}