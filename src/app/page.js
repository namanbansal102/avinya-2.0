'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'
import BlogCard from './components/BlogCard'

export default function AnimatedBlogCard() {
  const [isHovered, setIsHovered] = useState(false)
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/viewBlog");
      const result = await res.json();
      setData(result.data);
    };
    fetchData();
  }, []); // Add an empty dependency array

  return (
    <div className='p-24'>
      <div className="relative h-64 w-full ">
        <img
          src="https://media.gettyimages.com/id/482857481/photo/magnificent-mountain-panorama-snowy-peaks-high-above-clouds-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=WP2O1lcsAVzlCAXkh76Qav09gvapYp3ajq5jBm6qhCU="
          alt="Person working on laptop in office hallway"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out h-56"
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
            <img
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
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
      <div className='p-24'>
      <center>
        <h1 className='py-3 text-3xl  '>Our Blogs</h1>
      </center>

      <div className='grid grid-cols-3 gap-y-[10vh] gap-x-16 max-sm:grid-cols-1'>
        {data.map(({_id,blogCode,image,travelType,authorName,summary,title}) => (
          <Link href={`/blogs/${blogCode}`}>
          <BlogCard key={_id} props={{image,travelType,authorName,summary,title}} /> 
          </Link>
        ))}
      </div>
    </div>
      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <img
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            alt="Jonathan Doe"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Jonathan Doe</h2>
          <p className="text-gray-600">Collaborator & Editor</p>
        </div>
        <p className="mt-6 text-lg text-gray-700">
          Meet Jonathan Doe, a passionate writer and blogger with a love for
          technology and travel. Jonathan holds a degree in Computer Science and
          has spent years working in the tech industry, gaining a deep understanding
          of the impact technology has on our lives.
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">YouTube</span>
            <Youtube className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
    
    </div>
  )
}