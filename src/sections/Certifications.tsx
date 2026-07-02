import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  skills: string[];
  description: string;
}

const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 1,
    title: 'Full Stack Web Development Certification',
    issuer: 'ADMsoft Training Division',
    date: 'Oct 2024',
    credentialUrl: '#',
    skills: ['React.js', 'Laravel', 'REST APIs', 'MySQL'],
    description: 'Comprehensive evaluation covering advanced frontend development, robust MVC backend development, relational database modeling, and scalable REST API architectures.',
  },
  {
    id: 2,
    title: 'Advanced React & State Management',
    issuer: 'Frontend Professionals',
    date: 'Dec 2024',
    credentialUrl: '#',
    skills: ['React 18', 'Redux Toolkit', 'TypeScript', 'Framer Motion'],
    description: 'Mastery over component life cycles, render hooks, optimized context flows, custom state synchronization, performance audits, and micro-interaction designs.',
  },
  {
    id: 3,
    title: 'Laravel MVC Architecture & Database Tuning',
    issuer: 'Backend Engineers Group',
    date: 'Mar 2025',
    credentialUrl: '#',
    skills: ['PHP', 'Laravel', 'Query Optimization', 'MySQL Schema Design'],
    description: 'Covers complex SQL query optimization, database indexing strategies, soft deletes, polymorphic relationships, and middleware-level authentication and role controls.',
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10 grid-bg">
      <div className="w-[92%] max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-text-light-primary dark:text-text-dark-primary tracking-tight"
          >
            Credentials & <span className="bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light-secondary dark:text-text-dark-secondary mt-3 max-w-xl mx-auto text-sm sm:text-base"
          >
            Professional milestones, verified competencies, and structured learning validations.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 relative group flex flex-col h-full hover:scale-[1.02]"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 inset-x-8 h-[3px] bg-gradient-to-r from-accent-purple to-accent-cyan rounded-b-full opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Icon & Details */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3.5 rounded-2xl bg-accent-purple/10 text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-colors duration-300">
                  <FiAward className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-light-primary dark:text-text-dark-primary leading-snug group-hover:text-accent-purple dark:group-hover:text-accent-purple transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-semibold text-accent-cyan block mt-0.5">
                    {cert.issuer}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary mb-6 leading-relaxed flex-grow">
                {cert.description}
              </p>

              {/* Meta & Badges */}
              <div className="mt-auto space-y-4 pt-4 border-t border-border-light dark:border-border-dark">
                <div className="flex items-center justify-between text-xs text-text-light-secondary dark:text-text-dark-secondary font-medium">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="w-3.5 h-3.5 text-accent-purple" />
                    {cert.date}
                  </span>
                  
                  {cert.credentialUrl !== '#' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-accent-purple hover:text-accent-cyan font-bold transition-colors interactive-hover"
                    >
                      Verify <FiExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-900/50 text-text-light-secondary dark:text-text-dark-secondary border border-border-light dark:border-border-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
