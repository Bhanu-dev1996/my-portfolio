import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gray-900 relative">
      {/* Hero background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-700/20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-700/20"></div>
        
        {/* Background circles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-400/30 dark:bg-blue-400/20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-blue-400/20 dark:bg-blue-400/10"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-purple-400/30 dark:bg-purple-400/20"></div>
      </div>

      <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <h2 className="text-lg md:text-xl font-medium text-blue-400 mb-3">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Bhanu Shankar
            </h1>
            <div className="text-xl md:text-2xl font-medium text-gray-300 mb-6 h-14">
              <TypeAnimation
                sequence={[
                  'UX/UI Developer',
                  1000,
                  'Front-end Engineer',
                  1000,
                  'UI/UX Designer',
                  1000,
                  'Creative Developer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-400 mb-8 max-w-lg">
              With 5 years of experience crafting engaging digital experiences.
              I specialize in creating clean, user-friendly interfaces that drive results.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
              >
                <Link to="projects" spy={true} smooth={true} duration={500} offset={-70}>
                  View My Work
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-blue-400 text-blue-400 font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <Link to="contact" spy={true} smooth={true} duration={500} offset={-70}>
                  Contact Me
                </Link>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            {/* Enhanced Profile Image with Animation */}
            <div className="relative">
              {/* Animated circles */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-sm animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 opacity-90 animate-spin-slow"></div>
              
              {/* Main profile container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden p-1.5 bg-gray-800 z-10">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-700">
                  <img 
                    src={profileImg} 
                    alt="Bhanu Shankar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-blue-600 rounded-full border-4 border-gray-800"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-purple-600 rounded-full border-3 border-gray-800"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <Link to="about" spy={true} smooth={true} duration={500} offset={-70} className="cursor-pointer">
            <ArrowDown size={24} className="text-blue-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
