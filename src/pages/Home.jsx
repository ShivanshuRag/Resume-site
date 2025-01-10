// import  { Suspense } from 'react';
import { Link } from 'react-router-dom';
import Images1 from "../assets/yoga.png"; 
import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation'
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
        <div className="relative overflow-hidden rounded-lg shadow-lg"> 
          <img 
            src={Images1} 
            alt="Your Photo" 
            className="w-48 h-48 rounded-full object-cover" 
          /> 
          {/* <div className="absolute inset-0 bg-gray-900 opacity-0 hover:opacity-50 rounded-full transition-opacity duration-300"></div>  */}
        </div> 
        <h1 className="text-4xl font-bold text-slate-400 mt-8">
            
            

           
      
    
                <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Hello, I am Shivanshu Singh',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Namaste, I am Shivanshu Singh',
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
          I am a <span className="text-teal-500 text-xl font-bold">Fullstack Developer</span> with a passion for building user-friendly and  
          visually appealing web applications. 
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