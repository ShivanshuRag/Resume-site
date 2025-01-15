// src/pages/About.jsx
// import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-16 text-slate-300">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-8">
        
        I am Shivanshu Singh,
        I am a passionate software developer with a strong background in web development. I have experience working with various front-end and back-end technologies, and I enjoy creating user-friendly and efficient applications. I am always eager to learn new skills and improve my existing ones. In my free time, I like to read books, explore new technologies, and stay updated with the latest trends in the tech industry.
        I am also a strong advocate for clean code and best practices in software development. I believe in writing maintainable and scalable code that can be easily understood and extended by other developers. Collaboration and teamwork are essential to me, and I enjoy working in dynamic environments where I can contribute to the success of the team and the project.
      </p>
      {/* Add a section for skills, e.g., */}
      <h2 className="text-2xl font-semibold mb-2"> Certifications</h2>
         <h3 > Full Stack Developer - PW (PhysicsWallah)</h3>
         <h3>Chai aur code - Hitesh Chaudhary</h3>
           
      <h2 className="text-2xl font-semibold mb-2 mt-4">Skills</h2>
      <ul className="list-disc ml-4">
        <li>HTML, CSS, JavaScript , java </li>
        <li>React-vite, Next.js, vue.js </li>
        <li>Tailwind CSS, Bootstrap</li>
       
        <li>Git, GitHub ,Linux</li>
        {/* Add more skills as needed */}
      </ul>

      <h2 className="text-2xl font-semibold mb-2 mt-4">Education</h2>
       <h3> 
                Institute of Engineering and Rural Technology ( IERT ) College, <br />
                Prayagraj , UttarPradesh <br />
                Mechanical Engineering <br />
                2022 - 2025
        </h3>
    </div>
  );
};

export default About;