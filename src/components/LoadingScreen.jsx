import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-space-gradient flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="w-20 h-20 border-4 border-neon-blue/30 border-t-neon-blue rounded-full mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.h2 
          className="text-2xl font-space text-neon-blue mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          StarNode
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Initializing the universe...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen