'use client'

import { useState } from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight } from 'lucide-react'

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 text-sm"
  >
    {children}
  </a>
)

const SocialButton = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={20} />
  </a>
)

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Signing up for newsletter with email:', email)
    setEmail('')
  }

  return (
    <footer className="bg-white text-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-gray-600">
              We are a company dedicated to providing innovative solutions for our customers.
              Our mission is to make technology accessible and user-friendly for everyone.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/products">Products</FooterLink></li>
              <li><FooterLink href="/about">About</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-gray-600">
              123 Tech Street<br />
              San Francisco, CA 94107<br />
              Email: info@example.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">&copy; 2024 Your Company Name. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <SocialButton href="https://facebook.com" icon={Facebook} />
            <SocialButton href="https://twitter.com" icon={Twitter} />
            <SocialButton href="https://instagram.com" icon={Instagram} />
            <SocialButton href="https://linkedin.com" icon={Linkedin} />
            <SocialButton href="https://github.com" icon={Github} />
          </div>
        </div>
      </div>
    </footer>
  )
}