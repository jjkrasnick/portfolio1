import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "John Doe",
    position: "CTO, Tech Innovators Inc.",
    content: "JJ's ability to quickly grasp complex concepts and implement innovative solutions is truly impressive. His contributions to our team were invaluable.",
  },
  {
    name: "Jane Smith",
    position: "Senior Quant, AlphaQuant Hedge Fund",
    content: "JJ demonstrated exceptional skills in algorithmic trading and data analysis. His passion for finance and technology is evident in his work.",
  },
  {
    name: "Michael Johnson",
    position: "Managing Director, Global Finance Partners",
    content: "JJ's analytical skills and attention to detail make him stand out. He has a bright future in the intersection of finance and technology.",
  },
]

/**
 * Renders a testimonials section with animated components using Framer Motion.
 * @returns {JSX.Element} A React functional component that displays a grid of testimonials with animations.
 */
const Testimonials: React.FC = () => {
  return (
    <motion.section 
      id="testimonials" 
      className="py-20 section-bg"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.content}</p>
              <div className="font-semibold text-black dark:text-white">{testimonial.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonials