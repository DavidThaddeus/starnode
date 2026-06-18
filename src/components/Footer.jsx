import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Mail, MapPin } from 'lucide-react'
import { DiscordIcon, XIcon, TelegramIcon } from './icons/BrandIcons'
import { LINKS } from '../config/links'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const footerLinks = {
    Community: [
      { name: 'Discord', href: LINKS.discord },
      { name: 'X', href: LINKS.twitter },
      { name: 'Telegram', href: LINKS.telegram }
    ],
    Resources: [
      { name: 'Whitepaper', href: LINKS.whitepaper },
      { name: 'Getting Started', href: '/getting-started', internal: true }
    ]
  }

  const socialIcons = [
    { Icon: DiscordIcon, href: LINKS.discord, label: 'Discord' },
    { Icon: XIcon, href: LINKS.twitter, label: 'X' },
    { Icon: TelegramIcon, href: LINKS.telegram, label: 'Telegram' }
  ]

  return (
    <footer className="relative bg-gradient-to-t from-space-dark to-space-blue/20 border-t border-neon-blue/20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-12 sm:py-16 px-8 sm:px-8 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-flex items-center space-x-3 mb-6">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="/images/StarNode_main.png"
                  alt="StarNode Logo"
                  loading="lazy"
                  decoding="async"
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-space font-bold text-gradient">
                  StarNode
                </span>
              </motion.div>
            </Link>

            <p className="text-gray-300 leading-relaxed mb-6">
              The Premier sci-fi TCG on Solana. Connect, compete, and conquer the stars
              in the ultimate blockchain gaming experience.
            </p>

            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <Mail size={16} />
              <a href={`mailto:${LINKS.email}`} className="hover:text-neon-blue transition-colors duration-300">
                {LINKS.email}
              </a>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 mb-6">
              <MapPin size={16} />
              <span>Built on Solana</span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-space-dark/60 border border-neon-blue/20 flex items-center justify-center text-gray-300 hover:text-neon-blue hover:border-neon-blue/50 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xl font-space font-bold text-white mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.internal ? (
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-neon-blue transition-colors duration-300 inline-flex items-center space-x-2 group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        <span>{link.name}</span>
                        <ExternalLink
                          size={14}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </Link>
                    ) : (
                      <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-neon-blue transition-colors duration-300 flex items-center space-x-2 group"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span>{link.name}</span>
                        <ExternalLink
                          size={14}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neon-blue/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-center lg:text-left">
              <p>&copy; 2024 StarNode Studios. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button — only after scrolling down a good amount */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-blue to-blue-glow rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300 z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18,15 12,9 6,15"></polyline>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer