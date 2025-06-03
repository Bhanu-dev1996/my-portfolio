import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-xl font-bold">Bhanu<span className="text-blue-400">Shankar</span></h3>
            <p className="text-gray-400 mt-2">UX/UI Developer with a passion for creating beautiful experiences</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 text-center mb-6 md:mb-0"
          >
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              aria-label="Scroll to top"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
              isDynamic={true}
            >
              <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-500">
            © {currentYear} Bhanu Shankar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
