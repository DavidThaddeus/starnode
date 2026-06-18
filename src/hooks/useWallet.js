import { useState, useEffect, useCallback } from 'react'
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js'

const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed')

const getProvider = () => {
  if ('phantom' in window) {
    const provider = window.phantom?.solana
    if (provider?.isPhantom) return provider
  }
  if ('solana' in window && window.solana?.isPhantom) {
    return window.solana
  }
  return null
}

export const useWallet = () => {
  const [provider, setProvider] = useState(null)
  const [publicKey, setPublicKey] = useState(null)
  const [balance, setBalance] = useState(null)
  const [connecting, setConnecting] = useState(false)
  const [error, setError] = useState(null)

  const fetchBalance = useCallback(async (pubkey) => {
    try {
      const raw = await connection.getBalance(new PublicKey(pubkey))
      setBalance((raw / LAMPORTS_PER_SOL).toFixed(4))
    } catch (err) {
      console.error('fetchBalance failed:', err)
      setBalance('—')
    }
  }, [])

  // Detect Phantom extension injection (may happen after React mounts)
  useEffect(() => {
    const checkAndSet = () => {
      const p = getProvider()
      if (p) setProvider(p)
    }

    checkAndSet()
    window.addEventListener('phantom#initialized', checkAndSet)
    window.addEventListener('solana#initialized', checkAndSet)

    return () => {
      window.removeEventListener('phantom#initialized', checkAndSet)
      window.removeEventListener('solana#initialized', checkAndSet)
    }
  }, [])

  // Auto-connect if user previously connected
  useEffect(() => {
    if (!provider) return
    const tryEager = async () => {
      try {
        const resp = await provider.connect({ onlyIfTrusted: true })
        const key = resp.publicKey.toString()
        setPublicKey(key)
        fetchBalance(key)
      } catch {
        // not previously trusted — silent fail
      }
    }
    tryEager()
  }, [provider, fetchBalance])

  // Listen for account changes / disconnects from Phantom side
  useEffect(() => {
    if (!provider) return

    const onAccountChanged = (key) => {
      if (key) {
        const str = key.toString()
        setPublicKey(str)
        fetchBalance(str)
      } else {
        setPublicKey(null)
        setBalance(null)
      }
    }

    const onDisconnect = () => {
      setPublicKey(null)
      setBalance(null)
    }

    provider.on('accountChanged', onAccountChanged)
    provider.on('disconnect', onDisconnect)
    return () => {
      provider.off('accountChanged', onAccountChanged)
      provider.off('disconnect', onDisconnect)
    }
  }, [provider, fetchBalance])

  const connect = useCallback(async () => {
    if (!provider) {
      window.open('https://phantom.app', '_blank')
      return
    }
    setConnecting(true)
    setError(null)
    try {
      const resp = await provider.connect()
      const key = resp.publicKey.toString()
      setPublicKey(key)
      await fetchBalance(key)
    } catch (err) {
      setError(err.message || 'Connection rejected')
    } finally {
      setConnecting(false)
    }
  }, [provider, fetchBalance])

  const disconnect = useCallback(async () => {
    if (provider) {
      try { await provider.disconnect() } catch {}
    }
    setPublicKey(null)
    setBalance(null)
  }, [provider])

  const shortAddress = publicKey
    ? `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`
    : null

  return {
    publicKey,
    shortAddress,
    balance,
    connecting,
    error,
    connected: Boolean(publicKey),
    isPhantomInstalled: Boolean(provider),
    connect,
    disconnect,
  }
}
