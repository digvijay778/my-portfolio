export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#0f172a] text-white py-20 relative overflow-hidden">
      {/* Cosmic Background for About Section */}
      <div className="cosmic-about-bg">
        {/* Floating cosmic particles */}
        <div className="about-particle" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="about-particle" style={{top: '40%', left: '80%', animationDelay: '2s'}}></div>
        <div className="about-particle" style={{top: '70%', left: '20%', animationDelay: '4s'}}></div>
        <div className="about-particle" style={{top: '60%', left: '70%', animationDelay: '6s'}}></div>
        <div className="about-particle" style={{top: '30%', left: '50%', animationDelay: '8s'}}></div>

        {/* Cosmic dust clouds */}
        <div className="about-dust" style={{width: '150px', height: '150px', top: '15%', left: '5%', animationDelay: '0s'}}></div>
        <div className="about-dust" style={{width: '200px', height: '200px', top: '60%', left: '75%', animationDelay: '5s'}}></div>
        <div className="about-dust" style={{width: '120px', height: '120px', top: '80%', left: '30%', animationDelay: '3s'}}></div>

        {/* Nebula effect */}
        <div className="about-nebula about-nebula-1"></div>
        <div className="about-nebula about-nebula-2"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Image Section with Enhanced Cosmic Glow */}
        <div className="md:w-1/2 flex justify-center relative animate-slide-in-left">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Multiple glowing layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-2xl rounded-xl animate-pulse-cosmic"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-15 blur-xl rounded-xl animate-pulse-cosmic animation-delay-1000"></div>
            
            {/* Rotating cosmic ring */}
            <div className="absolute inset-0 rounded-xl border-2 border-gradient-to-r from-blue-400 to-purple-500 opacity-40 animate-spin-slow"></div>
            
            {/* Orbiting cosmic elements */}
            <div className="absolute inset-0 animate-orbit-about">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg"></div>
            </div>
            <div className="absolute inset-0 animate-orbit-about-reverse animation-delay-500">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"></div>
            </div>

            <img 
              src="p1.jpg" 
              alt="Profile" 
              className="relative rounded-xl w-full h-full object-cover border-4 border-gray-800 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 animate-float-gentle"
            />
            
            {/* Hover overlay effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 animate-slide-in-right">
          {/* Animated Heading */}
          <h2 className="text-4xl font-extrabold mb-6 text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow animate-gradient-x">
            About Me
          </h2>

          <p className="text-lg text-gray-300 mb-10 text-center md:text-left leading-relaxed animate-fade-in-up-delayed">
            I'm a passionate and motivated learner currently pursuing my B.Tech in Computer Science. 
            I'm focused on building a strong foundation in software development and problem-solving, 
            with the aim of contributing meaningfully to tech-driven projects.
          </p>

          {/* Enhanced Timeline with Cosmic Effects */}
          <div className="border-l-2 border-blue-500 pl-6 space-y-10 mb-10 relative timeline-cosmic animate-fade-in-up-more-delayed">
            {[
              { year: '2022', desc: 'Graduated from OPS Vidya Mandir with PCM' },
              { year: '2023', desc: 'Admitted to B.Tech (CSE) in IIIT Kota' },
              { year: '2027', desc: 'Expected Graduation from IIIT Kota' }
            ].map((item, idx) => (
              <div key={idx} className="relative timeline-item" style={{animationDelay: `${0.8 + idx * 0.2}s`}}>
                <h3 className="text-xl font-semibold mb-2 text-blue-300">{item.year}</h3>
                <div className="absolute -left-3 top-[1.65rem] w-4 h-4 bg-blue-500 rounded-full shadow-md shadow-blue-500/50 animate-pulse-dot"></div>
                <div className="absolute -left-4 top-[1.45rem] w-6 h-6 bg-blue-500/20 rounded-full animate-ping"></div>
                <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Enhanced Resume Button */}
          <div className="text-center md:text-left animate-fade-in-up-final">
            <a 
              href="/DigvijayResume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:opacity-90 transition duration-300 animate-bounce-subtle hover:animate-none cosmic-button"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
