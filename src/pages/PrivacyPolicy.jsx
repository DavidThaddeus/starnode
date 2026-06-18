import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { LINKS } from '../config/links'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-36 pb-24 px-8 sm:px-8 lg:px-8">
      <div className="container-custom max-w-3xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors duration-200 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-space font-bold text-white mb-3">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: June 2026</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p>
              StarNode is a sci-fi trading card game project on Solana. We keep
              things simple and collect as little data as possible. This page
              explains what we do and don&apos;t collect.
            </p>

            <section>
              <h2 className="text-xl font-space font-bold text-white mb-2">Information We Collect</h2>
              <p>
                If you subscribe to updates, we store the email address you provide
                so we can send you news about the project. We do not sell or rent your
                email to anyone. You can ask us to remove it at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-space font-bold text-white mb-2">Wallet Connections</h2>
              <p>
                When you connect a Solana wallet (such as Phantom), the site reads your
                public wallet address and balance directly from the blockchain to show
                them in the interface. We never have access to your private keys or seed
                phrase, and we cannot move your funds. Nothing about your wallet is sent
                to or stored on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-space font-bold text-white mb-2">Cookies &amp; Analytics</h2>
              <p>
                This site does not use tracking cookies or third-party advertising. Your
                browser may store a record of a trusted wallet connection locally so it
                can reconnect, but that data stays on your device.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-space font-bold text-white mb-2">Third-Party Links</h2>
              <p>
                We link out to services like Discord, X, Telegram, and our GitBook
                whitepaper. Those services have their own privacy policies, and we are
                not responsible for how they handle your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-space font-bold text-white mb-2">Contact</h2>
              <p>
                Questions about this policy? Reach out at{' '}
                <a
                  href={`mailto:${LINKS.email}`}
                  className="text-neon-blue hover:text-blue-glow transition-colors duration-200"
                >
                  {LINKS.email}
                </a>
                .
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
