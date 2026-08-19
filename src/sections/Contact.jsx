import React from 'react';
import { motion } from 'framer-motion';
import { SiGmail, SiGithub } from 'react-icons/si';
import { FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

/* ───── Social / Contact icon links with official brand colors ───── */
const socialLinks = [
  {
    name: 'Gmail',
    icon: SiGmail,
    href: 'mailto:chathuhewamaramage@gmail.com',
    color: '#EA4335',
    bg: 'rgba(234, 67, 53, 0.1)',
    border: 'rgba(234, 67, 53, 0.35)',
    glow: 'rgba(234, 67, 53, 0.4)',
    tooltip: 'chathuhewamaramage@gmail.com',
    external: false,
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/chathumi-hewamaramage-a65719267/',
    color: '#0A66C2',
    bg: 'rgba(10, 102, 194, 0.1)',
    border: 'rgba(10, 102, 194, 0.35)',
    glow: 'rgba(10, 102, 194, 0.4)',
    tooltip: 'LinkedIn Profile',
    external: true,
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    href: 'https://github.com/chathu-02',
    color: '#FFFFFF',
    bg: 'rgba(255, 255, 255, 0.08)',
    border: 'rgba(255, 255, 255, 0.25)',
    glow: 'rgba(255, 255, 255, 0.3)',
    tooltip: 'GitHub Profile',
    external: true,
  },
];

/* ═══════════════════════════════════════════
   CONTACT SECTION
   ═══════════════════════════════════════════ */
export default function Contact({ onHireClick }) {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-[#030712] text-white pt-28 md:pt-36 pb-24 px-6 min-h-[85vh] flex flex-col justify-center items-center"
    >
      {/* Animated background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-400/[0.06] rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/[0.06] rounded-full blur-[120px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/[0.03] rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 w-full flex flex-col items-center text-center">

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-400/35 bg-emerald-400/10 mb-8 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <FaMapMarkerAlt className="text-emerald-400 text-sm animate-pulse" />
          <span className="text-xs md:text-sm font-mono font-semibold tracking-wider text-emerald-300 uppercase">
            MAWANELLA, SRI LANKA 🇱🇰
          </span>
        </motion.div>

        {/* Section Header */}
        <div className="mb-10 max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3"
          >
            <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg"
          >
            Feel free to connect directly via my social channels or send a direct message.
          </motion.p>
        </div>

        {/* Original Branded Icons Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center justify-center gap-6 md:gap-8 mb-10 flex-wrap"
        >
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex flex-col items-center"
              >
                {/* Floating circle with original icon */}
                <div
                  className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl border transition-all duration-300 shadow-lg cursor-pointer"
                  style={{
                    background: item.bg,
                    borderColor: item.border,
                    boxShadow: `0 4px 20px ${item.glow}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px ${item.glow}, 0 0 10px ${item.color}`;
                    e.currentTarget.style.borderColor = item.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 20px ${item.glow}`;
                    e.currentTarget.style.borderColor = item.border;
                  }}
                >
                  <Icon
                    className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.color }}
                  />
                </div>

                {/* Name Label */}
                <span 
                  className="text-xs font-mono font-semibold mt-3 text-gray-300 group-hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Action Button that opens the HireModal */}
        {onHireClick && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-center mt-2"
          >
            <button
              onClick={onHireClick}
              className="px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              <FaPaperPlane className="text-xs" /> Send Direct Message / Hire Me
            </button>
          </motion.div>
        )}

        {/* Bottom Divider */}
        <motion.div
          className="mt-16 h-px w-full max-w-lg"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  );
}