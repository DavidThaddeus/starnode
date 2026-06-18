import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Sword, BarChart3, Star } from "lucide-react";

const GameMechanics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mechanics = [
    {
      icon: Star,
      title: "Character Classes",
      description:
        "Four potent starting character classes each with species-specific traits.",
      features: [
        "Unique racial abilities",
        "Specialized skill trees",
        "Distinct playstyles",
        "Balanced progression",
      ],
    },
    {
      icon: Shield,
      title: "Armor, Weapons & Accessories",
      description:
        "Hundreds of thoughtfully designed and balanced items which give each character a competitive edge.",
      features: [
        "Legendary equipment",
        "Stat modifications",
        "Set bonuses",
        "Rarity tiers",
      ],
    },
    {
      icon: BarChart3,
      title: "Attributes",
      description:
        "Carefully designed character statistics lay the foundation for StarNode's in-depth game mechanics.",
      features: [
        "Dynamic stat system",
        "Strategic customization",
        "Combat calculations",
        "Performance metrics",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <section
      id="mechanics"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-transparent to-space-blue/20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space font-bold text-gradient mb-4">
            Game Mechanics
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Master the core systems that define StarNode's strategic depth.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative max-w-md sm:max-w-xl lg:max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Vertical center line — hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/60 via-neon-blue/30 to-transparent -translate-x-1/2" />

          {mechanics.map((mechanic, index) => {
            const Icon = mechanic.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={mechanic.title}
                className="relative flex items-center mb-12 lg:mb-16"
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.25, ease: "easeOut" }}
              >
                {/* Left column */}
                <div className="hidden lg:flex w-5/12 justify-end pr-10">
                  {isLeft && <MechanicCard mechanic={mechanic} Icon={Icon} />}
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-neon-blue to-blue-glow shadow-lg shadow-neon-blue/40 border-2 border-space-dark" />
                </div>

                {/* Right column */}
                <div className="hidden lg:flex w-5/12 justify-start pl-10">
                  {!isLeft && <MechanicCard mechanic={mechanic} Icon={Icon} />}
                </div>

                {/* Mobile: full width card */}
                <div className="lg:hidden w-full">
                  <MechanicCard mechanic={mechanic} Icon={Icon} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="card-3d max-w-4xl mx-auto p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-space font-bold text-gradient mb-4">
              Ready to Master the Mechanics?
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Dive deep into StarNode's strategic gameplay and discover the
              endless possibilities of character customization and tactical combat.
            </p>
            <motion.button
              className="btn-primary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Game Guide
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MechanicCard = ({ mechanic, Icon }) => (
  <div className="bg-space-dark/60 backdrop-blur-sm rounded-2xl p-6 border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300 w-full group">
    <div className="flex items-center gap-4 mb-3">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-blue-glow/10 border border-neon-blue/30 flex items-center justify-center flex-shrink-0 group-hover:border-neon-blue/60 transition-colors duration-300">
        <Icon size={24} className="text-neon-blue" />
      </div>
      <h3 className="text-xl font-space font-bold text-white leading-tight">
        {mechanic.title}
      </h3>
    </div>
    <p className="text-gray-400 leading-relaxed text-sm">
      {mechanic.description}
    </p>
    <ul className="mt-4 space-y-1.5">
      {mechanic.features.map((feat) => (
        <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-blue flex-shrink-0" />
          {feat}
        </li>
      ))}
    </ul>
  </div>
);

export default GameMechanics;
