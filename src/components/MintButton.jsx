import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Rocket, X } from 'lucide-react'
import { LINKS } from '../config/links'

// A button that, instead of minting, tells the user minting is coming soon
// and points them to the community. Reused anywhere a "mint" CTA appears.
const MintButton = ({ children = 'Mint Your Character', className = 'btn-primary text-lg' }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!show) return
    const t = setTimeout(() => setShow(false), 6000)
    return () => clearTimeout(t)
  }, [show])

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setShow(true)}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {show && (
              <motion.div
                className="fixed bottom-6 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-md -translate-x-1/2"
                initial={{ opacity: 0, y: 40, x: '-50%' }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
                exit={{ opacity: 0, y: 40, x: '-50%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              >
                <div className="relative flex items-start gap-3 bg-space-dark/95 backdrop-blur-md border border-neon-blue/40 rounded-xl px-5 py-4 shadow-xl shadow-black/40">
                  <div className="w-9 h-9 rounded-lg bg-neon-blue/15 border border-neon-blue/30 flex items-center justify-center flex-shrink-0">
                    <Rocket size={18} className="text-neon-blue" />
                  </div>
                  <div className="flex-1 min-w-0 pr-5">
                    <p className="text-white font-space font-bold text-sm mb-0.5">
                      Minting is coming soon
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Character minting isn&apos;t live yet. Stay updated by joining our{' '}
                      <a
                        href={LINKS.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neon-blue hover:text-blue-glow transition-colors"
                      >
                        community
                      </a>
                      .
                    </p>
                  </div>
                  <button
                    onClick={() => setShow(false)}
                    aria-label="Dismiss"
                    className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}

export default MintButton
