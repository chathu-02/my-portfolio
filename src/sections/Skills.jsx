import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { skillsData } from '../data/skillsData'; 
import { FaCode, FaServer, FaDatabase, FaTools, FaLightbulb, FaLaptopCode, FaJava, FaShieldAlt, FaMobileAlt, FaSitemap } from 'react-icons/fa';
import {
  SiJavascript, SiKotlin, SiPhp, SiCplusplus,
  SiReact, SiNextdotjs, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiSpringboot,
  SiMongodb, SiMysql, SiSupabase,
  SiGit, SiGithub, SiPostman, SiTrello
} from 'react-icons/si';
import { TbTestPipe, TbApi } from 'react-icons/tb';

/* ───── Icon + brand color map for each individual skill ───── */
const skillIconMap = {
  'JavaScript':   { icon: SiJavascript, color: '#F7DF1E' },
  'Java':         { icon: FaJava,       color: '#ED8B00' },
  'Kotlin':       { icon: SiKotlin,     color: '#7F52FF' },
  'PHP':          { icon: SiPhp,        color: '#777BB4' },
  'C++':          { icon: SiCplusplus,  color: '#00599C' },
  'React.js':     { icon: SiReact,      color: '#61DAFB' },
  'Next.js':      { icon: SiNextdotjs,  color: '#FFFFFF' },
  'HTML5':        { icon: SiHtml5,      color: '#E34F26' },
  'CSS3':         { icon: SiCss,        color: '#1572B6' },
  'Tailwind CSS': { icon: SiTailwindcss,color: '#06B6D4' },
  'Node.js':      { icon: SiNodedotjs,  color: '#339933' },
  'Express.js':   { icon: SiExpress,    color: '#FFFFFF' },
  'Spring Boot':  { icon: SiSpringboot, color: '#6DB33F' },
  'MongoDB':      { icon: SiMongodb,    color: '#47A248' },
  'MySQL':        { icon: SiMysql,      color: '#4479A1' },
  'Supabase (PostgreSQL)': { icon: SiSupabase, color: '#3FCF8E' },
  'Git':          { icon: SiGit,        color: '#F05032' },
  'GitHub':       { icon: SiGithub,     color: '#FFFFFF' },
  'Postman':      { icon: SiPostman,    color: '#FF6C37' },
  'Playwright':   { icon: TbTestPipe,   color: '#2EAD33' },
  'Trello':       { icon: SiTrello,     color: '#0052CC' },
  'REST APIs':          { icon: TbApi,        color: '#FF6C37' },
  'MVC Architecture':   { icon: FaSitemap,    color: '#A78BFA' },
  'Authentication':     { icon: FaShieldAlt,  color: '#FBBF24' },
  'Responsive Design':  { icon: FaMobileAlt,  color: '#34D399' },
};

const getIcon = (category) => {
  switch (category) {
    case "Languages":      return <FaCode />;
    case "Frontend":       return <FaLaptopCode />;
    case "Backend":        return <FaServer />;
    case "Databases":      return <FaDatabase />;
    case "Testing & Tools":return <FaTools />;
    case "Concepts":       return <FaLightbulb />;
    default:               return <FaCode />;
  }
};

const categoryGradients = {
  "Languages":       { from: '#3b82f6', to: '#6366f1' },
  "Frontend":        { from: '#06b6d4', to: '#3b82f6' },
  "Backend":         { from: '#22c55e', to: '#10b981' },
  "Databases":       { from: '#eab308', to: '#f59e0b' },
  "Testing & Tools": { from: '#a855f7', to: '#8b5cf6' },
  "Concepts":        { from: '#ec4899', to: '#f43f5e' },
};

const categoryColors = {
  "Languages":       { accent: "text-blue-400",   icon: "text-blue-400",   line: "bg-blue-400"   },
  "Frontend":        { accent: "text-cyan-400",    icon: "text-cyan-400",   line: "bg-cyan-400"   },
  "Backend":         { accent: "text-green-400",   icon: "text-green-400",  line: "bg-green-400"  },
  "Databases":       { accent: "text-yellow-400",  icon: "text-yellow-400", line: "bg-yellow-400" },
  "Testing & Tools": { accent: "text-purple-400",  icon: "text-purple-400", line: "bg-purple-400" },
  "Concepts":        { accent: "text-pink-400",    icon: "text-pink-400",   line: "bg-pink-400"   },
};

/* ───── 3D Auto-Animated Card Component ───── */
const TiltCard = ({ children, category, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const gradient = categoryGradients[category] || categoryGradients["Languages"];

  // Stagger the auto-animation so each card moves differently
  const autoDelay = index * 0.8;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="relative group"
    >
      {/* Always-visible animated gradient border glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl blur-[1px]"
        style={{
          background: `linear-gradient(135deg, ${gradient.from}35, transparent 50%, ${gradient.to}35)`,
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: autoDelay,
        }}
      />

      {/* Always-playing shine sweep effect */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-10"
        style={{ transform: 'translateZ(0)' }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(105deg, transparent 35%, ${gradient.from}10 42%, ${gradient.from}20 50%, ${gradient.from}10 58%, transparent 65%)`,
            animation: `shine-sweep 4s ease-in-out ${autoDelay}s infinite`,
          }}
        />
      </div>

      {/* Card body with auto-gradient background */}
      <motion.div
        className="relative rounded-2xl p-6 border border-white/[0.08] overflow-hidden"
        style={{ transform: 'translateZ(20px)' }}
        animate={{
          background: [
            `linear-gradient(135deg, ${gradient.from}05, #111111, ${gradient.to}03)`,
            `linear-gradient(135deg, ${gradient.from}10, #111111, ${gradient.to}08)`,
            `linear-gradient(135deg, ${gradient.from}05, #111111, ${gradient.to}03)`,
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: autoDelay,
        }}
      >
        {/* Always-visible pulsing glow orb */}
        <motion.div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[60px]"
          style={{
            background: `radial-gradient(circle, ${gradient.from}25, transparent)`,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: autoDelay,
          }}
        />

        {/* Bottom-left glow */}
        <motion.div
          className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full blur-[50px]"
          style={{
            background: `radial-gradient(circle, ${gradient.to}18, transparent)`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: autoDelay + 1,
          }}
        />

        {children}
      </motion.div>
    </motion.div>
  );
};

/* ───── Floating Particle ───── */
const FloatingParticle = ({ delay, x, size, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      background: `radial-gradient(circle, ${color}30, transparent)`,
      boxShadow: `0 0 ${size * 2}px ${color}15`,
    }}
    animate={{
      y: [0, -80, 0],
      x: [0, 20, -10, 0],
      opacity: [0, 0.6, 0],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: 6 + delay,
      repeat: Infinity,
      delay: delay,
      ease: 'easeInOut',
    }}
  />
);

/* ═══════════════════════════════════════════
   SKILLS SECTION
   ═══════════════════════════════════════════ */
const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6 bg-[#030712] text-white overflow-hidden">

      {/* Inline keyframes for shine effect */}
      <style>{`
        @keyframes shine-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }
      `}</style>

      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-1/4 w-80 h-80 bg-blue-500/[0.04] rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/[0.04] rounded-full blur-[120px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/[0.02] rounded-full blur-[140px]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticle delay={0} x={10} size={6} color="#3b82f6" />
      <FloatingParticle delay={2} x={30} size={4} color="#06b6d4" />
      <FloatingParticle delay={1} x={50} size={5} color="#a855f7" />
      <FloatingParticle delay={3} x={70} size={4} color="#22c55e" />
      <FloatingParticle delay={1.5} x={85} size={6} color="#ec4899" />
      <FloatingParticle delay={4} x={20} size={3} color="#eab308" />
      <FloatingParticle delay={2.5} x={60} size={5} color="#6366f1" />
      <FloatingParticle delay={3.5} x={90} size={4} color="#f43f5e" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">Technical Arsenal</h2>
          <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent ml-4" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 text-sm font-mono mb-14"
        >
          A curated collection of my technical skills, categorized for clarity and ease of understanding. Each skill is represented with a badge, showcasing my proficiency and experience in various technologies and tools.
        </motion.p>

        {/* Skills Grid — 3D Tilt Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: '1200px' }}
        >
          {skillsData.map((skillItem, index) => {
            const colors = categoryColors[skillItem.category] || categoryColors["Languages"];
            const gradient = categoryGradients[skillItem.category] || categoryGradients["Languages"];

            return (
              <TiltCard key={index} category={skillItem.category} index={index}>
                {/* Accent line — extends on hover */}
                <motion.div
                  className={`h-0.5 ${colors.line} mb-5 rounded-full`}
                  initial={{ width: 24 }}
                  whileHover={{ width: 56 }}
                  style={{ width: 24 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="group-hover:[&>div:first-child]:w-14">
                  <div className={`w-6 h-0.5 ${colors.line} mb-5 rounded-full group-hover:w-14 transition-all duration-500`} />
                </div>

                {/* Icon + Category */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.span
                    className={`text-xl ${colors.icon}`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {getIcon(skillItem.category)}
                  </motion.span>
                  <h3 className={`text-sm font-mono font-semibold ${colors.accent}`}>
                    // {skillItem.category.toLowerCase()}
                  </h3>
                </div>

                {/* Skills Badges with Icons */}
                <div className="flex flex-wrap gap-2.5">
                  {skillItem.skills.map((skill, i) => {
                    const skillInfo = skillIconMap[skill];
                    const SkillIcon = skillInfo?.icon;
                    const brandColor = skillInfo?.color || '#9ca3af';

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 200 }}
                        whileHover={{
                          scale: 1.12,
                          y: -3,
                          transition: { duration: 0.2 },
                        }}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-full border cursor-default transition-all duration-200"
                        style={{
                          borderColor: `${brandColor}25`,
                          background: `${brandColor}08`,
                          transform: 'translateZ(30px)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = `${brandColor}60`;
                          e.currentTarget.style.background = `${brandColor}18`;
                          e.currentTarget.style.boxShadow = `0 4px 20px ${brandColor}20, 0 0 40px ${brandColor}08`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${brandColor}25`;
                          e.currentTarget.style.background = `${brandColor}08`;
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {SkillIcon && (
                          <SkillIcon
                            className="text-sm"
                            style={{ color: brandColor, filter: `drop-shadow(0 0 4px ${brandColor}40)` }}
                          />
                        )}
                        <span
                          className="text-xs font-mono font-medium"
                          style={{ color: `${brandColor}dd` }}
                        >
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;