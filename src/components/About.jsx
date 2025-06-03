import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 relative">
      {/* Diagonal pattern background */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}></div>

      <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate UX/UI Developer with 5 years of experience creating beautiful digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-gray-400 mb-6">
              I've spent 5 years perfecting my craft in UX/UI development, working with a diverse range of clients from startups to established enterprises. My approach combines technical expertise with a keen eye for design, ensuring that every project not only functions flawlessly but also delivers an exceptional user experience.
            </p>
            <p className="text-gray-400">
              I'm passionate about creating intuitive, accessible, and visually striking interfaces that solve real problems and delight users. My work is driven by a commitment to clean code, responsive design, and thoughtful user journeys.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-4">My Approach</h3>
            <ul className="space-y-4">
              {[
                { title: "User-Centered Design", desc: "I put users at the heart of every decision, creating interfaces that feel intuitive and natural." },
                { title: "Clean & Efficient Code", desc: "I write maintainable, well-structured code that performs excellently across all devices." },
                { title: "Collaborative Process", desc: "I believe great products emerge from close collaboration with clients and team members." },
                { title: "Continuous Learning", desc: "I stay current with the latest technologies and design trends to deliver cutting-edge solutions." }
              ].map((item, index) => (
                <li key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  </div>
                  <div>
                    <h4 className="text-md font-medium text-white">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
