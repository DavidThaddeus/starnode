import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.querySelector('#features')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-dark/20 to-space-dark/60" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-screen py-24 sm:py-20">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Logo */}
            <motion.div
              className="flex justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="/images/StarNode-main-logo-revised-final-1.png"
                alt="StarNode Logo"
                className="h-14 sm:h-20 lg:h-24 w-auto"
              />
            </motion.div>

            {/* Tagline */}
            <motion.h1
              className="text-4xl lg:text-6xl xl:text-7xl font-space font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-body max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              The Premier sci-fi TCG now on Solana!
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-gray-400 font-body max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-400 font-body max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Our First Character Launch - <span className="text-neon-blue">Humarai v1</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link
                to="/getting-started"
                className="btn-primary text-lg w-full sm:w-auto"
              >
                Getting Started
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Character Display */}
          <motion.div
            className="relative h-72 sm:h-96 lg:h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Character Image with 3D Effects */}
            <div className="relative h-full perspective-1000">
              <motion.div
                className="relative h-full transform-3d"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.05 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src="/images/render-gif-1.webp"
                  alt="StarNode Character"
                  width="720"
                  height="720"
                  decoding="async"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 via-transparent to-neon-blue/20 rounded-lg blur-xl" />
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 right-10 w-4 h-4 bg-neon-blue rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-3 h-3 bg-neon-blue rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Curvature Structure - Banner entering into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-space-dark/95 backdrop-blur-md" style={{ 
        borderRadius: '50% 50% 0 0',
        transform: 'translateY(50%)'
      }}>
        {/* Golden Decorative Line */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
      </div>
      

    </section>
  )
}

export default Hero