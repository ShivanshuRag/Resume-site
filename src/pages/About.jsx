// src/pages/About.jsx


import profileImage from '../assets/shivanshu1.jpg'; // Replace with your image path
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 

const About = () => {
  return (
    <div className="container mx-auto my-auto p-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 text-slate-300">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-8">
          I am Shivanshu Singh, a passionate software developer with a strong background in web development. I have experience working with various front-end and back-end technologies, and I enjoy creating user-friendly and efficient applications. I am always eager to learn new skills and improve my existing ones. In my free time, I like to read books, explore new technologies, and stay updated with the latest trends in the tech industry.
          I am also a strong advocate for clean code and best practices in software development. I believe in writing maintainable and scalable code that can be easily understood and extended by other developers. Collaboration and teamwork are essential to me, and I enjoy working in dynamic environments where I can contribute to the success of the team and the project.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc ml-4">
          <li>Full Stack Developer - PW (PhysicsWallah)</li>
          <li>Chai aur code - Hitesh Chaudhary</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2 mt-4">Skills</h2>
        <ul className="list-disc ml-4">
          <li>HTML, CSS, JavaScript, typescript, Java</li>
          <li>React-vite, Next.js, vue.js</li>
          <li>Tailwind CSS, Bootstrap</li>
          <li>Git, GitHub, Linux</li>
          {/* Add more skills as needed */}
        </ul>
        <h2 className="text-2xl font-semibold mb-2 mt-4">Education</h2>
        <p>
          Institute of Engineering and Rural Technology ( IERT ) College, <br />
          Prayagraj, Uttar Pradesh <br />
          Mechanical Engineering <br />
          
        </p>
        
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={profileImage}
          alt="Shivanshu Singh"
          className="w-48 h-48 rounded-md object-cover shadow-lg"
          style={{
            // Fine-tune object-position for better face focus
            objectPosition: '50% 10%', 
            // Optional: Add a subtle blur to the background
          
          }}
        />
        <div className="flex mt-72  space-x-4"> 
            
          <a href="https://github.com/ShivanshuSingh01" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-400 hover:text-gray-500 text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/shivanshu-singh-9666a529b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-400 hover:text-gray-500 text-2xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-400 hover:text-gray-500 text-2xl" />
          </a>
        </div>
      </div>
    
    </div>
    
  );
};

export default About;