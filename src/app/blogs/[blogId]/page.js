'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Bell, Home, Bookmark, MessageSquare, User, Edit2, Send } from 'lucide-react'
import { useRouter } from 'next/navigation'




// Custom Avatar Component
const Avatar = ({ src, alt, fallback }) => (
  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
    {!src && (
      <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-semibold">
        {fallback}
      </div>
    )}
  </div>
)

// Custom Button Component
const Button = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary" 
}) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200 ease-in-out"
  const variantClasses = variant === "primary" 
    ? "bg-purple-600 text-white hover:bg-purple-700" 
    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
  
  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  )
}

// Custom Textarea Component
const Textarea = ({ 
  placeholder, 
  value, 
  onChange, 
  className = "" 
}) => (
  <textarea 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange} 
    className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
  />
)

export default function BlogPage({ params }) {
  const [isHovered, setIsHovered] = useState(false)
  const [data, setData] = useState({ authorName: '', title: '', image: '', summary: '' })
  const router = useRouter()
  const [comments, setComments] = useState([
    { id: 1, user: "Alice", avatar: "/placeholder.svg?height=40&width=40", content: "Great post! I learned a lot.", timestamp: "2 hours ago" },
    { id: 2, user: "Bob", avatar: "/placeholder.svg?height=40&width=40", content: "Thanks for sharing this information.", timestamp: "1 hour ago" },
    { id: 3, user: "Charlie", avatar: "/placeholder.svg?height=40&width=40", content: "I have a question about the third point...", timestamp: "30 minutes ago" },
  ])
  const [newComment, setNewComment] = useState("")
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/fetchBlog", {
          method: "POST",
          body: JSON.stringify({
            "blogCode": params.blogId
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        const json = await response.json()
        setData(json.data)
      } catch (error) {
        console.error("Error fetching blog data:", error)
      }
    }
    fetchData()
  }, [params.blogId])

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        user: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        content: newComment,
        timestamp: "Just now"
      }
      setComments([...comments, newCommentObj])
      setNewComment("")
    }
  }

  const handleEditComment = (id, newContent) => {
  }

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 py-8">
        <main className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  alt="Author"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">{data.authorName}</h2>
                  <p className="text-gray-500">UX Designer • 5min read</p>
                </div>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-6"
              >
                {data.title}
              </motion.h1>
              <motion.img
                src={data.image}
                alt="Blog Cover"
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
               {data.summary}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-700 leading-relaxed mb-8"
              >
                Each map has a unique purpose and, thus, varies in structure and content. Though many of these
                maps begin in rough formats (for example, as a set of sticky notes or a collaborative spreadsheet),
                they are often transformed to a polished form in order to be shared with others. This article outlines
                some visual-design tips for improving the appearance of your UX maps.
              </motion.p>

              {/* Comment Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <MessageSquare className="mr-2" />
                  Comments ({comments.length})
                </h2>
                
                {comments.map(comment => (
                  <div key={comment.id} className="bg-gray-50 rounded-lg p-4 shadow-sm transition-shadow hover:shadow-md mb-4">
                    <div className="flex items-start space-x-4">
                      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt={comment.user} fallback={comment.user[0]} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{comment.user}</h3>
                          <span className="text-sm text-gray-500">{comment.timestamp}</span>
                        </div>
                        {editingId === comment.id ? (
                          <Textarea
                            placeholder="Edit your comment..."
                            value={comment.content}
                            onChange={(e) => handleEditComment(comment.id, e.target.value)}
                            className="mt-2"
                          />
                        ) : (
                          <p className="mt-1">{comment.content}</p>
                        )}
                      </div>
                    </div>
                    {comment.user === "You" && editingId !== comment.id && (
                      <Button
                        onClick={() => setEditingId(comment.id)}
                        className="mt-2"
                        variant="ghost"
                      >
                        <Edit2 className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    )}
                  </div>
                ))}
                
                <div className="flex items-start space-x-4 mt-6">
                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" alt="Your Avatar" fallback="You" />
                  <div className="flex-1">
                    <Textarea
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full"
                    />
                    <Button
                      onClick={handleAddComment}
                      className="mt-2"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>
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
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
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