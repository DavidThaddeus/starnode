import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Gamepad2, Globe, Zap } from "lucide-react";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Users,
      title: "Collect",
      description:
        "Collect stunning characters equipped with unique and powerful gear.",
      color: "from-neon-blue to-blue-400",
    },
    {
      icon: Gamepad2,
      title: "Play",
      description:
        "Play to your strengths with complex gaming metadata built into each character.",
      color: "from-neon-purple to-purple-400",
    },
    {
      icon: Globe,
      title: "Explore",
      description:
        "Explore an ever-expanding universe rich with lore currently on Solana's lightning-fast blockchain.",
      color: "from-star-gold to-yellow-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Curved edges using your working SVG */}
      <div className="absolute inset-x-0 top-0 h-15">
        <svg
          className="w-full h-full block"
          viewBox="0 0 100 8"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,16 
              L0,5 
              L8,0 
              C40,0 70,0.8 92,1.2 
              L100,5 
              L100,16 
              Z
            "
            // fill="#B7C6E0"
            fill="#000000"

          />
        </svg>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-space font-bold text-gradient mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Begin Building Your Deck
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the core elements that make StarNode the ultimate sci-fi
            trading card game experience
          </motion.p>
        </motion.div>

        {/* Character Image */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <motion.img
              src="/images/Homepage2charupdate-e1739827451898.png"
              alt="StarNode Characters"
              loading="lazy"
              decoding="async"
              className="max-w-full h-auto max-h-96 object-contain drop-shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/10 via-transparent to-neon-purple/10 rounded-lg blur-2xl -z-10" />
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid max-w-sm sm:max-w-none mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                className="card-3d group cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon size={28} className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-space font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 -z-10`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button
            className="btn-primary text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Characters
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
