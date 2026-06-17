import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

const EXPERIENCE_DATA: TimelineItem[] = [
  {
    year: '2026 - Present',
    role: 'Senior Full Stack Developer',
    company: 'Innovate Tech Corp',
    description: 'Leading design decisions and architecture pipelines for cloud-native React + Node microservices and Laravel configurations. Mentoring junior developers, optimizing database loads, and establishing CI/CD patterns.',
    technologies: ['React.js', 'Node.js', 'Laravel', 'AWS', 'Docker', 'MySQL'],
  },
  {
    year: '2024 - 2026',
    role: 'Full Stack Developer',
    company: 'PixelCraft Agency',
    description: 'Engineered full-stack business solutions using React frontends and Laravel API backends. Handled database migrations, crafted custom WordPress themes/plugins, and integrated third-party payment gateways.',
    technologies: ['Laravel', 'React.js', 'WordPress', 'MySQL', 'Tailwind CSS', 'Git'],
  },
  {
    year: '2023 - 2024',
    role: 'Junior Developer',
    company: 'TechSol Solutions',
    description: 'Maintained and upgraded existing websites. Built front-end UI panels with HTML, CSS, JavaScript, and assisted in debugging PHP/Laravel server scripts. Coordinated content additions in WordPress.',
    technologies: ['PHP', 'Laravel', 'WordPress', 'HTML5', 'CSS3', 'JavaScript'],
  },
];

const TimelineCard: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-9 md:gap-8 items-center mb-12 md:mb-16 last:mb-0">
      
      {/* Date (Left side on desktop, top on mobile) */}
      <div className={`md:col-span-4 flex md:block mb-2 md:mb-0 ${isEven ? 'md:text-right' : 'md:order-9 md:text-left'}`}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent-purple/10 text-accent-purple font-semibold text-xs sm:text-sm border border-accent-purple/15">
          {item.year}
        </span>
      </div>

      {/* Center Node dot (Desktop only, mobile will use left line) */}
      <div className="hidden md:flex col-span-1 justify-center items-center h-full relative">
        <div className="absolute top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="w-5 h-5 rounded-full border-4 border-accent-purple bg-white dark:bg-bg-dark z-10 shadow-lg shadow-purple-500/20"
        />
      </div>

      {/* Content Card (Right side on desktop, bottom on mobile) */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className={`md:col-span-4 ${isEven ? 'md:order-9' : ''}`}
      >
        <div className="glass-panel rounded-3xl p-6 hover:shadow-xl transition-all duration-300 relative group">
          {/* Subtle accent hover indicator */}
          <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-accent-purple rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-1">
            {item.role}
          </h3>
          <h4 className="text-sm font-semibold text-accent-cyan mb-4">
            {item.company}
          </h4>
          <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Tech Tag Badges */}
          <div className="flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-900/50 text-text-light-secondary dark:text-text-dark-secondary border border-border-light dark:border-border-dark"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="w-[92%] max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-text-light-primary dark:text-text-dark-primary tracking-tight"
          >
            Work <span className="bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light-secondary dark:text-text-dark-secondary mt-3 max-w-xl mx-auto text-sm sm:text-base"
          >
            My timeline as a full-stack engineer, delivering web solutions and expanding my development skillsets over the years.
          </motion.p>
        </div>

        {/* Timeline List (Desktop: Alternating grid / Mobile: Vertical list) */}
        <div className="relative">
          {/* Mobile vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 md:hidden" />
          
          <div className="pl-8 md:pl-0">
            {EXPERIENCE_DATA.map((item, index) => (
              <TimelineCard key={item.company} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
export default Experience;
