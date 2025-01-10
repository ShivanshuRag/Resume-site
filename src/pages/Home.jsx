// import React from 'react';
import { Link } from 'react-router-dom';
import Images1 from "../assets/yoga.png"
const Home = () => {
  return (
    <div className="container mx-auto py-16 flex flex-col items-center justify-center">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={Images1} // Replace with the actual path to your photo
          alt="Your Photo"
          className="w-48 h-48 rounded-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-0 hover:opacity-50 rounded-full transition-opacity duration-300"></div>
      </div>
      <h1 className="text-4xl font-bold mt-8">Hello, I am Shivanshu Singh</h1>
      <p className="text-lg mt-4">
        I am a frontend developer with a passion for building user-friendly and 
        visually appealing web applications.
      </p>
      <Link
        to="/projects"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
      >
        View My Projects
      </Link>
    </div>
  );
};

export default Home;