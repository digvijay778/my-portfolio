export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#0f172a] text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Section with Glow */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Glowing gradient blur behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-2xl rounded-xl animate-pulse"></div>
            <img 
              src="p1.jpg" 
              alt="Profile" 
              className="relative rounded-xl w-full h-full object-cover border-4 border-gray-800 shadow-2xl"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          {/* Centered Heading */}
          <h2 className="text-4xl font-extrabold mb-6 text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow">
            About Me
          </h2>

          <p className="text-lg text-gray-300 mb-10 text-center md:text-left leading-relaxed">
            I'm a passionate and motivated learner currently pursuing my B.Tech in Computer Science. 
            I’m focused on building a strong foundation in software development and problem-solving, 
            with the aim of contributing meaningfully to tech-driven projects.
          </p>

          {/* Timeline with Glowing Dots */}
          <div className="border-l-2 border-blue-500 pl-6 space-y-10 mb-10 relative">
            {[
              { year: '2022', desc: 'Graduated from OPS Vidya Mandir with PCM' },
              { year: '2023', desc: 'Admitted to B.Tech (CSE) in IIIT Kota' },
              { year: '2027', desc: 'Expected Graduation from IIIT Kota' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <h3 className="text-xl font-semibold mb-2">{item.year}</h3>
                <div className="absolute -left-3 top-[1.65rem] w-4 h-4 bg-blue-500 rounded-full shadow-md shadow-blue-500/30"></div>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Resume Button */}
          <div className="text-center md:text-left">
            <a 
              href="/DigvijaySingh_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:opacity-90 transition duration-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
