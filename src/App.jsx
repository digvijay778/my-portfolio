import React, { createContext, useContext, useState,useEffect } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'

// Create Loading Context
const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export default function App() {
   const [loading, setLoading] = useState(true); // Set to true initially
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <div className="min-h-screen bg-gray-900">
        {/* Loading overlay */}
        {loading && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50">
            <LoadingSpinner size={60} color="#3b82f6" />
          </div>
        )}

        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LoadingContext.Provider>
  )
}
