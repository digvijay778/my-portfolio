import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-[#0f172a] text-white">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
              Digvijay
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-blue-400 mb-6 h-10">
            <Typewriter
              words={['Full Stack Developer', 'Student', 'DSA Enthusiast']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-gray-400 mb-8 max-w-lg">
            I craft high-quality digital experiences using modern technologies, with a strong focus on performance,
            scalability, and user-centric design. I’m driven by a passion for developing elegant, efficient solutions to
            real-world challenges.
          </p>

          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-md hover:scale-105 transition duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-medium border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 shadow-md hover:scale-105 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glass-like glow background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-25 animate-pulse"></div>

            {/* Profile image */}
            <div className="relative">
              <img
                src="/p2.jpg"
                alt="Developer"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-[6px] border-gray-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
