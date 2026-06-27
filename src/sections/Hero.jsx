import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.jpg';
import { stats } from '../data/stats';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function StarField() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 3000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// ============ Animation Variants ============
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

// ============ Main Hero Component ============
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#030712] overflow-visible px-6 pt-0.005"
    >
      {/* 3D Canvas - Background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarField />
        </Canvas>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1, pointerEvents: 'none' }}>
        <motion.div
          className="absolute left-[-20%] top-[-20%] w-75 h-75 sm:w-125 sm:h-125 rounded-full bg-blue-600/20 blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[-10%] bottom-[-20%] w-100 h-100 sm:w-150 sm:h-150 rounded-full bg-purple-600/15 blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-12"
        style={{ position: 'relative', zIndex: 2 }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left flex flex-col justify-center gap-6">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 inline-block px-4 py-2 text-sm md:text-base font-bold tracking-[0.15em] text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/30 rounded-full"
          >
            Full Stack Developer | QA Enthusiast
          </motion.span>

          <motion.div variants={item} className="space-y-2 mb-3">
            <p className="text-lg text-gray-400 font-medium">Hi, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="bg-linear-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                CHATHUMI
              </span>
              <br />
              <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                HEWAMARAMAGE
              </span>
            </h1>
          </motion.div>

          

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <span className="inline-flex items-center bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full font-medium whitespace-nowrap">
              Projects Completed: {stats.projects}+
            </span>
            <span className="inline-flex items-center bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full font-medium whitespace-nowrap">
              Years Learning: 2+
            </span>
            <span className="inline-flex items-center bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full font-medium whitespace-nowrap">
              Technologies: 10+
            </span>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={item}
          className="hidden md:flex justify-center lg:justify-end transform lg:translate-x-100"
        >
          <div className="relative overflow-hidden">
            <img
              src={heroImage}
              alt="Chathumi Hewamaramage"
              className="relative w-48 h-48 md:w-105 md:h-105 object-cover rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;