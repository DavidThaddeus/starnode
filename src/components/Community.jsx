import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2 } from 'lucide-react'
import { DiscordIcon, XIcon, TelegramIcon } from './icons/BrandIcons'
import { LINKS } from '../config/links'

const Community = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    if (!isValid) {
      setEmailError('Please enter a valid email address.')
      return
    }
    setEmailError('')
    setSubscribed(true)
    setEmail('')
  }

  const socialLinks = [
    {
      icon: DiscordIcon,
      name: "Discord",
      description: "Join our community discussions and get the latest updates",
      color: "from-indigo-500 to-purple-600",
      href: LINKS.discord
    },
    {
      icon: XIcon,
      name: "X",
      description: "Follow us for news, announcements, and community highlights",
      color: "from-gray-700 to-gray-900",
      href: LINKS.twitter
    },
    {
      icon: TelegramIcon,
      name: "Telegram",
      description: "Connect with fellow players and share strategies",
      color: "from-cyan-400 to-blue-500",
      href: LINKS.telegram
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="community" className="section-padding relative overflow-hidden bg-gradient-to-b from-space-blue/20 to-space-dark">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
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
            Community Updates
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands of players in the StarNode universe. Connect, compete, and build the future of gaming together.
          </motion.p>
        </motion.div>

        {/* Featured Character */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <motion.img
              src="/images/StarNode_main_logo_Graphic_02_not_animated-1.png"
              alt="StarNode"
              loading="lazy"
              decoding="async"
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 5
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 via-transparent to-neon-blue/20 rounded-lg blur-2xl -z-10" />
            
            {/* Floating Particles */}
            <motion.div
              className="absolute top-10 right-10 w-3 h-3 bg-star-gold rounded-full"
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
              className="absolute bottom-10 left-10 w-2 h-2 bg-neon-blue rounded-full"
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
          </div>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          className="grid max-w-sm sm:max-w-none mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-3d group cursor-pointer block"
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
                  className="w-16 h-16 flex items-center justify-center mb-6 mx-auto text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon size={56} />
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-space font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                    {social.name}
                  </h3>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {social.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 -z-10`} />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="card-3d max-w-2xl mx-auto p-6 sm:p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-space font-bold text-gradient mb-4">
            Stay Updated
          </h3>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            Get the latest news, updates, and exclusive content delivered to your inbox.
          </p>

          <AnimatePresence mode="wait">
            {subscribed ? (
              <motion.div
                key="success"
                className="flex items-center justify-center gap-3 max-w-md mx-auto bg-green-500/10 border border-green-400/40 rounded-lg px-4 py-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle2 size={22} className="text-green-400 flex-shrink-0" />
                <p className="text-green-300 font-medium text-left">
                  You&apos;re in orbit. Welcome to the StarNode crew — transmissions incoming.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubscribe}
                className="max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError('') }}
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 px-4 py-3 bg-space-blue/50 border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors duration-300"
                  />
                  <motion.button
                    type="submit"
                    className="btn-primary whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
                {emailError && (
                  <p className="text-red-400 text-sm mt-3 text-left">{emailError}</p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Community