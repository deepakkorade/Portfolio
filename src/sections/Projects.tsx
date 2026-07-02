import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

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

interface ProjectsProps {
  activeFilter: 'All' | 'React' | 'Node' | 'Laravel';
  setActiveFilter: (filter: 'All' | 'React' | 'Node' | 'Laravel') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ activeFilter, setActiveFilter }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category.includes(activeFilter as 'React' | 'Node' | 'Laravel');
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
                  <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-accent-purple hover:bg-purple-600 text-white rounded-full transition-transform hover:scale-110 interactive-hover"
                        title="Live Demo"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-transform hover:scale-110 interactive-hover"
                        title="GitHub Repository"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl transition-all hover:scale-105 active:scale-95 interactive-hover mt-1"
                    >
                      Learn More
                    </button>
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh] bg-white dark:bg-bg-dark border border-border-light dark:border-border-dark"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-text-light-primary dark:text-text-dark-primary transition-all z-20 scale-100 hover:scale-105 active:scale-95 interactive-hover"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8">
                {/* Visual Header */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-border-light dark:border-border-dark">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-6">
                    <div>
                      <span className="px-3 py-1 text-xs rounded-full bg-accent-purple text-white font-semibold mb-2 inline-block">
                        {selectedProject.category.join(' + ')}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-accent-purple uppercase tracking-wider mb-2">
                      About the Project
                    </h4>
                    <p className="text-sm sm:text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Highlights/Key Features */}
                  <div>
                    <h4 className="text-xs font-bold text-accent-cyan uppercase tracking-wider mb-3">
                      Key Highlights & Architecture
                    </h4>
                    <ul className="list-disc pl-5 text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary space-y-2.5 leading-relaxed">
                      {selectedProject.id === 1 && (
                        <>
                          <li>Built responsive Multi-Branch SaaS architecture supporting independent clinic operations.</li>
                          <li>Designed a robust normalized relational database containing 40+ tables with soft-deletes.</li>
                          <li>Implemented custom PRN (Patient Record Number) generation system per branch.</li>
                          <li>Optimized rendering with TanStack Query (React Query) query-caching and prefetching, improving load times by 40%.</li>
                          <li>Configured secure JSON Web Token (JWT) authorization alongside detailed Role-Based Access Control (RBAC).</li>
                        </>
                      )}
                      {selectedProject.id === 2 && (
                        <>
                          <li>Integrated Mapbox GL mapping systems to pinpoint and render property listings in real-time.</li>
                          <li>Configured secure end-to-end checkout paths using the Razorpay payment gateway API.</li>
                          <li>Built OAuth authorization sequences alongside enterprise Recaptcha v3 safety checks.</li>
                          <li>Developed rich analytics dashboard layouts leveraging dynamic interactive charts.</li>
                        </>
                      )}
                      {selectedProject.id === 3 && (
                        <>
                          <li>Structured centralized state sync models using Redux Toolkit and TypeScript interfaces.</li>
                          <li>Crafted custom layout frameworks with Mantine UI, Tailwind styles, and interactive ApexCharts.</li>
                          <li>Configured robust data export actions producing spreadsheets and PDFs dynamically.</li>
                          <li>Implemented internationalization frameworks supporting multiple interface locales.</li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <h4 className="text-xs font-bold text-accent-purple uppercase tracking-wider mb-3">
                      Technologies & Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-accent-purple/10 text-accent-purple dark:bg-accent-purple/20 border border-accent-purple/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border-light dark:border-border-dark">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-accent-purple hover:bg-purple-600 text-white text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-purple-500/20 scale-100 hover:scale-105 active:scale-95 interactive-hover"
                    >
                      <FiExternalLink className="w-4 h-4" /> Visit Live Site
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl glass-panel text-text-light-primary dark:text-text-dark-primary text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2 scale-100 hover:scale-105 active:scale-95 interactive-hover"
                    >
                      <FiGithub className="w-4 h-4" /> View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Projects;
