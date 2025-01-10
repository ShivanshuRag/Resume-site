// src/pages/Projects.jsx
// import React from 'react';
import ProjectCard from '../pages/ProjectCard.jsx';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Short description of Project 1',
    image: '/images/project1.jpg',
    url: 'https://project1-url.com',
    github: 'https://github.com/your-username/project1',
  },
  {
    title: 'Project 2',
    description: 'Short description of Project 2',
    image: '/images/project2.jpg',
    url: 'https://project2-url.com',
    github: 'https://github.com/your-username/project2',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;