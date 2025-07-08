import {
  FaPython, FaJava, FaCopyright, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaPlusCircle,
  FaPaintBrush, FaLeaf, FaCube, FaGitAlt, FaGithub, FaCode, FaPaperPlane,
  FaProjectDiagram, FaPlug, FaMobileAlt
} from "react-icons/fa";

// Stand-in icons
const SiMysql = ({ className }) => <FaDatabase className={className} />;
const SiPostman = ({ className }) => <FaPaperPlane className={className} />;
const SiRedux = ({ className }) => <FaCube className={className} />;
const BiLogoMongodb = ({ className }) => <FaLeaf className={className} />;
const BiLogoNodejs = ({ className }) => <FaLeaf className={className} />;
const BiLogoReact = ({ className }) => <FaCube className={className} />;

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { icon: <FaPython className="text-yellow-300" />, name: "Python" },
      { icon: <FaJava className="text-red-400" />, name: "Java" },
      { icon: <FaCopyright className="text-purple-400" />, name: "C" },
      { icon: <FaPlusCircle className="text-purple-300" />, name: "C++" },
      { icon: <FaHtml5 className="text-orange-400" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS" },
      { icon: <FaJsSquare className="text-yellow-400" />, name: "JavaScript" },
      { icon: <FaDatabase className="text-teal-300" />, name: "SQL" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { icon: <BiLogoReact className="text-blue-400" />, name: "React" },
      { icon: <FaPaintBrush className="text-blue-300" />, name: "Tailwind CSS" },
      { icon: <BiLogoMongodb className="text-green-500" />, name: "MongoDB" },
      { icon: <BiLogoNodejs className="text-green-500" />, name: "Node.js" },
      { icon: <FaLeaf className="text-green-400" />, name: "Express.js" },
      { icon: <SiRedux className="text-purple-400" />, name: "Redux" },
      { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { icon: <FaGitAlt className="text-orange-400" />, name: "Git" },
      { icon: <FaGithub className="text-gray-100" />, name: "GitHub" },
      { icon: <FaCode className="text-blue-400" />, name: "VS Code" },
      { icon: <FaPaperPlane className="text-orange-300" />, name: "Postman" },
      { icon: <SiPostman className="text-pink-400" />, name: "Postman API" },
      { icon: <FaDatabase className="text-blue-400" />, name: "Firebase" },
    ]
  },
  {
    title: "Technical Strengths",
    skills: [
      { icon: <FaProjectDiagram className="text-purple-400" />, name: "DSA" },
      { icon: <FaPlug className="text-green-300" />, name: "REST APIs" },
      { icon: <FaMobileAlt className="text-blue-400" />, name: "Responsive UI" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f172a] text-white py-20 relative overflow-hidden">
      {/* Cosmic Background for Skills Section */}
      <div className="cosmic-skills-bg">
        {/* Floating cosmic particles */}
        <div className="skills-particle" style={{top: '15%', left: '5%', animationDelay: '0s'}}></div>
        <div className="skills-particle" style={{top: '35%', left: '85%', animationDelay: '2s'}}></div>
        <div className="skills-particle" style={{top: '65%', left: '15%', animationDelay: '4s'}}></div>
        <div className="skills-particle" style={{top: '85%', left: '75%', animationDelay: '6s'}}></div>
        <div className="skills-particle" style={{top: '25%', left: '45%', animationDelay: '8s'}}></div>
        <div className="skills-particle" style={{top: '55%', left: '65%', animationDelay: '10s'}}></div>

        {/* Cosmic dust clouds */}
        <div className="skills-dust" style={{width: '140px', height: '140px', top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="skills-dust" style={{width: '180px', height: '180px', top: '70%', left: '80%', animationDelay: '5s'}}></div>
        <div className="skills-dust" style={{width: '110px', height: '110px', top: '50%', left: '30%', animationDelay: '3s'}}></div>

        {/* Nebula effects */}
        <div className="skills-nebula skills-nebula-1"></div>
        <div className="skills-nebula skills-nebula-2"></div>
        <div className="skills-nebula skills-nebula-3"></div>

        {/* Animated connection lines */}
        <div className="cosmic-line cosmic-line-1"></div>
        <div className="cosmic-line cosmic-line-2"></div>
        <div className="cosmic-line cosmic-line-3"></div>
        <div className="cosmic-line cosmic-line-4"></div>
      </div>

      {/* Fixed Container with Proper Alignment */}
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow animate-gradient-x">
            My Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up-delayed">
            Technologies and tools I've worked with throughout my journey as a developer.
          </p>
        </div>

        <div className="space-y-16">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skills-group animate-fade-in-up-more-delayed" style={{animationDelay: `${0.6 + idx * 0.2}s`}}>
              <h3 className="text-2xl font-semibold text-center mb-8 text-blue-300 animate-glow-text">
                {group.title}
              </h3>
              
              {/* Fixed Grid Container */}
              <div className="flex justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-4xl">
                  {group.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="skill-card-fixed flex flex-col items-center justify-center bg-[#112240] rounded-xl p-6 shadow-lg hover:scale-105 transition-all duration-300 animate-skill-appear"
                      style={{animationDelay: `${1 + idx * 0.2 + i * 0.1}s`}}
                    >
                      {/* Skill card glow effect */}
                      <div className="skill-glow"></div>
                      
                      <div className="text-4xl mb-3 skill-icon animate-float-gentle">
                        {skill.icon}
                      </div>
                      <p className="text-sm text-gray-300 text-center skill-name font-medium">
                        {skill.name}
                      </p>
                      
                      {/* Hover particle effect */}
                      <div className="skill-particles">
                        <div className="skill-particle-1"></div>
                        <div className="skill-particle-2"></div>
                        <div className="skill-particle-3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
