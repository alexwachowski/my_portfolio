"use client"

import Head from 'next/head'
import { useState } from 'react'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Add form handling logic here
      console.log({ name, email, message });
    };
    
    return (
<div className="bg-gray-700">
        <nav className="bg-black shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold">
                      <Link href="/">Alex Wachowski</Link>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/services" className="hover:text-blue-600">Services</a>
                        <a href="/portfolio" className="hover:text-blue-600">Portfolio</a>
                        <a href="/contact" className="hover:text-blue-600">Contact</a>
                    </div>
                </div>
            </div>
        </nav>  
    <section id="contact" className="py-20 my-16">
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
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Alex Wachowski. All rights reserved.</p>
        </div>
      </footer>
    
    </div>
)}