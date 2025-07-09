import {
  faProjectDiagram,
  faChartLine,
  faMobileAlt,
  faExternalLinkAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Cosmic Background for Projects Section */}
      <div className="cosmic-projects-bg">
        {/* Floating cosmic particles */}
        <div className="projects-particle" style={{top: '10%', left: '8%', animationDelay: '0s'}}></div>
        <div className="projects-particle" style={{top: '30%', left: '90%', animationDelay: '2s'}}></div>
        <div className="projects-particle" style={{top: '60%', left: '5%', animationDelay: '4s'}}></div>
        <div className="projects-particle" style={{top: '80%', left: '85%', animationDelay: '6s'}}></div>
        <div className="projects-particle" style={{top: '45%', left: '50%', animationDelay: '8s'}}></div>
        <div className="projects-particle" style={{top: '25%', left: '70%', animationDelay: '10s'}}></div>

        {/* Cosmic dust clouds */}
        <div className="projects-dust" style={{width: '160px', height: '160px', top: '15%', left: '15%', animationDelay: '0s'}}></div>
        <div className="projects-dust" style={{width: '200px', height: '200px', top: '65%', left: '75%', animationDelay: '5s'}}></div>
        <div className="projects-dust" style={{width: '130px', height: '130px', top: '40%', left: '25%', animationDelay: '3s'}}></div>

        {/* Nebula effects */}
        <div className="projects-nebula projects-nebula-1"></div>
        <div className="projects-nebula projects-nebula-2"></div>
        <div className="projects-nebula projects-nebula-3"></div>

        {/* Animated connection lines */}
        <div className="projects-line projects-line-1"></div>
        <div className="projects-line projects-line-2"></div>
        <div className="projects-line projects-line-3"></div>

        {/* Orbital rings */}
        <div className="cosmic-ring cosmic-ring-1"></div>
        <div className="cosmic-ring cosmic-ring-2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow animate-gradient-x">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Project 1 */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="project-card bg-[#112240] rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            {/* Project card glow effect */}
            <div className="project-glow"></div>
            
            <div className="relative">
              <img
                src="/p7.png.png"
                alt="Task Trackr Screenshot"
                className="w-full h-48 object-cover"
              />
              {/* Image overlay effect */}
              <div className="project-overlay"></div>
            </div>
            
            <div className="p-6 relative">
              <h3 className="text-xl font-bold mb-2 project-title">Task-Trackr</h3>
              <p className="text-gray-300 mb-4">
                A clean and simple To-Do list app with support for deadlines to
                keep you on track.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag text-xs bg-blue-600/30 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/digvijay778/Task-trackr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link text-blue-400 hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
                <a
                  href="https://task-trackr-bga4.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link text-purple-400 hover:text-purple-300"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                </a>
              </div>
              
              {/* Project card particles */}
              <div className="project-particles">
                <div className="project-particle-1"></div>
                <div className="project-particle-2"></div>
                <div className="project-particle-3"></div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="project-card bg-[#112240] rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <div className="project-glow"></div>
            
            <div className="relative">
              <img
                src="/p4.png"
                alt="Movie Match Screenshot"
                className="w-full h-48 object-cover"
              />
              <div className="project-overlay"></div>
            </div>
            
            <div className="p-6 relative">
              <h3 className="text-xl font-bold mb-2 project-title">Movie-Match</h3>
              <p className="text-gray-300 mb-4">
                A real-time video calling and chat platform to discuss movies
                based on genre, featuring UI-themes and scalable messaging.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "WebRTC", "Socket.io", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag text-xs bg-blue-600/30 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/digvijay778/Movie-Match"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link text-blue-400 hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
                <a
                  href="https://movie-match-3178.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link text-purple-400 hover:text-purple-300"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                </a>
              </div>
              
              <div className="project-particles">
                <div className="project-particle-1"></div>
                <div className="project-particle-2"></div>
                <div className="project-particle-3"></div>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="project-card bg-[#112240] rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <div className="project-glow"></div>
            
            <div className="relative">
              <img
                src="/p6.png.png"
                alt="Urban Skill Screenshot"
                className="w-full h-48 object-cover"
              />
              <div className="project-overlay"></div>
            </div>
            
            <div className="p-6 relative">
              <h3 className="text-xl font-bold mb-2 project-title">Urban Skill</h3>
              <p className="text-gray-300 mb-4">
                A platform where users can book home services like AC repair,
                electrician, plumbing, carpentry, and more.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Express", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag text-xs bg-blue-600/30 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/digvijay778/Urban-Skill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link text-blue-400 hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link text-purple-400 hover:text-purple-300"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                </a>
              </div>
              
              <div className="project-particles">
                <div className="project-particle-1"></div>
                <div className="project-particle-2"></div>
                <div className="project-particle-3"></div>
              </div>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="project-card bg-[#112240] rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <div className="project-glow"></div>
            
            <div className="relative">
              <img
                src="/p3.png"
                alt="Currency Converter Screenshot"
                className="w-full h-48 object-cover"
              />
              <div className="project-overlay"></div>
            </div>
            
            <div className="p-6 relative">
              <h3 className="text-xl font-bold mb-2 project-title">Currency Converter</h3>
              <p className="text-gray-300 mb-4">
                A React app to convert currencies using real-time exchange rates
                from an external API.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "REST API", "Axios"].map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag text-xs bg-blue-600/30 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/digvijay778/Currency-Converter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link text-blue-400 hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
                <a
                  href="https://currency-converter-indol-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link text-purple-400 hover:text-purple-300"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                </a>
              </div>
              
              <div className="project-particles">
                <div className="project-particle-1"></div>
                <div className="project-particle-2"></div>
                <div className="project-particle-3"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/digvijay778"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-cta-button inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-gray-900 transition"
          >
            View All Projects{" "}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
