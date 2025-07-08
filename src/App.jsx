import React, { createContext, useContext, useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15; // Random increment for realistic feel
      });
    }, 200);

    // Complete loading after 3 seconds
    const timer = setTimeout(() => {
      setLoadingProgress(100);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Small delay after reaching 100%
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <div className="min-h-screen bg-gray-900">
        {/* Enhanced Cosmic Loading Overlay */}
        {loading && (
          <div className="cosmic-loading-overlay">
            {/* Cosmic background elements */}
            <div className="cosmic-loading-stars">
              <div className="loading-star-field">
                {[...Array(50)].map((_, i) => (
                  <div 
                    key={i}
                    className="loading-star-dot"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Cosmic dust clouds */}
            <div className="cosmic-loading-dust">
              <div className="loading-dust-1"></div>
              <div className="loading-dust-2"></div>
              <div className="loading-dust-3"></div>
            </div>

            {/* Main loading content */}
            <div className="cosmic-loading-content">
              {/* Portfolio title with cosmic effect */}
              <div className="cosmic-loading-title">
                <h1 className="cosmic-title-text">
                  <span className="title-letter">T</span>
                  <span className="title-letter">e</span>
                  <span className="title-letter">c</span>
                  <span className="title-letter">h</span>
                  <span className="title-letter"> </span>
                  <span className="title-letter">V</span>
                  <span className="title-letter">i</span>
                  <span className="title-letter">s</span>
                  <span className="title-letter">i</span>
                  <span className="title-letter">o</span>
                  <span className="title-letter">n</span>
                  <span className="title-letter">a</span>
                  <span className="title-letter">r</span>
                  <span className="title-letter">y</span>
                </h1>
                <p className="cosmic-subtitle">Building Tomorrow's Solutions</p>
              </div>

              {/* Enhanced loading spinner */}
              <div className="cosmic-spinner-container">
                <LoadingSpinner size={80} color="#3b82f6" variant="cosmic" />
              </div>

              {/* Loading progress bar */}
              <div className="cosmic-progress-container">
                <div className="cosmic-progress-bar">
                  <div 
                    className="cosmic-progress-fill"
                    style={{ width: `${Math.min(loadingProgress, 100)}%` }}
                  ></div>
                </div>
                <div className="cosmic-progress-text">
                  {Math.round(Math.min(loadingProgress, 100))}%
                </div>
              </div>

              {/* Loading messages */}
              <div className="cosmic-loading-messages">
                <div className="loading-message">
                  {loadingProgress < 30 && "Initializing visionary portfolio..."}
                  {loadingProgress >= 30 && loadingProgress < 60 && "Loading innovative projects..."}
                  {loadingProgress >= 60 && loadingProgress < 90 && "Preparing future solutions..."}
                  {loadingProgress >= 90 && "Ready to envision the future..."}
                </div>
              </div>
            </div>

            {/* Cosmic shooting stars */}
            <div className="cosmic-shooting-stars">
              <div className="shooting-star shooting-star-loading-1"></div>
              <div className="shooting-star shooting-star-loading-2"></div>
              <div className="shooting-star shooting-star-loading-3"></div>
            </div>
          </div>
        )}

        {/* Main content with fade-in animation */}
        <div className={`main-content ${!loading ? 'content-fade-in' : 'content-hidden'}`}>
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
      </div>
    </LoadingContext.Provider>
  )
}
