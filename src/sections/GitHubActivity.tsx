import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from '../context/ThemeContext';

export const GitHubActivity: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="github" className="py-20 bg-slate-50/50 dark:bg-slate-900/10 grid-bg">
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
            GitHub <span className="bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue bg-clip-text text-transparent">Activity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light-secondary dark:text-text-dark-secondary mt-3 max-w-xl mx-auto text-sm sm:text-base"
          >
            A visualization of my commit habits, open-source work, and continuous contribution streaks.
          </motion.p>
        </div>

        {/* GitHub Calendar Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300"
        >
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl text-center mb-8 border-b border-border-light dark:border-border-dark pb-6">
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-accent-purple">35+</span>
              <span className="text-[10px] sm:text-xs text-text-light-secondary dark:text-text-dark-secondary font-medium">
                Public Repositories
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-accent-cyan">1,450+</span>
              <span className="text-[10px] sm:text-xs text-text-light-secondary dark:text-text-dark-secondary font-medium">
                Annual Commits
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-accent-emerald">24 Days</span>
              <span className="text-[10px] sm:text-xs text-text-light-secondary dark:text-text-dark-secondary font-medium">
                Current Streak
              </span>
            </div>
          </div>

          {/* GitHub Contributions Graph */}
          <div className="w-full overflow-x-auto py-2 flex justify-center text-text-light-primary dark:text-text-dark-primary select-none">
            <div className="min-w-[700px] flex justify-center">
              <GitHubCalendar
                username="deepakkorade"
                colorScheme={theme === 'dark' ? 'dark' : 'light'}
                style={{
                  color: theme === 'dark' ? '#f8fafc' : '#0f172a',
                }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default GitHubActivity;
