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
    <section id="skills" className="bg-[#0f172a] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow">
            My Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I’ve worked with throughout my journey as a developer.
          </p>
        </div>

        <div className="space-y-12">
          {skillGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold text-center mb-6">{group.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-[#112240] rounded-xl p-4 shadow hover:scale-105 transition"
                  >
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <p className="text-sm text-gray-300 text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
