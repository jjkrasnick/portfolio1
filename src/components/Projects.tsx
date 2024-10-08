import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, TrendingUp, Database, Server, Brain } from 'lucide-react'

const projects = [
  {
    title: "Algorithmic Trading Platform",
    description: "Developed a high-frequency trading system using Python, integrating machine learning models for market prediction and automated order execution.",
    tags: ["Python", "TensorFlow", "pandas", "RESTful APIs"],
    icon: TrendingUp,
    github: "https://github.com/yourusername/algo-trading-platform",
    live: "https://algo-trading-demo.yourdomain.com",
  },
  {
    title: "Quantitative Risk Management Tool",
    description: "Built a comprehensive risk assessment tool for portfolio management, implementing VaR and Monte Carlo simulations.",
    tags: ["R", "Shiny", "ggplot2", "Financial Modeling"],
    icon: Database,
    github: "https://github.com/yourusername/quant-risk-tool",
    live: "https://quant-risk-tool.yourdomain.com",
  },
  {
    title: "Blockchain-based Smart Contract System",
    description: "Implemented a decentralized finance (DeFi) application using Ethereum smart contracts and Web3.js for transparent and secure financial transactions.",
    tags: ["Solidity", "Web3.js", "React", "Ethereum"],
    icon: Server,
    github: "https://github.com/yourusername/defi-smart-contracts",
    live: "https://defi-demo.yourdomain.com",
  },
  {
    title: "AI-Driven Financial Forecasting",
    description: "Developed an advanced time-series forecasting model using LSTM neural networks to predict stock prices and market trends.",
    tags: ["Python", "Keras", "LSTM", "Time Series Analysis"],
    icon: Brain,
    github: "https://github.com/yourusername/ai-financial-forecasting",
    live: "https://ai-forecast-demo.yourdomain.com",
  },
  {
    title: "Automated M&A Valuation Tool",
    description: "Created a web application to automate the process of company valuation and M&A analysis using financial modeling techniques.",
    tags: ["Python", "Django", "pandas", "Financial Analysis"],
    icon: Database,
    github: "https://github.com/yourusername/ma-valuation-tool",
    live: "https://ma-valuation.yourdomain.com",
  },
  {
    title: "Real-time Market Data Dashboard",
    description: "Built a responsive web dashboard for real-time visualization of market data, integrating multiple financial APIs and WebSocket for live updates.",
    tags: ["React", "D3.js", "Node.js", "WebSocket"],
    icon: TrendingUp,
    github: "https://github.com/yourusername/market-data-dashboard",
    live: "https://market-dashboard.yourdomain.com",
  },
]

const Projects: React.FC = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-20 section-bg"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <project.icon className="text-3xl text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full mr-2 mb-2">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center">
                    <Github size={20} className="mr-1" /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center">
                    <ExternalLink size={20} className="mr-1" /> Live Demo
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

export default Projects