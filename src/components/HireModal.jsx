import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaPaperPlane, FaCheckCircle, FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

export default function HireModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('');
  const [focused, setFocused] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Send directly to email via formsubmit.co ajax endpoint
      const response = await fetch('https://formsubmit.co/ajax/chathuhewamaramage@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject ? `[Portfolio Hire] ${formData.subject}` : `New Inquiry from ${formData.name}`,
          message: formData.message,
        })
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
          onClose();
        }, 2200);
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      // Fallback to mailto if network error
      const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
      const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      window.location.href = `mailto:chathuhewamaramage@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 2000);
    }
  };

  const inputClasses = (field) => `
    w-full bg-white/[0.04] border rounded-xl pl-10 pr-4 py-3 text-sm text-white font-mono
    placeholder-gray-500 outline-none transition-all duration-300
    ${focused === field
      ? 'border-cyan-400/60 bg-white/[0.08] shadow-[0_0_20px_rgba(6,182,212,0.12)]'
      : 'border-white/[0.1] hover:border-white/[0.2]'}
  `;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', duration: 0.45, bounce: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: '#0a0d17', border: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          {/* Top animated glow border */}
          <div
            className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          />

          {/* Background ambient orbs */}
          <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200 z-20"
          >
            <IoClose size={20} />
          </button>

          <div className="p-7 md:p-8 relative z-10">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Hire Me & Collaborate
              </h2>
              <p className="text-gray-400 text-sm font-sans mt-1">
                Send your message directly to my inbox (<span className="text-cyan-300 font-mono text-xs">chathuhewamaramage@gmail.com</span>).
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">
                  <FaUser />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                  className={inputClasses('name')}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  className={inputClasses('email')}
                />
              </div>

              {/* Subject */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 text-xs">
                  <FaCommentDots />
                </div>
                <input
                  type="text"
                  placeholder="Subject / Project (e.g. Full-time Role, Web App)"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused('')}
                  className={inputClasses('subject')}
                />
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  rows={4}
                  required
                  placeholder="Your message, project details, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  className="w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white font-mono placeholder-gray-500 outline-none transition-all duration-300 border-white/[0.1] hover:border-white/[0.2] focus:border-cyan-400/60 focus:bg-white/[0.08] focus:shadow-[0_0_20px_rgba(6,182,212,0.12)] resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #7c3aed 100%)',
                  boxShadow: '0 4px 25px rgba(6, 182, 212, 0.3)'
                }}
              >
                {status === 'sent' ? (
                  <span className="flex items-center gap-2 text-emerald-200">
                    <FaCheckCircle className="text-base" /> Sent Successfully!
                  </span>
                ) : status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    Sending to Chathumi...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FaPaperPlane className="text-xs" /> Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
