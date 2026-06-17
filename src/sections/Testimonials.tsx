import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { RiDoubleQuotesR } from 'react-icons/ri';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: 'Siddharth Mehta',
    role: 'CEO & Founder',
    company: 'Fintech Solutions',
    feedback: 'Deepak is an exceptional developer. He migrated our legacy platform to a React + Laravel architecture with absolute precision and zero downtime. His approach to problem-solving is outstanding!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Marketing Director',
    company: 'CreativePulse Agency',
    feedback: 'Working with Deepak on our agency portal was a breeze. He translated our Figma designs into a blazing fast, SEO-optimized custom WordPress setup. Our leads increased by 40% after launching.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    role: 'Lead Architect',
    company: 'DataStream Technologies',
    feedback: 'Deepak\'s Node.js backend capabilities saved us months of planning. He wrote clear, highly scalable REST APIs that manage database requests effortlessly. A highly recommended developer!',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  // Sliding animation states
  const slideVariants = {
    initial: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' as const },
    }),
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="w-[92%] max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-text-light-primary dark:text-text-dark-primary tracking-tight"
          >
            Client <span className="bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue bg-clip-text text-transparent">Endorsements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light-secondary dark:text-text-dark-secondary mt-3 max-w-xl mx-auto text-sm sm:text-base"
          >
            Real feedback from clients and colleagues I’ve collaborated with to build high-performance products.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center min-h-[300px]">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full glass-panel rounded-3xl p-8 sm:p-10 flex flex-col relative"
            >
              {/* Quote Icon Background decoration */}
              <RiDoubleQuotesR className="absolute right-8 bottom-8 text-7xl sm:text-8xl text-accent-purple/5 dark:text-accent-purple/5 pointer-events-none" />

              {/* Stars Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-500" />
                ))}
              </div>

              {/* Feedback description */}
              <p className="text-base sm:text-lg text-text-light-primary dark:text-text-dark-primary italic leading-relaxed mb-8 relative z-10">
                "{activeTestimonial.feedback}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col">
                <span className="text-base font-bold text-text-light-primary dark:text-text-dark-primary">
                  {activeTestimonial.name}
                </span>
                <span className="text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">
                  {activeTestimonial.role}, <span className="text-accent-cyan font-medium">{activeTestimonial.company}</span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Slider Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full glass-panel text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-purple dark:hover:text-accent-purple transition-all scale-100 hover:scale-105 active:scale-95 interactive-hover"
            aria-label="Previous Testimonial"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setDirection(idx > activeIndex ? 'right' : 'left');
                  setActiveIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-6 bg-accent-purple' : 'bg-slate-300 dark:bg-slate-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full glass-panel text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-purple dark:hover:text-accent-purple transition-all scale-100 hover:scale-105 active:scale-95 interactive-hover"
            aria-label="Next Testimonial"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
export default Testimonials;
