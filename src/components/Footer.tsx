import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState(248);
  const [downloadCount, setDownloadCount] = useState(54);

  useEffect(() => {
    // Visitor counter simulation
    const hasVisited = sessionStorage.getItem('hasVisited');
    let savedVisitors = parseInt(localStorage.getItem('visitorCount') || '248', 10);
    
    if (!hasVisited) {
      savedVisitors += 1;
      localStorage.setItem('visitorCount', savedVisitors.toString());
      sessionStorage.setItem('hasVisited', 'true');
    }
    setVisitorCount(savedVisitors);

    // Resume downloads tracker
    const savedDownloads = parseInt(localStorage.getItem('downloadCount') || '54', 10);
    setDownloadCount(savedDownloads);

    const handleResumeDownload = () => {
      let currentDownloads = parseInt(localStorage.getItem('downloadCount') || '54', 10);
      currentDownloads += 1;
      localStorage.setItem('downloadCount', currentDownloads.toString());
      setDownloadCount(currentDownloads);
    };

    window.addEventListener('resume-downloaded', handleResumeDownload);
    return () => {
      window.removeEventListener('resume-downloaded', handleResumeDownload);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-light dark:border-border-dark bg-white dark:bg-bg-dark py-12 relative overflow-hidden">
      
      {/* Scroll to Top Trigger */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="p-3.5 rounded-full bg-accent-purple text-white hover:bg-purple-600 transition-all shadow-lg shadow-purple-500/25 scale-100 hover:scale-105 active:scale-95 flex items-center justify-center interactive-hover"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="w-5 h-5" />
        </button>
      </div>

      <div className="w-[92%] max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {/* Left: Copyright */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-xl font-bold bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue bg-clip-text text-transparent">
            DK.DEV
          </span>
          <span className="text-xs text-text-light-secondary dark:text-text-dark-secondary">
            © {new Date().getFullYear()} Deepak Korade. All Rights Reserved.
          </span>
        </div>

        {/* Center: Live Counter Stats */}
        <div className="flex gap-6 px-6 py-2.5 rounded-2xl glass-panel text-xs sm:text-sm font-semibold text-text-light-primary dark:text-text-dark-primary select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
            <span>Visitors: <span className="text-accent-cyan">{visitorCount}</span></span>
          </div>
          <div className="w-[1px] bg-border-light dark:bg-border-dark" />
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-purple" />
            <span>Downloads: <span className="text-accent-purple">{downloadCount}</span></span>
          </div>
        </div>

        {/* Right: Social Profiles */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/deepakkorade"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border-light dark:border-border-dark text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-purple dark:hover:text-accent-purple hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 hover:scale-105 interactive-hover"
            aria-label="GitHub"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-korade/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border-light dark:border-border-dark text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-blue dark:hover:text-accent-blue hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 hover:scale-105 interactive-hover"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/919613404043"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border-light dark:border-border-dark text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-emerald dark:hover:text-accent-emerald hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 hover:scale-105 interactive-hover"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
          <a
            href="mailto:deepakkorade281@gmail.com"
            className="p-2.5 rounded-xl border border-border-light dark:border-border-dark text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-cyan dark:hover:text-accent-cyan hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 hover:scale-105 interactive-hover"
            aria-label="Email"
          >
            <FiMail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
