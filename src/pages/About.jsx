// src/pages/About.jsx
import profileImage from "../assets/shivanshu2.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { TbSchool } from "react-icons/tb";
import { MdSchool } from "react-icons/md";

const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-100" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Vue.js", icon: <SiVuedotjs className="text-green-300" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Linux", icon: <FaLinux className="text-yellow-100" /> },
  ];

  const certifications = [
    "Full Stack Developer - PW (PhysicsWallah)",
    "Chai aur code - Hitesh Chaudhary",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Profile Image & Social Links */}
        <div className="md:w-1/3 flex flex-col items-center space-y-6">
          <div className="relative group">
            <img
              src={profileImage}
              alt="Shivanshu Singh"
              className="w-64 h-64 rounded-lg object-cover shadow-xl border-4 border-gray-700 group-hover:border-teal-500 transition-all duration-300"
              style={{ objectPosition: "50% 10%" }}
            />
            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/ShivanshuRag"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub className="text-gray-400 hover:text-teal-500 text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivanshu-singh-646b91232"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin className="text-gray-400 hover:text-teal-500 text-3xl" />
            </a>
            <a
              href="https://x.com/ShivanshuRag"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaTwitter className="text-gray-400 hover:text-teal-400 text-3xl" />
            </a>
          </div>
        </div>

        {/* About Content */}
        <div className="md:w-2/3 space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            About Me
          </h1>

          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              I am Shivanshu Singh, a passionate software developer with
              expertise in full-stack web development. I specialize in creating
              efficient, user-friendly applications with clean, maintainable
              code.
            </p>
            <p className="text-lg leading-relaxed">
              As a strong advocate for best practices, I focus on writing
              scalable solutions while staying updated with the latest tech
              trends. I thrive in collaborative environments and enjoy
              contributing to team success.
            </p>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-teal-400">
              <MdSchool className="text-xl" />
              Certifications
            </h2>
            <ul className="space-y-2 ml-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-teal-400">▹</span>
                  <span className="text-gray-300">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-teal-400">
              <FaReact className="text-xl" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {skill.icon}
                  <span className="text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-teal-400">
              <TbSchool className="text-xl" />
              Education
            </h2>
            <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-teal-500">
              <p className="font-medium text-gray-100">
                Institute of Engineering and Rural Technology (IERT)
              </p>
              <p className="text-gray-400">Prayagraj, Uttar Pradesh</p>
              <p className="text-gray-400">Mechanical Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
