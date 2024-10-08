import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20 section-bg"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">About</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm a passionate and driven individual pursuing a unique combination of Computer Science, Mathematics, Finance, and Economics, with a minor in Data Science at Pepperdine University in Los Angeles, CA. My interdisciplinary background equips me with a holistic understanding of technology and finance, allowing me to bridge the gap between these two dynamic fields.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            With a strong foundation in software engineering and quantitative analysis, I'm particularly interested in the intersection of technology and finance. My experience spans from developing cutting-edge algorithms for high-frequency trading to creating innovative fintech solutions. I'm constantly exploring new technologies and methodologies to push the boundaries of what's possible in financial technology.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm actively seeking opportunities in Software Engineering, Quantitative Trading, Investment Banking, Venture Capital, and Private Equity. My goal is to leverage my technical skills and financial acumen to drive innovation and create value in the rapidly evolving landscape of finance and technology.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About