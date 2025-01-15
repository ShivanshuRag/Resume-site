// import  { Suspense } from 'react';
import { Link } from 'react-router-dom';
import Images1 from "../assets/shivanshu1.jpg"; 
import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
const Home = () => {
return (
    <div 
        style={{ 
            position: 'relative', 
            overflow: 'hidden' 
        }}
    >
            <Spline 
                scene="https://prod.spline.design/882sMsYSAQN-A82L/scene.splinecode" 
                style={{ 
                    position:"absolute", 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    zIndex: -1 
                }} 
            /> 
    
        <div className="container mx-auto py-16 flex flex-col items-center justify-center"> 
        <div className="relative overflow-hidden rounded-md shadow-lg">
      <img
        src={Images1}
        alt="Your Photo"
        className="w-48 h-48 object-cover  duration-300 transform hover:scale-105 hover:translate-y-[-5px]"
        style={{
          // Fine-tune object-position for better face focus
          objectPosition: '50% 10%', 
          // Optional: Add a subtle blur to the background
        
        }}
      />
        <div className="flex m-4 items-center  justify-center space-x-4"> 
          <a href="https://github.com/ShivanshuRag" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-400 hover:text-gray-500 text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/shivanshu-singh-646b91232" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-400 hover:text-gray-500 text-2xl" />
          </a>
          <a href="https://x.com/ShivanshuRag" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-400 hover:text-gray-500 text-2xl" />
          </a>
        </div>
    </div> 
            <h1 className="text-4xl font-bold text-slate-400 mt-8">
                    <TypeAnimation
                            sequence={[
                                    `Hello! I am Shivanshu Singh`,
                                    1000,
                                    `Namaste! I am Shivanshu Singh`,
                                    1000,
                            ]}
                            wrapper="span"
                            speed={30}
                            style={{  display: 'inline-block', color: '#D3D3D3' , filter: "drop-shadow(0px 10px 10px rgb(0,0,0))" }}
                            repeat={Infinity}
                            className="font-effect-3d"
                    />
            </h1> 
            <p className="text-lg text-slate-400 mt-4"> 
                I’m a <span className="text-teal-500 text-xl font-bold">Fullstack Developer</span> and I’ve always been passionate about technology and education.  
            </p> 
            <Link 
                to="/projects" 
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mt-8" 
            > 
                View My Projects 
            </Link> 
        </div> 
    </div>
);
};

export default Home;