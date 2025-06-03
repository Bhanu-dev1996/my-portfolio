import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'UI/UX Design' },
  { name: 'React.js' },
  { name: 'JavaScript' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Tailwind CSS' },
  { name: 'Responsive Design' },
  { name: 'Figma' },
  { name: 'Adobe XD' },
  { name: 'Node.js' },
  { name: 'Git' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900/5 pointer-events-none"></div>
      
      {/* Wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 h-full w-full text-gray-800">
          <path fill="currentColor" fillOpacity="1" d="M0,128L60,122.7C120,117,240,107,360,122.7C480,139,600,181,720,176C840,171,960,117,1080,117.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            With 5 years of experience, I've developed expertise in various technologies and design principles.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                backgroundColor: "#3b82f6",
                color: "#ffffff"
              }}
              className="backdrop-blur-sm bg-gray-800/70 rounded-xl p-5 flex items-center justify-center shadow-md transition-all duration-300 hover:shadow-lg border border-gray-700 hover:border-blue-500"
            >
              <span className="font-medium text-gray-200 text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;