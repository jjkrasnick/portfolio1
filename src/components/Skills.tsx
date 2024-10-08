import React from 'react'
import { motion } from 'framer-motion'
import { SiPython, SiCplusplus, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiDocker, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiMongodb, SiPostgresql, SiGit, SiR, SiTableau, SiPowerbi } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "R", icon: SiR },
    ]
  },
  {
    name: "Web Development",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
    ]
  },
  {
    name: "Data Science & ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ]
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: FaAws },
      { name: "Git", icon: SiGit },
    ]
  },
  {
    name: "Data Visualization",
    skills: [
      { name: "Tableau", icon: SiTableau },
      { name: "Power BI", icon: SiPowerbi },
    ]
  },
]

/**
 * Renders a Skills section component with animated skill categories and items.
 * @returns {JSX.Element} A motion.section containing skill categories and animated skill items.
 */
const Skills: React.FC = () => {
  return (
    <motion.section 
      id="skills" 
      className="py-20 section-bg"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">Skills</h2>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white">{category.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <skill.icon className="text-3xl text-blue-600 dark:text-blue-400" />
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills