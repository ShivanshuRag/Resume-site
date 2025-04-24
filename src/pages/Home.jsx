import { Link } from "react-router-dom";
import Images1 from "../assets/shivanshu2.jpg";
import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/882sMsYSAQN-A82L/scene.splinecode"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Square Profile Image with Glow Effect */}
          <div className="relative group mb-8">
            <div className="absolute -inset-2 bg-teal-500/30 rounded-lg blur-md group-hover:blur-lg transition-all duration-300"></div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl border-4 border-gray-700/50 group-hover:border-teal-400/30 transition-all duration-300 aspect-square w-48">
              <motion.img
                src={Images1}
                alt="Shivanshu Singh"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 10%" }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mb-10">
            <motion.a
              href="https://github.com/ShivanshuRag"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-gray-300 hover:text-teal-400 text-3xl transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shivanshu-singh-646b91232"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="text-gray-300 hover:text-teal-400 text-3xl transition-colors" />
            </motion.a>
            <motion.a
              href="https://x.com/ShivanshuRag"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter className="text-gray-300 hover:text-teal-400 text-3xl transition-colors" />
            </motion.a>
          </div>

          {/* Animated Typing Text */}
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold text-white mb-4">
              <TypeAnimation
                sequence={[
                  `Hello! I am Shivanshu Singh`,
                  1000,
                  `Namaste! I am Shivanshu Singh`,
                  1000,
                ]}
                wrapper="span"
                speed={30}
                style={{
                  display: "inline-block",
                  textShadow: "0 4px 10px rgba(0,0,0,0.5)",
                  background: "linear-gradient(90deg, #81E6D9, #4FD1C5)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                repeat={Infinity}
              />
            </h1>
            <p className="text-xl text-gray-300">
              I'm a{" "}
              <span className="font-bold text-teal-400">
                Fullstack Developer
              </span>{" "}
              passionate about building digital experiences
            </p>
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/projects"
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-teal-500/30 transition-all"
            >
              View My Projects
              <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
