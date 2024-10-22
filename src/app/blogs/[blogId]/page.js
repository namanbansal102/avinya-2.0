'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Bell, Home, Bookmark, MessageSquare, User } from 'lucide-react'

export default function BlogPage() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 py-8">
       

        <main className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <div className="flex items-center mb-6">
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="Author"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">Maria Lawrence</h2>
                  <p className="text-gray-500">UX Designer • 5min read</p>
                </div>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-6"
              >
                UX Mapping Methods: Visual-Design Guide
              </motion.h1>
              <motion.img
                src="/placeholder.svg?height=400&width=800"
                alt="UX Mapping"
                className="w-full h-64 object-cover mb-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700 leading-relaxed mb-6"
              >
                UX visualizations (commonly referred to as UX mapping methods) are artifacts that describe various
                aspects of a product or service's user experience. These include user flows, journey mappings,
                empathy maps, customer journey maps, service blueprints, and roadmaps, to name a few.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-700 leading-relaxed"
              >
                Each map has a unique purpose and, thus, varies in structure and content. Though many of these
                maps begin in rough formats (for example, as a set of sticky notes or a collaborative spreadsheet),
                they are often transformed to a polished form in order to be shared with others. This article outlines
                some visual-design tips for improving the appearance of your UX maps.
              </motion.p>
            </div>
            <div className="md:w-1/3 bg-gray-100 p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">About the Author</h3>
                <p className="text-gray-700">
                  Lead UX Designer & Stack Levels Consulting with 10+ years of experience. Love to
                  design user-centric products and understanding consumer behavior.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Suggested Reads</h3>
                <ul className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ scale: 1.05, backgroundColor: '#f3e8ff' }}
                      className="flex items-center space-x-4 p-2 rounded-lg cursor-pointer transition-colors duration-300"
                    >
                      <img
                        src="/placeholder.svg?height=60&width=60"
                        alt={`Suggested article ${item}`}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-semibold">Suggested Article Title {item}</h4>
                        <p className="text-sm text-gray-500">Author Name</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}