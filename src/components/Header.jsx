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
    <header className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center text-white">
          <button onClick={() => handleScroll('home')} className="text-2xl font-bold gradient-text text-white">DS</button>
          
          <nav className="hidden md:flex space-x-8 text-white">
            <button onClick={() => handleScroll('home')} className="nav-link text-white hover:text-blue-400">Home</button>
            <button onClick={() => handleScroll('about')} className="nav-link text-white hover:text-blue-400">About</button>
            <button onClick={() => handleScroll('skills')} className="nav-link text-white hover:text-blue-400">Skills</button>
            <button onClick={() => handleScroll('projects')} className="nav-link text-white hover:text-blue-400">Projects</button>
            <button onClick={() => handleScroll('contact')} className="nav-link text-white hover:text-blue-400">Contact</button>
          </nav>
          
          <button 
            className="md:hidden text-white hover:text-blue-400 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4 text-white`}>
          <button 
            onClick={() => handleScroll('home')} 
            className="block py-2 hover:text-blue-400 w-full text-left text-white"
          >
            Home
          </button>
          <button 
            onClick={() => handleScroll('about')} 
            className="block py-2 hover:text-blue-400 w-full text-left text-white"
          >
            About
          </button>
          <button 
            onClick={() => handleScroll('skills')} 
            className="block py-2 hover:text-blue-400 w-full text-left text-white"
          >
            Skills
          </button>
          <button 
            onClick={() => handleScroll('projects')} 
            className="block py-2 hover:text-blue-400 w-full text-left text-white"
          >
            Projects
          </button>
          <button 
            onClick={() => handleScroll('contact')} 
            className="block py-2 hover:text-blue-400 w-full text-left text-white"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
