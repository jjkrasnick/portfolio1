import React, { useState, useEffect } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Research', 'Certifications', 'Testimonials', 'Contact']

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80 // Adjust this value to fine-tune the scroll position
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('bg-background', 'dark:bg-dark-background', 'shadow-md')
        } else {
          header.classList.remove('bg-background', 'dark:bg-dark-background', 'shadow-md')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className="fixed w-full z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" onClick={() => scrollToSection('hero')} className="text-2xl font-bold text-text">JK</a>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 right-0 bg-background dark:bg-dark-background md:bg-transparent z-50 md:space-x-2`}>
          {navItems.map((item) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="py-2 md:py-1 px-4 text-text hover:text-primary transition-colors duration-300"
              onClick={() => scrollToSection(item.toLowerCase())}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.a 
            href="/path-to-your-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="py-2 md:py-1 px-4 text-text hover:text-primary transition-colors duration-300"
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </nav>
        <div className="flex items-center space-x-4">
          <motion.button 
            onClick={toggleTheme} 
            className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-text transition-colors duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' ? (
              <>
                <Sun size={20} className="mr-2" />
                Light
              </>
            ) : (
              <>
                <Moon size={20} className="mr-2" />
                Dark
              </>
            )}
          </motion.button>
          <motion.button 
            onClick={toggleMenu} 
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? 
              <X size={24} className="text-text" /> : 
              <Menu size={24} className="text-text" />
            }
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header