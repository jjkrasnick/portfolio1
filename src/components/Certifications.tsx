import React from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certifications = [
  {
    name: "Securities Industry Essentials (SIE)",
    issuer: "FINRA",
    date: "Expected 2024",
  },
  {
    name: "Series 63 - Uniform Securities Agent State Law Examination",
    issuer: "NASAA",
    date: "Expected 2024",
  },
  {
    name: "Series 65 - Uniform Investment Adviser Law Examination",
    issuer: "NASAA",
    date: "Expected 2024",
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    issuer: "ISC²",
    date: "In Progress",
  },
  {
    name: "Financial Risk Manager (FRM)",
    issuer: "GARP",
    date: "Expected 2024",
  },
]

const Certifications: React.FC = () => {
  return (
    <motion.section 
      id="certifications" 
      className="py-20 section-bg"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">Certifications & Licenses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{cert.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.issuer}</p>
              <p className="text-gray-500 dark:text-gray-400">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Certifications