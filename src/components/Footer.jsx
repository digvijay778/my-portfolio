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
      <footer className="bg-[#0f172a] py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Icons */}
            <div className="flex space-x-6 text-2xl mb-6 md:mb-0">
              <a
                href="https://github.com/digvijay778"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/digvijay-singh-759642297/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/digvijay.singh17/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-500 transition"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>

            {/* Footer Text */}
            <p className="text-gray-500 text-center md:text-right text-sm md:text-base">
              &copy; 2025 Digvijay Singh. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-blue-400 bg-[#112240] shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ${
          showBackToTop ? 'block' : 'hidden'
        }`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
}
