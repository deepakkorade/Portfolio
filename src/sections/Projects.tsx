import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ('React' | 'Node' | 'Laravel')[];
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'iDentX Dental Clinic Management SaaS',
    description: 'Designed and developed a multi-branch dental clinic SaaS platform with 20+ modules including patient management, appointments, prescriptions, billing, and branch-level access control. Implemented scalable backend architecture with soft-delete support across 40+ relational database tables, branch-wise unique PRN generation logic, and secure role-based REST APIs. Optimized API performance by 40% using TanStack Query caching.',
    image: '/project1.png',
    tags: ['React.js', 'Laravel', 'TypeScript', 'MySQL', 'TanStack Query', 'REST APIs'],
    category: ['React', 'Laravel'],
    liveUrl: 'https://identx.in/',
    githubUrl: 'https://github.com/deepakkorade',
  },
  {
    id: 2,
    title: 'BADAPLOT – Real Estate Platform',
    description: 'Developed a full-stack real estate platform for buying, selling, and renting property listings. Built responsive frontend UI using React 18, Bootstrap 5, and GSAP animations. Integrated Mapbox GL for live property mapping, Google OAuth, RBAC security, reCAPTCHA v3, Razorpay payment gateway, and Chart.js for analytics dashboards.',
    image: '/project2.png',
    tags: ['React 18', 'Node.js', 'Mapbox GL', 'Razorpay', 'Bootstrap 5', 'GSAP', 'Chart.js'],
    category: ['React', 'Node'],
    liveUrl: 'https://www.badaplot.com/',
    githubUrl: 'https://github.com/deepakkorade',
  },
  {
    id: 3,
    title: 'Deccan Wheels CRM – Used Car Dealership Management System',
    description: 'An enterprise-grade CRM automating used car dealership workflows. Features inquiry and stock management, financial tracking, calendar scheduling, real-time notifications, Excel/PDF exports, multi-language support (i18n), and dark/light themes. Developed frontend with React 18 + TypeScript, Redux Toolkit for state management, Mantine UI, Formik/Yup validation, and ApexCharts for sales analytics.',
    image: '/project3.png',
    tags: ['React 18', 'TypeScript', 'Redux Toolkit', 'Tailwind', 'Mantine UI', 'ApexCharts'],
    category: ['React'],
    liveUrl: 'https://www.deccanwheels.com/',
    githubUrl: 'https://github.com/deepakkorade',
  },
];

const CATEGORIES: ('All' | 'React' | 'Node' | 'Laravel')[] = [
  'All',
  'React',
  'Node',
  'Laravel',
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'React' | 'Node' | 'Laravel'>('All');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category.includes(activeFilter as any);
  });

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/10 grid-bg">
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
            Featured <span className="bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light-secondary dark:text-text-dark-secondary mt-3 max-w-xl mx-auto text-sm sm:text-base"
          >
            A selective showcase of applications showing Laravel backends, interactive React frontends, Node microservices, and modern database architectures.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 scale-100 active:scale-95 interactive-hover ${
                activeFilter === cat
                  ? 'bg-accent-purple text-white shadow-lg shadow-purple-500/20'
                  : 'glass-panel text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-purple dark:hover:text-accent-purple'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-panel rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                
                {/* Project Screenshot / Image Frame */}
                <div className="relative overflow-hidden aspect-video bg-slate-900 border-b border-border-light dark:border-border-dark">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay with action links */}
                  <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent-purple hover:bg-purple-600 text-white rounded-full transition-transform hover:scale-110 interactive-hover"
                      title="Live Demo"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-2 group-hover:text-accent-purple dark:group-hover:text-accent-purple transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-semibold tracking-wide rounded-md bg-accent-purple/10 text-accent-purple dark:bg-accent-purple/20 border border-accent-purple/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
export default Projects;
