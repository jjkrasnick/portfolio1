import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

const researchPapers = [
  {
    title: "Machine Learning Approaches in High-Frequency Trading",
    journal: "Journal of Computational Finance",
    year: 2023,
    link: "https://example.com/paper1",
  },
  {
    title: "Predictive Modeling of Market Volatility Using LSTM Networks",
    journal: "Quantitative Finance",
    year: 2022,
    link: "https://example.com/paper2",
  },
  {
    title: "Blockchain Technology in Decentralized Finance: Opportunities and Challenges",
    journal: "Journal of Financial Technology",
    year: 2023,
    link: "https://example.com/paper3",
  },
  {
    title: "Algorithmic Trading Strategies: A Comparative Study of Traditional and AI-based Approaches",
    journal: "International Journal of Financial Studies",
    year: 2022,
    link: "https://example.com/paper4",
  },
  {
    title: "The Impact of Natural Language Processing on Financial News Analysis",
    journal: "Journal of Artificial Intelligence in Finance",
    year: 2023,
    link: "https://example.com/paper5",
  },
]

const Research: React.FC = () => {
  return (
    <motion.section 
      id="research" 
      className="py-20 section-bg"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">Research Publications</h2>
        <div className="space-y-8">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-start">
                <FileText className="text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{paper.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{paper.journal}, {paper.year}</p>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                  >
                    Read Paper <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Research