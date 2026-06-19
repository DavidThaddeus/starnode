import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Gem, Cpu, Award } from "lucide-react";
import { LINKS } from "../config/links";

const features = [
  {
    icon: Gem,
    number: "01",
    title: "Superior Digital Collectibles",
    description:
      "Each StarNode character is completely generated on chain and optimized through our own proprietary scripting programs in Rust. Say goodbye to dubious and gas-intensive smart contracts and inefficient metadata architecture. With StarNode, your character is permanently preserved and wholly owned by YOU.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Top-Tech Deployed",
    description:
      "StarNode's in-house development team has integrated advanced gaming metadata into every character card, embedding dynamic stats, abilities, and item rarity weights. Our first launch lays the groundwork for a gaming ecosystem with genuine and balanced mechanics, giving collectors and players both depth and function.",
  },
  {
    icon: Award,
    number: "03",
    title: "Experience & Integrity",
    description:
      "StarNode Studios was founded by a former web3 manager and artist inspired by the potential of blockchain gaming. Our small but mighty team is focused on developing a dynamic gaming world, and believe the speed, security, and affordability of Solana's blockchain provides the definitive foundation for the future of on-chain gaming.",
  },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-glow/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <img
              src="/images/StarNode_main_logo_Graphic_02_not_animated-1.png"
              alt="StarNode"
              loading="lazy"
              decoding="async"
              className="h-16 sm:h-24 lg:h-32 w-auto opacity-80"
            />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-space font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Authentic Decentralized Gaming{" "}
            <span className="text-gradient">at its Core</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Built on Solana. Designed for players. Owned by you.
          </motion.p>

          {/* Divider */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-neon-blue" />
            <div className="w-2 h-2 rounded-full bg-neon-blue" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-neon-blue" />
          </motion.div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid max-w-md mx-auto lg:max-w-none grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="relative bg-space-dark/60 backdrop-blur-sm rounded-2xl p-7 border border-neon-blue/15 hover:border-neon-blue/40 transition-all duration-300 group overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: "easeOut" }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-4xl font-space font-bold text-neon-blue/20 select-none">
                    {feature.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/15 to-blue-glow/10 border border-neon-blue/25 flex items-center justify-center group-hover:border-neon-blue/50 group-hover:bg-neon-blue/20 transition-all duration-300">
                    <Icon size={22} className="text-neon-blue" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-space font-bold text-white mb-3 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm flex-1">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="card-3d max-w-4xl mx-auto p-6 sm:p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-space font-bold text-gradient mb-4">
              Ready to Join the Revolution?
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Experience the future of blockchain gaming with StarNode. Own your
              characters, master the mechanics, and conquer the stars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/getting-started"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="btn-primary text-base sm:text-lg w-full sm:w-auto"
              >
                Get Started Now
              </Link>
              <a
                href={LINKS.whitepaper}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base sm:text-lg w-full sm:w-auto"
              >
                View Whitepaper
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
