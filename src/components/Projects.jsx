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
    <section id="projects" className="py-20 bg-[#0f172a] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow">
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
            className="bg-[#112240] rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <img
              src="/p5.png"
              alt="Task Trackr Screenshot"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Task-Trackr</h3>
              <p className="text-gray-300 mb-4">
                A clean and simple To-Do list app with support for deadlines to
                keep you on track.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-600/30 px-2 py-1 rounded"
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
                  className="text-blue-400 hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
                <a
                  href="https://task-trackr-bga4.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                </a>
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
            className="bg-[#112240] rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <img
              src="/p4.png"
              alt="Movie Match Screenshot"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Movie-Match</h3>
              <p className="text-gray-300 mb-4">
                A real-time video calling and chat platform to discuss movies
                based on genre, featuring UI-themes and scalable messaging.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "WebRTC", "Socket.io", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-600/30 px-2 py-1 rounded"
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
                  className="text-blue-400 hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
                <a
                  href="https://movie-match-3178.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                </a>
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
            className="bg-[#112240] rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <img
              src="/p6.png.png" // <-- Place your image in the public folder with this name
              alt="Urban Skill Screenshot"
              className="w-full h-48 object-cover"
            />
            {/* <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="text-6xl text-white opacity-80"
              />
            </div> */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Urban Skill</h3>
              <p className="text-gray-300 mb-4">
                A platform where users can book home services like AC repair,
                electrician, plumbing, carpentry, and more.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Express", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-600/30 px-2 py-1 rounded"
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
                  className="text-blue-400 hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                </a>
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
            className="bg-[#112240] rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <img
              src="/p3.png"
              alt="Currency Converter Screenshot"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Currency Converter</h3>
              <p className="text-gray-300 mb-4">
                A React app to convert currencies using real-time exchange rates
                from an external API.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "REST API", "Axios"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-600/30 px-2 py-1 rounded"
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
                  className="text-blue-400 hover:text-blue-300"
                >
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
                <a
                  href="https://currency-converter-indol-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-gray-900 transition"
          >
            View All Projects{" "}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
