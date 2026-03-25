// src/pages/Projects.jsx
// import React from 'react';
import ProjectCard from "../pages/ProjectCard.jsx";
import lmsIMG from "../assets/LMS.png";
import salonimg from "../assets/salon.png"
const projectsData = [
  {
    title: "LMS",
    description: "learning management system  ",
    image: `${lmsIMG} `,
    url: "https://fronted-lms.vercel.app",
    github: "https://github.com/ShivanshuRag/Fronted_lms",
  },
  {
    title: "Salon ",
    description: "Salon appointment booking system ",
    image: `${salonimg} `,
    url: "https://salon-devep.vercel.app/",
    github: "https://github.com/ShivanshuRag/salon-development",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="container mx-auto p-16">
      <h1 className="text-3xl font-bold mb-4 pb-3 text-teal-500">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
