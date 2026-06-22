import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { FaWhatsapp, FaReact, FaLaravel, FaNodeJs } from 'react-icons/fa';

// Custom typing animation hook
const TYPING_STRINGS = [
  'Full Stack Developer',
  'React Developer',
  'Laravel Developer',
  'Node.js Developer',
  'Python Developer',
];

const TypingAnimation: React.FC = () => {
  const [currentText, setCurrentText] = React.useState('');
  const [stringIdx, setStringIdx] = React.useState(0);
  const [charIdx, setCharIdx] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentStr = TYPING_STRINGS[stringIdx];
    let timer: number;

    const tick = () => {
      if (!isDeleting) {
        setCurrentText(currentStr.substring(0, charIdx + 1));
        setCharIdx((prev) => prev + 1);

        if (charIdx + 1 === currentStr.length) {
          timer = window.setTimeout(() => setIsDeleting(true), 1800);
        } else {
          timer = window.setTimeout(tick, 90);
        }
      } else {
        setCurrentText(currentStr.substring(0, charIdx - 1));
        setCharIdx((prev) => prev - 1);

        if (charIdx - 1 === 0) {
          setIsDeleting(false);
          setStringIdx((prev) => (prev + 1) % TYPING_STRINGS.length);
          timer = window.setTimeout(tick, 200);
        } else {
          timer = window.setTimeout(tick, 50);
        }
      }
    };

    timer = window.setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, stringIdx]);

  return (
    <span className="text-accent-purple border-r-3 border-accent-purple pr-1 dark:border-accent-purple animate-pulse font-mono">
      {currentText}
    </span>
  );
};

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-12 overflow-hidden grid-bg"
    >
      <div className="w-[92%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass-panel text-xs font-semibold text-accent-purple mb-4 border border-accent-purple/20"
          >
            👋 Welcome to my portfolio
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-light-primary dark:text-text-dark-primary mb-4">
            Hi, I am <span className="bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue bg-clip-text text-transparent">Deepak Korade</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-text-light-secondary dark:text-text-dark-secondary mb-6 h-10 flex items-center justify-center lg:justify-start">
            <span className="mr-2 text-text-light-primary dark:text-text-dark-primary">I'm a</span>
            <TypingAnimation />
          </h2>

          <p className="text-base sm:text-lg text-text-light-secondary dark:text-text-dark-secondary mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Full Stack Developer with 2+ years of experience building scalable web applications using React, Laravel, Node.js, Python (FastAPI), and MySQL. Skilled in responsive UI development, REST API integration, authentication systems, and database-driven workflows.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-accent-purple text-white font-medium hover:bg-purple-600 transition-all shadow-lg shadow-purple-500/25 scale-100 hover:scale-105 active:scale-95 interactive-hover"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              onClick={() => window.dispatchEvent(new Event('resume-downloaded'))}
              className="px-6 py-3 rounded-xl glass-panel text-text-light-primary dark:text-text-dark-primary font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2 scale-100 hover:scale-105 active:scale-95 interactive-hover"
            >
              <FiDownload className="w-4 h-4" /> Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start items-center gap-4">
            <a
              href="https://github.com/deepakkorade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-purple dark:hover:text-accent-purple transition-all duration-300 hover:scale-110 interactive-hover"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-korade/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-blue dark:hover:text-accent-blue transition-all duration-300 hover:scale-110 interactive-hover"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919613404043"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-emerald dark:hover:text-accent-emerald transition-all duration-300 hover:scale-110 interactive-hover"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a
              href="mailto:deepakkorade281@gmail.com"
              className="p-3 rounded-xl glass-panel text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-cyan dark:hover:text-accent-cyan transition-all duration-300 hover:scale-110 interactive-hover"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Side Visual (Avatar and floating tech cards) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] flex items-center justify-center">
            
            {/* Spinning Neon Aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-purple via-accent-cyan to-accent-blue opacity-30 blur-2xl animate-pulse" />
            
            {/* Orbit paths */}
            <div className="absolute w-[105%] h-[105%] border border-dashed border-accent-purple/20 rounded-full animate-[spin_50s_linear_infinite]" />
            <div className="absolute w-[115%] h-[115%] border border-dashed border-accent-cyan/10 rounded-full animate-[spin_80s_linear_infinite_reverse]" />

            {/* Floating Skill Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 p-3 rounded-2xl glass-panel flex items-center gap-2 shadow-lg z-20"
            >
              <FaReact className="text-cyan-400 w-6 h-6 animate-[spin_8s_linear_infinite]" />
              <span className="text-xs font-semibold text-text-light-primary dark:text-text-dark-primary">React.js</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -right-8 p-3 rounded-2xl glass-panel flex items-center gap-2 shadow-lg z-20"
            >
              <FaLaravel className="text-red-500 w-6 h-6" />
              <span className="text-xs font-semibold text-text-light-primary dark:text-text-dark-primary">Laravel</span>
            </motion.div>

            <motion.div
              animate={{ x: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.2 }}
              className="absolute -bottom-4 left-1/4 p-3 rounded-2xl glass-panel flex items-center gap-2 shadow-lg z-20"
            >
              <FaNodeJs className="text-green-500 w-6 h-6" />
              <span className="text-xs font-semibold text-text-light-primary dark:text-text-dark-primary">Node.js</span>
            </motion.div>

            {/* Glowing Avatar Frame */}
            <div className="w-[85%] h-[85%] rounded-full p-1.5 bg-gradient-to-tr from-accent-purple via-accent-cyan to-accent-blue shadow-2xl relative overflow-hidden group">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-950">
                <img
                  src="/avatar.png"
                  alt="Deepak Korade Avatar"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default Hero;
