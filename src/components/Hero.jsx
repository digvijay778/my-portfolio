import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-[#0f172a] text-white overflow-hidden relative">
      {/* Cosmic Animated Background */}
      <div className="cosmic-background">
        {/* Twinkling Stars */}
        <div className="star" style={{width: '2px', height: '2px', top: '10%', left: '20%'}}></div>
        <div className="star" style={{width: '3px', height: '3px', top: '30%', left: '40%'}}></div>
        <div className="star" style={{width: '1.5px', height: '1.5px', top: '50%', left: '60%'}}></div>
        <div className="star" style={{width: '2.5px', height: '2.5px', top: '70%', left: '80%'}}></div>
        <div className="star" style={{width: '2px', height: '2px', top: '85%', left: '30%'}}></div>
        <div className="star" style={{width: '1px', height: '1px', top: '15%', left: '70%'}}></div>
        <div className="star" style={{width: '2px', height: '2px', top: '45%', left: '15%'}}></div>
        <div className="star" style={{width: '1.5px', height: '1.5px', top: '75%', left: '55%'}}></div>
        <div className="star" style={{width: '3px', height: '3px', top: '25%', left: '85%'}}></div>
        <div className="star" style={{width: '2px', height: '2px', top: '65%', left: '25%'}}></div>
        <div className="star" style={{width: '1px', height: '1px', top: '35%', left: '75%'}}></div>
        <div className="star" style={{width: '2.5px', height: '2.5px', top: '55%', left: '35%'}}></div>
        <div className="star" style={{width: '1.5px', height: '1.5px', top: '80%', left: '65%'}}></div>
        <div className="star" style={{width: '2px', height: '2px', top: '20%', left: '50%'}}></div>
        <div className="star" style={{width: '1px', height: '1px', top: '90%', left: '45%'}}></div>

        {/* Cosmic Dust Clouds */}
        <div className="cosmic-dust" style={{width: '120px', height: '120px', top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="cosmic-dust" style={{width: '180px', height: '180px', top: '60%', left: '70%', animationDelay: '5s'}}></div>
        <div className="cosmic-dust" style={{width: '100px', height: '100px', top: '80%', left: '20%', animationDelay: '3s'}}></div>
        <div className="cosmic-dust" style={{width: '150px', height: '150px', top: '30%', left: '80%', animationDelay: '7s'}}></div>

        {/* Nebula Effect */}
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>

        {/* Shooting Stars */}
        <div className="shooting-star shooting-star-1"></div>
        <div className="shooting-star shooting-star-2"></div>
        <div className="shooting-star shooting-star-3"></div>

        {/* Cosmic Particles */}
        <div className="cosmic-particle" style={{top: '25%', left: '30%', animationDelay: '0s'}}></div>
        <div className="cosmic-particle" style={{top: '60%', left: '80%', animationDelay: '2s'}}></div>
        <div className="cosmic-particle" style={{top: '80%', left: '60%', animationDelay: '4s'}}></div>
        <div className="cosmic-particle" style={{top: '40%', left: '10%', animationDelay: '6s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center relative z-10">
        {/* Left Section */}
        <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-slide-in-left">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-md animate-gradient-x">
              Digvijay
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-blue-400 mb-6 h-10 animate-fade-in-delayed">
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

          <p className="text-gray-400 mb-8 max-w-lg animate-fade-in-up-delayed">
            I craft high-quality digital experiences using modern technologies, with a strong focus on performance,
            scalability, and user-centric design. I'm driven by a passion for developing elegant, efficient solutions to
            real-world challenges.
          </p>

          <div className="flex space-x-4 animate-fade-in-up-more-delayed">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-md hover:scale-105 transition duration-300 animate-bounce-subtle hover:animate-none"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-medium border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 shadow-md hover:scale-105 transition duration-300 animate-pulse-border"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center relative animate-slide-in-right">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Animated particles background */}
            <div className="absolute inset-0 animate-float">
              <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute top-12 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-300"></div>
              <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping animation-delay-700"></div>
              <div className="absolute bottom-16 right-4 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-1000"></div>
            </div>

            {/* Glass-like glow background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-25 animate-pulse-glow"></div>

            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-500 to-purple-600 opacity-30 animate-spin-slow"></div>

            {/* Profile image */}
            <div className="relative animate-float-gentle">
              <img
                src="/p2.jpg"
                alt="Developer"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-[6px] border-gray-800 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105"
              />
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-orbit">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg"></div>
            </div>
            <div className="absolute inset-0 animate-orbit-reverse animation-delay-500">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
