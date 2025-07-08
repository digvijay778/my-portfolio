import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 shadow-lg cosmic-header">
      {/* Cosmic Header Background */}
      <div className="cosmic-header-bg">
        {/* Floating cosmic particles */}
        <div className="header-particle" style={{left: '10%', animationDelay: '0s'}}></div>
        <div className="header-particle" style={{left: '30%', animationDelay: '2s'}}></div>
        <div className="header-particle" style={{left: '50%', animationDelay: '4s'}}></div>
        <div className="header-particle" style={{left: '70%', animationDelay: '6s'}}></div>
        <div className="header-particle" style={{left: '90%', animationDelay: '8s'}}></div>
        
        {/* Cosmic glow effect */}
        <div className="cosmic-glow"></div>
      </div>

      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex justify-between items-center text-white">
          {/* Smaller Cosmic Logo */}
          <button 
            onClick={() => handleScroll('home')} 
            className="cosmic-logo-compact animate-logo-glow group"
          >
            <div className="logo-container-compact">
              {/* Cosmic ring around logo */}
              <div className="logo-ring-compact"></div>
              
              {/* Main logo content */}
              <div className="logo-content-compact">
                <span className="logo-letter-compact">D</span>
                <span className="logo-letter-compact animation-delay-200">S</span>
              </div>
              
              {/* Logo particles */}
              <div className="logo-particles-compact">
                <div className="logo-particle logo-particle-1"></div>
                <div className="logo-particle logo-particle-2"></div>
                <div className="logo-particle logo-particle-3"></div>
              </div>
            </div>
          </button>
          
          <nav className="hidden md:flex space-x-8 text-white">
            <button 
              onClick={() => handleScroll('home')} 
              className="nav-link cosmic-nav-link font-semibold text-lg tracking-wide"
            >
              Home
            </button>
            <button 
              onClick={() => handleScroll('about')} 
              className="nav-link cosmic-nav-link font-semibold text-lg tracking-wide"
            >
              About
            </button>
            <button 
              onClick={() => handleScroll('skills')} 
              className="nav-link cosmic-nav-link font-semibold text-lg tracking-wide"
            >
              Skills
            </button>
            <button 
              onClick={() => handleScroll('projects')} 
              className="nav-link cosmic-nav-link font-semibold text-lg tracking-wide"
            >
              Projects
            </button>
            <button 
              onClick={() => handleScroll('contact')} 
              className="nav-link cosmic-nav-link font-semibold text-lg tracking-wide"
            >
              Contact
            </button>
          </nav>
          
          <button 
            className="md:hidden text-white hover:text-blue-400 focus:outline-none cosmic-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl animate-pulse-gentle" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${mobileMenuOpen ? 'block animate-slide-down' : 'hidden'} md:hidden mt-4 pb-4 text-white mobile-menu-cosmic`}>
          <button 
            onClick={() => handleScroll('home')} 
            className="block py-2 w-full text-left cosmic-mobile-link font-medium text-lg tracking-wide"
          >
            Home
          </button>
          <button 
            onClick={() => handleScroll('about')} 
            className="block py-2 w-full text-left cosmic-mobile-link font-medium text-lg tracking-wide"
          >
            About
          </button>
          <button 
            onClick={() => handleScroll('skills')} 
            className="block py-2 w-full text-left cosmic-mobile-link font-medium text-lg tracking-wide"
          >
            Skills
          </button>
          <button 
            onClick={() => handleScroll('projects')} 
            className="block py-2 w-full text-left cosmic-mobile-link font-medium text-lg tracking-wide"
          >
            Projects
          </button>
          <button 
            onClick={() => handleScroll('contact')} 
            className="block py-2 w-full text-left cosmic-mobile-link font-medium text-lg tracking-wide"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
