// src/components/ProjectCard.jsx
// import React from 'react';
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-300  shadow-[0_0_10px_black] w-[22rem]  rounded-xl overflow-hidden cursor-pointer transition-transform transform hover:scale-100 hover:shadow-white hover:shadow-lg">
      <img src={project.image} alt={project.title} className="w-full" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.object,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
