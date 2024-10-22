'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export default function AnimatedBlogCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='p-24'>
      <div className="relative h-64 w-full ">
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Person working on laptop in office hallway"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 p-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <motion.span
            className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mb-2"
            whileHover={{ scale: 1.1 }}
          >
            Technology
          </motion.span>
          <h2 className="text-2xl font-bold text-white mb-2">
            The Impact of Technology on the Workplace: How Technology is Changing
          </h2>
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Jason Francisco"
              width={40}
              height={40}
              className="rounded-full mr-4 border-2 border-white"
            />
            <div>
              <p className="text-white font-semibold">Jason Francisco</p>
              <div className="flex items-center text-gray-300 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>August 20, 2022</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="p-6 bg-white"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-gray-700 text-base">
          Explore the transformative power of technology in modern workplaces. From AI-driven productivity tools to remote collaboration platforms, discover how innovation is reshaping the way we work and interact in professional environments.
        </p>
        <motion.button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read More
        </motion.button>
      </motion.div>
    
    </div>
  )
}