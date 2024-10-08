import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, TrendingUp, Code, BarChart, Database } from 'lucide-react'

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Tech Innovators Inc.",
    duration: "Summer 2023",
    description: "Developed scalable microservices using Node.js and Docker. Implemented machine learning models for predictive analytics.",
    icon: Code,
  },
  {
    title: "Quantitative Trading Intern",
    company: "AlphaQuant Hedge Fund",
    duration: "Fall 2022",
    description: "Built and backtested trading algorithms using Python and pandas. Conducted statistical analysis on large financial datasets.",
    icon: TrendingUp,
  },
  {
    title: "Investment Banking Analyst Intern",
    company: "Global Finance Partners",
    duration: "Summer 2022",
    description: "Assisted in M&A transactions and financial modeling. Conducted industry research and prepared client presentations.",
    icon: Briefcase,
  },
  {
    title: "Data Science Research Assistant",
    company: "Pepperdine University",
    duration: "2021 - Present",
    description: "Applying machine learning techniques to financial market data. Publishing research on predictive modeling in quantitative finance.",
    icon: BarChart,
  },
  {
    title: "Venture Capital Intern",
    company: "TechFuture Ventures",
    duration: "Spring 2022",
    description: "Evaluated startup pitches and conducted due diligence. Assisted in deal sourcing and portfolio management.",
    icon: Database,
  },
]

/**
 * React functional component that renders an Experience section
 * @returns {JSX.Element} A section containing a list of experiences with animations
 */
const Experience: React.FC = () => {
  return (
    <motion.section 
      id="experience" 
      className="py-20 section-bg"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex-shrink-0">
                <exp.icon size={40} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.company} | {exp.duration}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience