'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export default function BlogCard({props}) {
  console.log("My Props Are::::::",props);
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 ease-in-out "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-44 w-full overflow-hidden cursor-pointer">
        <img
          src={props.image}
          alt="Beach aerial view"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
      </div>
      <div className="px-4 py-3">
        <motion.div
          className="inline-block bg-blue-100 rounded-full px-2 py-1 text-xs font-semibold text-blue-600 mb-2"
          whileHover={{ scale: 1.1 }}
        >
          {props.title}
        </motion.div>
        <h2 className="text-lg font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
          {props.title}
        </h2>
        <div className="flex items-center mt-3">
          <img
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            alt="Tracey Wilson"
            width={32}
            height={32}
            className="rounded-full mr-3"
          />
          <div>
            <p className="text-gray-700 font-semibold text-sm">{props.authorName}</p>
            <div className="flex items-center text-gray-500 text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              <span>August 20, 2022</span>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="px-4 py-3 bg-gray-100"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-gray-700 text-xs">
          {props.summary.length > 9 ? props.summary.slice(0, 50) : props.summary}
        </p>
      </motion.div>
    </motion.div>
  )
}