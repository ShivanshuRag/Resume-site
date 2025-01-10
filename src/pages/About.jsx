// src/pages/About.jsx
// import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-8">
        [Write a detailed description about yourself, your skills, experience,
        education, and any other relevant information.]
      </p>
      {/* Add a section for skills, e.g., */}
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc ml-4">
        <li>HTML, CSS, JavaScript</li>
        <li>React, Next.js, Vue.js</li>
        <li>Tailwind CSS, Bootstrap</li>
        <li>Node.js, Express.js</li>
        <li>Git, GitHub</li>
        {/* Add more skills as needed */}
      </ul>
    </div>
  );
};

export default About;