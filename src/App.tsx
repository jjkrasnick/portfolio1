import React, { Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Research from './components/Research'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="min-h-screen bg-white dark:bg-dark-blue text-black dark:text-white">
            <Header />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Research />
              <Certifications />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </div>
        </Suspense>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App