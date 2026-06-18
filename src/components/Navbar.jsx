import React, { useState, useEffect, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Wallet } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { LINKS } from '../config/links'

// Defer the wallet button (and the heavy @solana/web3.js it pulls in) so it
// doesn't weigh down the initial page load.
const WalletButton = lazy(() => import('./WalletButton'))

// Placeholder shown while the wallet chunk loads — matches the real button's
// footprint to avoid layout shift.
const WalletButtonFallback = () => (
  <div
    className="flex items-center gap-2 px-4 py-2 border border-neon-blue/40 text-neon-blue/70 font-medium text-sm select-none"
    style={{ borderRadius: '12px 0 12px 0' }}
  >
    <Wallet size={15} />
    Connect Wallet
  </div>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', type: 'scroll', href: '#home' },
    { name: 'Getting Started', type: 'route', href: '/getting-started' },
    { name: 'Whitepaper', type: 'external', href: LINKS.whitepaper },
  ]

  const handleNavClick = (item) => {
    setIsOpen(false)
    if (item.type === 'external') {
      window.open(item.href, '_blank', 'noopener,noreferrer')
      return
    }
    if (item.type === 'route') {
      navigate(item.href)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    // Scroll nav: go home first if not already there
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.querySelector(item.href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      const el = document.querySelector(item.href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 cursor-crosshair"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center w-full px-3 sm:px-4 pt-4">
        <div className="bg-space-dark/90 backdrop-blur-md px-4 sm:px-6 py-3 shadow-lg max-w-5xl w-full border border-neon-blue/20" style={{ borderRadius: '20px 0 20px 0' }}>
          <div className="flex items-center justify-between gap-3 h-12 lg:h-14">

            {/* Logo */}
            <Link
              to="/"
              onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center cursor-crosshair flex-shrink-0"
            >
              <motion.div
                className="flex items-center gap-2 sm:gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="/images/StarNode_main_logo_Graphic_02_not_animated-1.png"
                  alt="StarNode Logo"
                  className="h-8 lg:h-10 w-auto"
                />
                <span className="text-lg sm:text-xl lg:text-2xl font-space font-bold text-gradient">
                  StarNode
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 min-w-0">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="text-sm xl:text-base text-gray-300 hover:text-neon-blue transition-colors duration-300 font-medium cursor-crosshair whitespace-nowrap"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="flex-shrink-0">
                <Suspense fallback={<WalletButtonFallback />}>
                  <WalletButton />
                </Suspense>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-gray-300 hover:text-neon-blue transition-colors flex-shrink-0"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-space-dark/95 backdrop-blur-md border-t border-neon-blue/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4 px-4 sm:px-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="text-left text-gray-300 hover:text-neon-blue transition-colors duration-300 py-2 font-medium cursor-crosshair"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="pt-2 border-t border-neon-blue/10">
                  <Suspense fallback={<WalletButtonFallback />}>
                    <WalletButton />
                  </Suspense>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar