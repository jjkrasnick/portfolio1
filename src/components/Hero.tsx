import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Github, Linkedin, Mail } from 'lucide-react'
import { FaXTwitter, FaTiktok, FaYoutube } from 'react-icons/fa6'
import { SiMedium } from 'react-icons/si'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  const [text, setText] = useState('')
  const fullText = "Software Engineer | Quantitative Trader | Aspiring Founder"
  const typingSpeed = 50
  const resetDelay = 3000 // 3 seconds delay before resetting

  useEffect(() => {
    let index = 0
    let isDeleting = false
    let timeout: NodeJS.Timeout

    const typeText = () => {
      setText(fullText.slice(0, index))

      if (!isDeleting && index === fullText.length) {
        isDeleting = true
        timeout = setTimeout(() => {
          typeText()
        }, resetDelay)
        return
      }

      if (isDeleting && index === 0) {
        isDeleting = false
      }

      index = isDeleting ? index - 1 : index + 1
      timeout = setTimeout(typeText, typingSpeed)
    }

    typeText()

    return () => clearTimeout(timeout)
  }, [])

  const socialIconClass = "text-2xl transition-colors duration-300 hover:text-primary"

  return (
    <section id="hero" className="flex items-center justify-center min-h-screen bg-background dark:bg-dark-background text-text">
      <Helmet>
        <title>JJ Krasnick - Software Engineer & Quantitative Trader</title>
        <meta name="description" content="JJ Krasnick's portfolio - Software Engineer, Quantitative Trader, and aspiring Founder. Explore projects, skills, and experience in technology and finance." />
      </Helmet>
      <div className="text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          JJ Krasnick
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {text}
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
            <Github />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
            <Linkedin />
          </a>
          <a href="mailto:your.email@example.com" className={socialIconClass}>
            <Mail />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
            <FaXTwitter />
          </a>
          <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
            <SiMedium />
          </a>
          <a href="https://tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
            <FaTiktok />
          </a>
          <a href="https://youtube.com/@yourusername" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
            <FaYoutube />
          </a>
        </motion.div>
        <motion.div 
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a 
            href="#contact" 
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get in Touch
          </motion.a>
          <motion.a 
            href="/path-to-your-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero