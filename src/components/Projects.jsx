import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Clock, ChevronDown } from 'lucide-react';
import NoteTakingApp from "../assets/note-taking-app.png";
import FinancialTracker from "../assets/finance-app.png";

const projects = [
  {
    title: 'Note-Taking App',
    description: 'The Note-Taking App is a simple and intuitive web-based tool that allows users to quickly jot down, save, and manage their notes.',
    tags: ["HTML", "CSS", "JavaScript"],
    image: NoteTakingApp,
    demoUrl: 'https://notepad-lite.netlify.app/',
    githubUrl: 'https://github.com/Bhanu-dev1996/note-taking-app'
  },
  {
    title: 'Financial Tracker',
    description: 'Track expenses, set budgets, and manage your savings — all in one simple, powerful financial tracker app.',
    tags: ["React", "Vite", "Tailwind CSS", "Ant Design"],
    image: FinancialTracker,
    demoUrl: 'https://trackmyfundsapp.netlify.app/',
    githubUrl: 'https://github.com/Bhanu-dev1996/financial-tracker'
  },
  {
    title: 'Wanderlust',
    description: 'A travel blog showcasing beautiful destinations, travel tips, and personal experiences with a clean and modern design.',
    tags: ["React", "Next.js", "Tailwind CSS", "Shadcn/ui"],
    image: 'https://via.placeholder.com/400x300?text=In+Progress',
    demoUrl: 'https://wanderlust-travelwebsite.netlify.app/',
    githubUrl: 'https://github.com/Bhanu-dev1996/travel-website/tree/version-0'
  },
  {
    title: 'Blog Platform',
    description: 'A modern blogging platform that allows users to create, read, and comment on posts with a clean and responsive design.',
    tags: ["React", "Vite", "Tailwind CSS"],
    image: 'https://via.placeholder.com/400x300?text=In+Progress',
    demoUrl: '#',
    githubUrl: '#',
    inProgress: true
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const handleViewMore = () => {
    setVisibleProjects(prevCount => 
      prevCount + 3 > projects.length ? projects.length : prevCount + 3
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22H0v-1.17zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.24H0V3.07zm20 0l2.83-2.83 1.41 1.41L21.41 4.24h-1.41V3.07zm0 17.76l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zm0 17.76l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM20 0v1.41l2.83 2.83-1.41 1.41L20 4.24V0zm0 20v1.41l2.83 2.83-1.41 1.41L20 24.24V20zm0 20v1.41l2.83 2.83-1.41 1.41L20 44.24V40zM3.07 0v1.41L5.9 4.24 4.49 5.66 1.66 2.83V0h1.41zm0 20v1.41l2.83 2.83-1.41 1.41L1.66 22.83V20h1.41zm0 20v1.41l2.83 2.83-1.41 1.41L1.66 42.83V40h1.41zm17.76 0v1.41l2.83 2.83-1.41 1.41-2.83-2.83V40h1.41zm0-20v1.41l2.83 2.83-1.41 1.41-2.83-2.83V20h1.41zm0-20v1.41l2.83 2.83-1.41 1.41-2.83-2.83V0h1.41zm-4.24 1.41L13.66 0h1.41v1.41l-2.83 2.83L11.83 5.9 9 3.07V0h1.41l2.83 2.83zm0 20L13.66 20h1.41v1.41l-2.83 2.83-1.41-1.41-2.83-2.83V20H9l2.83-2.83 1.41 1.41zm0 20L13.66 40h1.41v1.41l-2.83 2.83-1.41-1.41-2.83-2.83V40H9l2.83-2.83 1.41 1.41z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in UI/UX design and front-end development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-500 hover:border-blue-900/50 ${project.inProgress ? 'relative' : ''}`}
            >
              <div className="relative h-48 overflow-hidden">
                {project.inProgress && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white py-1.5 z-20 flex items-center justify-center">
                    <Clock size={16} className="mr-1.5 animate-pulse" />
                    <span className="text-sm font-medium">In Progress</span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.inProgress ? 'opacity-80' : ''}`}
                />
                
                {!project.inProgress && (
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-end transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full backdrop-blur-sm text-blue-600 dark:text-blue-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 mr-2"
                      aria-label="View Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full backdrop-blur-sm text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200"
                      aria-label="View Code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-blue-900/30 text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-2 border-t border-gray-800">
                  {project.inProgress ? (
                    <span className="inline-flex items-center text-gray-400 font-medium">
                      Coming Soon
                    </span>
                  ) : (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group/link"
                    >
                      View Project 
                      <ArrowRight size={16} className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={handleViewMore}
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg group"
            >
              View More Projects
              <ChevronDown size={18} className="transition-transform group-hover:translate-y-0.5" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
