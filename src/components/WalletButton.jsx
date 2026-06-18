import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wallet, ChevronDown, Copy, LogOut, ExternalLink, Loader2 } from 'lucide-react'
import { useWallet } from '../hooks/useWallet'

const WalletButton = () => {
  const { publicKey, shortAddress, balance, connecting, connected, isPhantomInstalled, connect, disconnect } = useWallet()
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const copyAddress = () => {
    if (!publicKey) return
    navigator.clipboard.writeText(publicKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // ── Not connected ────────────────────────────────────────────────────────
  if (!connected) {
    return (
      <motion.button
        onClick={connect}
        disabled={connecting}
        className="flex items-center gap-2 px-4 py-2 border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue/70 transition-all duration-200 font-medium text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ borderRadius: '12px 0 12px 0' }}
        whileHover={connecting ? {} : { scale: 1.03 }}
        whileTap={connecting ? {} : { scale: 0.97 }}
      >
        {connecting ? (
          <Loader2 size={15} className="animate-spin" />
        ) : (
          <Wallet size={15} />
        )}
        {connecting ? 'Connecting...' : isPhantomInstalled ? 'Connect Wallet' : 'Install Phantom'}
      </motion.button>
    )
  }

  // ── Connected ────────────────────────────────────────────────────────────
  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2.5 px-4 py-2 bg-neon-blue/10 border border-neon-blue/40 hover:border-neon-blue/70 transition-all duration-200 text-sm"
        style={{ borderRadius: '12px 0 12px 0' }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Phantom ghost dot */}
        <span className="w-2 h-2 rounded-full bg-green-400 shadow-sm shadow-green-400/60" />
        <span className="font-space font-bold text-neon-blue text-xs">
          {shortAddress}
        </span>
        <>
          <span className="w-px h-3.5 bg-neon-blue/20" />
          <span className="text-white font-medium">
            {balance ?? <span className="text-gray-500">…</span>}{' '}
            <span className="text-neon-blue/70 text-xs">SOL</span>
          </span>
        </>
        <ChevronDown
          size={13}
          className={`text-neon-blue/60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 mt-2 w-64 bg-space-dark/95 backdrop-blur-md border border-neon-blue/20 rounded-xl shadow-xl shadow-black/40 overflow-hidden z-50"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-neon-blue/10 bg-neon-blue/5">
              <p className="text-xs text-gray-400 mb-0.5">Connected wallet</p>
              <p className="text-sm font-space font-bold text-white">{shortAddress}</p>
            </div>

            {/* Balance */}
            <div className="px-4 py-3 border-b border-neon-blue/10">
              <p className="text-xs text-gray-400 mb-1">SOL Balance</p>
              <p className="text-2xl font-space font-bold text-white">
                {balance !== null ? (
                  <>
                    {balance}{' '}
                    <span className="text-neon-blue text-lg">SOL</span>
                  </>
                ) : (
                  <span className="text-gray-500 text-sm">Loading...</span>
                )}
              </p>
            </div>

            {/* Actions */}
            <div className="p-2">
              <button
                onClick={copyAddress}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-neon-blue/10 hover:text-white transition-colors duration-150"
              >
                <Copy size={15} className="text-neon-blue/70" />
                {copied ? 'Copied!' : 'Copy Address'}
              </button>
              <a
                href={`https://solscan.io/account/${publicKey}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-neon-blue/10 hover:text-white transition-colors duration-150"
                onClick={() => setOpen(false)}
              >
                <ExternalLink size={15} className="text-neon-blue/70" />
                View on Solscan
              </a>
              <button
                onClick={() => { disconnect(); setOpen(false) }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors duration-150"
              >
                <LogOut size={15} />
                Disconnect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default WalletButton
