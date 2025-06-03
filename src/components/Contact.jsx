import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CircleAlert,
  CircleCheck,
  Loader,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("Chra00Q_q-2U3Zenv");
  }, []);
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!formState.name || !formState.email || !formState.message) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please fill in all fields'
      });
      return;
    }

    try {
      setStatus({ loading: true, success: false, error: null });
      
      // EmailJS credentials
      const serviceId = 'service_9ewnmmx';
      const templateId = 'template_da4noy8';
      
      // Send email using EmailJS's send method
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formState.name,
          email_id: formState.email,
          message: formState.message,
        }
      );

      setStatus({ loading: false, success: true, error: null });
      setFormState({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        loading: false,
        success: false,
        error: 'There was a problem sending your message. Please try again.'
      });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      {/* Background blob */}
      <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-blue-900/10 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-purple-900/10 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-md font-medium text-white">Email</h4>
                  <a href="mailto:bhanushankar474@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                    bhanushankar474@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-md font-medium text-white">Phone</h4>
                  <a href="tel:+917286837602" className="text-gray-400 hover:text-blue-400 transition-colors">
                    +91 7286837602
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-md font-medium text-white">Location</h4>
                  <p className="text-gray-400">Hyderabad, Telangana</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-md font-medium text-white mb-3">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Bhanu-dev1996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <Github className="w-5 h-5 text-blue-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhanu-shankar-577782197/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {status.success && (
                <div className="p-4 mb-4 bg-green-900/30 text-green-400 rounded-lg flex items-center">
                  <CircleCheck size={18} className="mr-2" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {status.error && (
                <div className="p-4 mb-4 bg-red-900/30 text-red-400 rounded-lg flex items-center">
                  <CircleAlert size={18} className="mr-2" />
                  <span>{status.error}</span>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.loading}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center disabled:bg-blue-700 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>
                    <Loader size={16} className="mr-2 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} className="ml-2" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
