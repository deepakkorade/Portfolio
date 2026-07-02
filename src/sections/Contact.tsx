import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    let isValid = true;
    const errors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate sending email (integrate with EmailJS or api endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden grid-bg">
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
            Get In <span className="bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-blue bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-light-secondary dark:text-text-dark-secondary mt-3 max-w-xl mx-auto text-sm sm:text-base"
          >
            Have a project idea, want to discuss collaboration, or just say hello? Drop a message!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Email Card */}
            <div className="glass-panel rounded-3xl p-6 flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="p-4 rounded-2xl bg-accent-purple/10 text-accent-purple">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-text-light-secondary dark:text-text-dark-secondary uppercase tracking-wider">
                  Email Me
                </span>
                <a
                  href="mailto:deepakkorade281@gmail.com"
                  className="text-sm sm:text-base font-bold text-text-light-primary dark:text-text-dark-primary hover:text-accent-purple dark:hover:text-accent-purple transition-colors interactive-hover"
                >
                  deepakkorade281@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-panel rounded-3xl p-6 flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="p-4 rounded-2xl bg-accent-emerald/10 text-accent-emerald">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-text-light-secondary dark:text-text-dark-secondary uppercase tracking-wider">
                  WhatsApp Me
                </span>
                <a
                  href="https://wa.me/919613404043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-bold text-text-light-primary dark:text-text-dark-primary hover:text-accent-emerald dark:hover:text-accent-emerald transition-colors interactive-hover"
                >
                  +91 96134 04043
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-panel rounded-3xl p-6 flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="p-4 rounded-2xl bg-accent-blue/10 text-accent-blue">
                <FaLinkedinIn className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-text-light-secondary dark:text-text-dark-secondary uppercase tracking-wider">
                  LinkedIn Profile
                </span>
                <a
                  href="https://www.linkedin.com/in/deepak-korade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-bold text-text-light-primary dark:text-text-dark-primary hover:text-accent-blue dark:hover:text-accent-blue transition-colors interactive-hover"
                >
                  linkedin.com/in/deepak-korade
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel rounded-3xl p-6 flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="p-4 rounded-2xl bg-accent-cyan/10 text-accent-cyan">
                <FiMapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-text-light-secondary dark:text-text-dark-secondary uppercase tracking-wider">
                  Location
                </span>
                <span className="text-sm sm:text-base font-bold text-text-light-primary dark:text-text-dark-primary">
                  Maharashtra, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-3xl p-8 flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-text-light-primary dark:text-text-dark-primary">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-sm text-text-light-primary dark:text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-accent-purple/20 transition-all ${
                      formErrors.name ? 'border-red-500' : 'border-border-light dark:border-border-dark focus:border-accent-purple'
                    }`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && <span className="text-[10px] text-red-500 font-semibold">{formErrors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-text-light-primary dark:text-text-dark-primary">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-sm text-text-light-primary dark:text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-accent-purple/20 transition-all ${
                      formErrors.email ? 'border-red-500' : 'border-border-light dark:border-border-dark focus:border-accent-purple'
                    }`}
                    placeholder="john@example.com"
                  />
                  {formErrors.email && <span className="text-[10px] text-red-500 font-semibold">{formErrors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold text-text-light-primary dark:text-text-dark-primary">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-border-light dark:border-border-dark text-sm text-text-light-primary dark:text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-accent-purple/20 focus:border-accent-purple transition-all"
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-text-light-primary dark:text-text-dark-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border text-sm text-text-light-primary dark:text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-accent-purple/20 transition-all resize-none ${
                    formErrors.message ? 'border-red-500' : 'border-border-light dark:border-border-dark focus:border-accent-purple'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {formErrors.message && <span className="text-[10px] text-red-500 font-semibold">{formErrors.message}</span>}
              </div>

              {/* Submit Button / Status messages */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent-purple hover:bg-purple-600 disabled:bg-purple-400 text-white font-medium transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 scale-100 hover:scale-105 active:scale-95 disabled:scale-100 interactive-hover"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>

                {/* Status Banners */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-emerald-500 text-sm font-semibold mt-2 sm:mt-0"
                  >
                    <FiCheckCircle className="w-5 h-5" /> Message sent successfully!
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-500 text-sm font-semibold mt-2 sm:mt-0"
                  >
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
