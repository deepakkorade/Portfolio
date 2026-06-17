import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ('React' | 'Node' | 'Laravel' | 'WordPress')[];
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Admin Dashboard',
    description: 'A premium full-stack analytical dashboard tracking sales, stock, and orders. Features responsive widgets and theme toggles.',
    image: '/project1.png',
    tags: ['React.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
    category: ['React', 'Node'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/deepakkorade',
  },
  {
    id: 2,
    title: 'DevConnect Portal',
    description: 'A sleek social network platform for developers featuring post feeds, user profiles, real-time messaging, and tech filters.',
    image: '/project2.png',
    tags: ['React.js', 'Express.js', 'MongoDB', 'Socket.io'],
    category: ['React', 'Node'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/deepakkorade',
  },
  {
    id: 3,
    title: 'Laravel Multi-Tenant SaaS',
    description: 'A robust Laravel-powered software service with Stripe billing subscription packages, customer domains, and site building dashboards.',
    image: '/project1.png',
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    category: ['Laravel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/deepakkorade',
  },
  {
    id: 4,
    title: 'Agency WordPress Portal',
    description: 'A bespoke creative agency website built with WordPress, customized Gutenberg blocks, custom post types, and speed optimizations.',
    image: '/project3.png',
    tags: ['WordPress', 'PHP', 'JavaScript', 'CSS3'],
    category: ['WordPress'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/deepakkorade',
  },
  {
    id: 5,
    title: 'High-Throughput API Gateway',
    description: 'A highly scalable, secure Node API gateway supporting rate limiting, reverse proxy routes, and JSON Web Token authorization.',
    image: '/project2.png',
    tags: ['Node.js', 'Express.js', 'TypeScript', 'Redis'],
    category: ['Node'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/deepakkorade',
  },
  {
    id: 6,
    title: 'Laravel React ERP System',
    description: 'An enterprise resource planning portal featuring React frontend views integrated with Laravel API backend services.',
    image: '/project1.png',
    tags: ['Laravel', 'React.js', 'Redux', 'MySQL'],
    category: ['Laravel', 'React'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/deepakkorade',
  },
];

const CATEGORIES: ('All' | 'React' | 'Node' | 'Laravel' | 'WordPress')[] = [
  'All',
  'React',
  'Node',
  'Laravel',
  'WordPress',
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'React' | 'Node' | 'Laravel' | 'WordPress'>('All');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category.includes(activeFilter);
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
            A selective showcase of applications showing Laravel backends, interactive React frontends, Node microservices, and custom WordPress setups.
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
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white hover:bg-slate-100 text-slate-950 rounded-full transition-transform hover:scale-110 interactive-hover"
                      title="GitHub Repository"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
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
