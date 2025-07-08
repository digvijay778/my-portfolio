import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#0f172a] py-12 relative overflow-hidden">
        {/* Cosmic Footer Background */}
        <div className="cosmic-footer-bg">
          {/* Floating cosmic particles */}
          <div className="footer-particle" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
          <div className="footer-particle" style={{top: '40%', left: '80%', animationDelay: '2s'}}></div>
          <div className="footer-particle" style={{top: '70%', left: '30%', animationDelay: '4s'}}></div>
          <div className="footer-particle" style={{top: '60%', left: '70%', animationDelay: '6s'}}></div>
          <div className="footer-particle" style={{top: '30%', left: '50%', animationDelay: '8s'}}></div>

          {/* Cosmic dust clouds */}
          <div className="footer-dust" style={{width: '120px', height: '120px', top: '10%', left: '20%', animationDelay: '0s'}}></div>
          <div className="footer-dust" style={{width: '150px', height: '150px', top: '50%', left: '75%', animationDelay: '5s'}}></div>

          {/* Nebula effects */}
          <div className="footer-nebula footer-nebula-1"></div>
          <div className="footer-nebula footer-nebula-2"></div>

          {/* Animated connection lines */}
          <div className="footer-line footer-line-1"></div>
          <div className="footer-line footer-line-2"></div>

          {/* Cosmic border glow */}
          <div className="footer-border-glow"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Icons */}
            <div className="flex space-x-6 text-2xl mb-6 md:mb-0 animate-fade-in-up">
              <a
                href="https://github.com/digvijay778"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-social-icon text-gray-500 hover:text-blue-400 transition"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/digvijay-singh-759642297/"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-social-icon text-gray-500 hover:text-blue-500 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/digvijay.singh17/"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-social-icon text-gray-500 hover:text-pink-500 transition"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>

            {/* Footer Text */}
            <p className="text-gray-500 text-center md:text-right text-sm md:text-base animate-fade-in-up-delayed footer-text">
              &copy; 2025 Digvijay Singh. All rights reserved.
            </p>
          </div>

          {/* Cosmic signature */}
          <div className="text-center mt-8 animate-fade-in-up-more-delayed">
            <div className="cosmic-signature">
              <span className="text-xs text-gray-600">Made with </span>
              <span className="cosmic-heart">💙</span>
              <span className="text-xs text-gray-600"> in the cosmos</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Back to Top Button */}
      <button
        className={`cosmic-back-to-top fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-blue-400 bg-[#112240] shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ${
          showBackToTop ? 'block animate-bounce-in' : 'hidden'
        }`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} className="cosmic-arrow" />
        
        {/* Button particles */}
        <div className="button-particles">
          <div className="button-particle-1"></div>
          <div className="button-particle-2"></div>
          <div className="button-particle-3"></div>
        </div>
      </button>
    </>
  );
}
