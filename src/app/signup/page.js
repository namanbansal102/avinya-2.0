'use client'

import { useState } from 'react'
import { Apple, Twitter } from 'lucide-react'

const CustomInput = ({ id, type, placeholder, value, onChange, className }) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ${className}`}
  />
)

const CustomButton = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={`w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ${className}`}
  >
    {children}
  </button>
)

const CustomCheckbox = ({ id, checked, onChange, label }) => (
  <div className="flex items-center">
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
    />
    <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
      {label}
    </label>
  </div>
)

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="min-h-screen relative    flex items-center justify-center bg-gradient-to-br  p-4">
      <div className="w-full max-w-md ">
        <div className="bg-white shadow-2xl rounded-3xl px-8 pt-10 pb-8 mb-4 transform transition-all duration-500 ease-in-out hover:scale-105  mt-24">
          <div className="mb-8 text-center">
            <div className="inline-block w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full p-2 transform transition-transform duration-500 ease-in-out hover:rotate-180">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 animate-fade-in-down">
              Create Account
            </h2>
            <p className="mt-2 text-sm text-gray-600 animate-fade-in-up">
              Please enter your details to Create Account.
            </p>
          </div>
          <div className="space-y-4 animate-fade-in">
            <div className="flex justify-between space-x-4">
              <CustomButton
                className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={() => {}}
              >
                <Apple className="w-5 h-5 inline-block mr-2" />
                Apple
              </CustomButton>
              <CustomButton
                className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={() => {}}
              >
                <svg className="w-5 h-5 inline-block mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </CustomButton>
              <CustomButton
                className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={() => {}}
              >
                <Twitter className="w-5 h-5 inline-block mr-2" />
                Twitter
              </CustomButton>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="w-16 h-px bg-gray-200"></span>
              <span className="text-gray-500 font-medium">OR</span>
              <span className="w-16 h-px bg-gray-200"></span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <CustomInput
                  id="first-name"
                  type="text"
                  placeholder="John"
                  
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 animate-pulse-subtle"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <CustomInput
                  id="last-name"
                  type="text"
                  placeholder="Doe"
                
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 animate-pulse-subtle"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-Mail Address
              </label>
              <CustomInput
                id="email"
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 animate-pulse-subtle"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <CustomInput
                id="password"
                type="password"
                placeholder="••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 animate-pulse-subtle"
              />
            </div>
            <div className="flex items-center justify-between">
              <CustomCheckbox
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                label="Remember me"
              />
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-300">
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <CustomButton
                className="text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:ring-indigo-500 transform hover:scale-105"
                onClick={() => {}}
              >
                Create Account
              </CustomButton>
            </div>
          </div>
          <div className="mt-6 text-center animate-fade-in">
            <p className="text-sm text-gray-600">
              Already Having Account?{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-300">
                Sign In 
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}