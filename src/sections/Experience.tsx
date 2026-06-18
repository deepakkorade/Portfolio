import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar } from 'react-icons/fi';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  points: string[];
  technologies: string[];
}

interface EducationItem {
  degree: string;
  college: string;
  location: string;
  duration: string;
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'ADMsoft',
    duration: 'July 2024 – Present',
    location: 'Pune, Maharashtra',
    points: [
      'Developed responsive web applications using React and integrated REST APIs.',
      'Built scalable backend modules using Laravel and MySQL with complete CRUD functionality.',
      'Implemented authentication systems and secure file/image upload workflows.',
      'Collaborated with deployment and version control processes using Git.',
    ],
    technologies: ['React.js', 'Laravel', 'PHP', 'MySQL', 'REST APIs', 'Git', 'Authentication'],
  },
];

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'M.Sc. in Computer Science',
    college: 'Dr. D. Y. Patil Arts, Commerce & Science College',
    location: 'Pune, Maharashtra',
    duration: 'Jul 2023 – Apr 2025',
  },
  {
    degree: 'B.Sc. in Computer Science',
    college: 'Hutatma Rajguru Mahavidyalaya',
    location: 'Rajgurunagar, Pune, Maharashtra',
    duration: 'Jul 2020 – Apr 2022',
  },
];

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
            My <span className="bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light-secondary dark:text-text-dark-secondary mt-3 max-w-xl mx-auto text-sm sm:text-base"
          >
            A look into my professional experience and academic background as a full-stack engineer.
          </motion.p>
        </div>

        {/* Dual Column Layout: Work vs Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Column Left: Professional Experience */}
          <div className="flex flex-col gap-8">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold flex items-center gap-3 text-text-light-primary dark:text-text-dark-primary"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-accent-purple/10 text-accent-purple">
                💼
              </span>
              Work Experience
            </motion.h3>

            <div className="flex flex-col gap-6">
              {EXPERIENCE_DATA.map((item, index) => (
                <motion.div
                  key={item.company + item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel rounded-3xl p-6 hover:shadow-xl transition-all duration-300 relative group"
                >
                  {/* Subtle accent hover indicator */}
                  <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-accent-purple rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary">
                        {item.role}
                      </h4>
                      <span className="text-sm font-semibold text-accent-cyan">
                        {item.company}
                      </span>
                    </div>
                    
                    <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-text-light-secondary dark:text-text-dark-secondary">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-3.5 h-3.5 text-accent-purple" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-3.5 h-3.5 text-accent-cyan" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <ul className="list-disc pl-5 text-sm text-text-light-secondary dark:text-text-dark-secondary space-y-2.5 mb-6 leading-relaxed">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="marker:text-accent-purple/60">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tag Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-light dark:border-border-dark">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-900/50 text-text-light-secondary dark:text-text-dark-secondary border border-border-light dark:border-border-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column Right: Education */}
          <div className="flex flex-col gap-8">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold flex items-center gap-3 text-text-light-primary dark:text-text-dark-primary"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-accent-cyan/10 text-accent-cyan">
                🎓
              </span>
              Education
            </motion.h3>

            <div className="flex flex-col gap-6">
              {EDUCATION_DATA.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel rounded-3xl p-6 hover:shadow-xl transition-all duration-300 relative group"
                >
                  {/* Subtle accent hover indicator */}
                  <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-accent-cyan rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-1">
                        {item.degree}
                      </h4>
                      <span className="text-sm font-semibold text-accent-purple">
                        {item.college}
                      </span>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-text-light-secondary dark:text-text-dark-secondary">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-3.5 h-3.5 text-accent-cyan" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-3.5 h-3.5 text-accent-purple" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
