"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-400 hover:text-white transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const SocialIcon = ({ Icon }) => (
  <motion.a
    href="#"
    className="text-gray-400 hover:text-white transition-colors duration-300"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={20} />
  </motion.a>
);

const EnhancedFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold ">aktive</h2>
            <p className="text-gray-400">Empowering your active lifestyle with premium gear and apparel.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">HELP</h3>
            <ul className="space-y-2">
              {['FAQs', 'Shipping', 'Returns', 'Size Guides', 'Materials & Care', 'Contact Us'].map((item) => (
                <li key={item}>
                  <FooterLink href="#">{item}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
            <ul className="space-y-2">
              {['About Us', 'The Rewards Stock', 'Sustainability', 'Careers', 'Blog'].map((item) => (
                <li key={item}>
                  <FooterLink href="#">{item}</FooterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
            <p className="text-gray-400 mb-4">Subscribe to be aware of our regular promotions & exclusive offers</p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email..."
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                required
              />
              <motion.button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight size={20} />
              </motion.button>
            </form>
            <div className="flex space-x-4 mt-6">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Youtube} />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} aktive. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
  {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay'].map((payment) => {
    const paymentSrc = `/placeholder.svg?height=30&width=50&text=${payment}`; // Create the source URL
    return (
      <motion.img
        key={payment}
        src={paymentSrc} // Use the constructed URL
        className="h-8"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        alt={payment} // Add an alt attribute for accessibility
      />
    );
  })}
</div>

        </motion.div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;