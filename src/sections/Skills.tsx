import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  percentage: number;
  gradientId: string;
  colors: { start: string; end: string };
}

interface SkillsProps {
  onSelectCategory: (category: 'All' | 'React' | 'Node' | 'Laravel') => void;
}

const PRIMARY_SKILLS: Skill[] = [
  { name: 'React.js', percentage: 90, gradientId: 'reactGrad', colors: { start: '#a855f7', end: '#3b82f6' } },
  { name: 'Laravel', percentage: 85, gradientId: 'laravelGrad', colors: { start: '#f43f5e', end: '#a855f7' } },
  { name: 'Node.js', percentage: 85, gradientId: 'nodeGrad', colors: { start: '#10b981', end: '#06b6d4' } },
  { name: 'Python (FastAPI)', percentage: 80, gradientId: 'pythonGrad', colors: { start: '#3b82f6', end: '#10b981' } },
  { name: 'MySQL', percentage: 80, gradientId: 'mysqlGrad', colors: { start: '#3b82f6', end: '#06b6d4' } },
];

const SKILL_CATEGORIES = [
  {
    title: 'Frontend Development',
    skills: ['JavaScript', 'TypeScript', 'React.js', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    title: 'Backend Engineering',
    skills: ['PHP (Laravel, CodeIgniter)', 'Node.js', 'Python (FastAPI)'],
  },
  {
    title: 'Database & Operations',
    skills: ['MySQL', 'CRUD Operations', 'Query Optimization'],
  },
  {
    title: 'Tools & Version Control',
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Linux'],
  },
  {
    title: 'AI Coding Companions',
    skills: ['Claude', 'ChatGPT', 'Cursor', 'GitHub Copilot', 'Google Gemini', 'Antigravity'],
  },
  {
    title: 'Core Concepts',
    skills: ['REST APIs', 'MVC Architecture', 'Authentication', 'RBAC (Role-Based Access Control)'],
  },
];

const CircularSkillCard: React.FC<{ skill: Skill; onClick: () => void }> = ({ skill, onClick }) => {
  const radius = 46;
  const strokeWidth = 7;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
      className="glass-panel rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:scale-[1.03] transition-all duration-300 hover:shadow-xl interactive-hover"
    >
      {/* Light glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* SVG Ring Container */}
      <div className="relative w-28 h-28 flex items-center justify-center mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <defs>
            <linearGradient id={skill.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={skill.colors.start} />
              <stop offset="100%" stopColor={skill.colors.end} />
            </linearGradient>
          </defs>
          {/* Background Track */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            className="stroke-slate-200 dark:stroke-slate-800"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Active Progress */}
          <motion.circle
            cx="56"
            cy="56"
            r={radius}
            stroke={`url(#${skill.gradientId})`}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{
              strokeDashoffset: circumference - (skill.percentage / 100) * circumference,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.1 }}
            strokeLinecap="round"
          />
        </svg>

        {/* Text Inside Circular chart */}
        <div className="absolute flex items-center justify-center">
          <span className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">
            {skill.percentage}%
          </span>
        </div>
      </div>

      <h3 className="text-base font-bold text-text-light-primary dark:text-text-dark-primary group-hover:text-accent-purple dark:group-hover:text-accent-purple transition-colors duration-300">
        {skill.name}
      </h3>
    </motion.div>
  );
};

export const Skills: React.FC<SkillsProps> = ({ onSelectCategory }) => {
  const mapSkillToCategory = (skillName: string): 'All' | 'React' | 'Node' | 'Laravel' => {
    const lower = skillName.toLowerCase();
    if (
      lower.includes('react') ||
      lower.includes('typescript') ||
      lower.includes('javascript') ||
      lower.includes('redux') ||
      lower.includes('bootstrap') ||
      lower.includes('css') ||
      lower.includes('html') ||
      lower.includes('frontend')
    ) {
      return 'React';
    }
    if (lower.includes('laravel') || lower.includes('php') || lower.includes('codeigniter')) {
      return 'Laravel';
    }
    if (
      lower.includes('node') ||
      lower.includes('python') ||
      lower.includes('fastapi') ||
      lower.includes('mysql') ||
      lower.includes('database') ||
      lower.includes('query')
    ) {
      return 'Node';
    }
    return 'All';
  };

  const handleSkillClick = (skillName: string) => {
    const category = mapSkillToCategory(skillName);
    onSelectCategory(category);
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
            My <span className="bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue bg-clip-text text-transparent">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light-secondary dark:text-text-dark-secondary mt-3 max-w-xl mx-auto text-sm sm:text-base"
          >
            Proficiencies and technologies that drive modern digital solutions, from reactive frontend frameworks to high-performance database architectures (click a skill to filter projects).
          </motion.p>
        </div>

        {/* Circular Progress Bars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {PRIMARY_SKILLS.map((skill) => (
            <CircularSkillCard
              key={skill.name}
              skill={skill}
              onClick={() => handleSkillClick(skill.name)}
            />
          ))}
        </div>

        {/* Categorized Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.05 }}
              key={category.title}
              className="glass-panel rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group hover:scale-[1.01]"
            >
              <h4 className="text-base font-bold text-accent-purple mb-4 border-b border-border-light dark:border-border-dark pb-2 group-hover:text-accent-cyan transition-colors">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    onClick={() => handleSkillClick(skill)}
                    className="px-3 py-1 text-xs rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/50 dark:hover:bg-slate-800 text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-purple dark:hover:text-accent-purple border border-border-light dark:border-border-dark transition-all duration-200 hover:scale-105 font-medium interactive-hover cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
