import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  Wallet,
  Coins,
  Layers,
  Swords,
  ArrowLeft,
  ExternalLink,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { LINKS } from "../config/links";
import MintButton from "../components/MintButton";
import { DiscordIcon, XIcon } from "../components/icons/BrandIcons";

// ─── Step data ────────────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    icon: Wallet,
    title: "Set Up a Solana Wallet",
    description:
      "Download a Solana-compatible wallet such as Phantom or Solflare. Create a new wallet and securely store your seed phrase — this is your key to the StarNode universe.",
    action: { label: "Get Phantom Wallet", href: "https://phantom.app" },
    tip: "Never share your seed phrase with anyone.",
  },
  {
    number: "02",
    icon: Coins,
    title: "Fund Your Wallet with SOL",
    description:
      "Purchase SOL from any major exchange (Coinbase, Binance, Kraken) and transfer it to your wallet. SOL is used to mint and trade StarNode characters on the blockchain.",
    action: { label: "Buy SOL on Coinbase", href: "https://coinbase.com" },
    tip: "Keep a small amount of SOL reserved for transaction fees.",
  },
  {
    number: "03",
    icon: Layers,
    title: "Browse & Collect Characters",
    description:
      "Explore the StarNode collection and find your first character. Each card features unique stats, abilities, and rarity traits — fully generated and stored on-chain.",
    action: { label: "Read the Whitepaper", href: LINKS.whitepaper },
    tip: "Check rarity tiers and attribute weights before minting.",
  },
  {
    number: "04",
    icon: Swords,
    title: "Enter the Game",
    description:
      "With your characters collected, build your deck and enter the arena. Use your character's stats, equipment, and special abilities to outmaneuver opponents across the StarNode universe.",
    action: { label: "Read the Game Guide", href: LINKS.whitepaper },
    tip: "Study attribute synergies to gain a competitive edge.",
  },
];

// ─── Resource cards ───────────────────────────────────────────────────────────
const resources = [
  {
    icon: BookOpen,
    title: "Whitepaper",
    description: "Deep-dive into StarNode's tokenomics, gameplay systems, and roadmap.",
    href: LINKS.whitepaper,
  },
  {
    icon: DiscordIcon,
    title: "Discord",
    description: "Join the conversation and get real-time updates from the team.",
    href: LINKS.discord,
  },
  {
    icon: XIcon,
    title: "Community on X",
    description: "Follow StarNode for announcements and community highlights.",
    href: LINKS.twitter,
  },
];

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

// ─── Component ────────────────────────────────────────────────────────────────
const GettingStarted = () => {
  return (
    <div className="min-h-screen">
      {/* ── Page Hero ──────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-8 sm:px-8 lg:px-8 overflow-hidden">
        {/* Glow */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-blue/10 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-custom relative z-10">
          {/* Back link */}
          <motion.div {...fadeUp(0)} className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors duration-200 text-sm font-medium"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </motion.div>

          {/* Heading */}
          <motion.div {...fadeUp(0.1)} className="max-w-3xl">
            <span className="inline-block text-xs font-space font-bold tracking-widest text-neon-blue uppercase mb-4 border border-neon-blue/30 px-3 py-1 rounded-full">
              Beginners Guide
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-space font-bold text-white leading-tight mb-6">
              Getting{" "}
              <span className="text-gradient">Started</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
              Everything you need to jump into the StarNode universe — from setting
              up your wallet to minting your first character and entering the arena.
            </p>
          </motion.div>

          {/* Quick step pills */}
          <motion.div
            {...fadeUp(0.25)}
            className="flex flex-wrap gap-3 mt-10"
          >
            {steps.map((s) => (
              <div
                key={s.number}
                className="flex items-center gap-2 bg-space-dark/60 border border-neon-blue/20 rounded-full px-4 py-1.5 text-sm text-gray-300"
              >
                <span className="text-neon-blue font-space font-bold text-xs">{s.number}</span>
                {s.title}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Steps ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-8 sm:px-8 lg:px-8">
        <div className="container-custom">
          <div className="space-y-10 max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  {...fadeUp(index * 0.1)}
                  className="relative flex flex-col sm:flex-row gap-5 sm:gap-6 bg-space-dark/50 backdrop-blur-sm border border-neon-blue/15 rounded-2xl p-5 sm:p-7 group hover:border-neon-blue/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Top hover accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Number + Icon column */}
                  <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 flex-shrink-0 sm:w-20">
                    <span className="text-5xl font-space font-bold text-neon-blue/15 leading-none select-none">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-blue-glow/10 border border-neon-blue/25 flex items-center justify-center group-hover:border-neon-blue/50 group-hover:bg-neon-blue/20 transition-all duration-300">
                      <Icon size={22} className="text-neon-blue" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-space font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Tip */}
                    <div className="flex items-start gap-2 bg-neon-blue/5 border border-neon-blue/15 rounded-lg px-4 py-2.5 mb-5 text-sm text-gray-300">
                      <span className="text-neon-blue font-bold flex-shrink-0">Tip:</span>
                      <span>{step.tip}</span>
                    </div>

                    {/* Action link */}
                    <a
                      href={step.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-neon-blue hover:text-white transition-colors duration-200 font-medium text-sm group/link"
                    >
                      {step.action.label}
                      <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Character Preview ────────────────────────────────────────── */}
      <section className="py-20 px-8 sm:px-8 lg:px-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Text */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-block text-xs font-space font-bold tracking-widest text-neon-blue uppercase mb-4 border border-neon-blue/30 px-3 py-1 rounded-full">
                First Launch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space font-bold text-white mb-5 leading-tight">
                Meet <span className="text-gradient">Humarai v1</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                StarNode's first character class — the Humarai. A species built for
                speed and adaptability, equipped with unique racial abilities and
                fully on-chain stats. Every Humarai is distinct, with gear and
                attributes generated at mint.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={LINKS.whitepaper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary gap-2 w-full sm:w-auto"
                >
                  View Character Details
                  <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              {...fadeUp(0.15)}
              className="relative flex items-center justify-center"
            >
              <motion.div
                className="absolute w-64 h-64 bg-neon-blue/15 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src="/images/render-gif-1.webp"
                  alt="Humarai v1 Character"
                  loading="lazy"
                  decoding="async"
                  className="max-h-80 w-auto object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Resources ────────────────────────────────────────────────── */}
      <section className="py-20 px-8 sm:px-8 lg:px-8">
        <div className="container-custom">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-space font-bold text-white mb-3">
              Explore More Resources
            </h2>
            <p className="text-gray-400">Everything you need to go deeper into StarNode.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {resources.map((res, index) => {
              const Icon = res.icon;
              return (
                <motion.a
                  key={res.title}
                  href={res.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeUp(index * 0.1)}
                  className="group bg-space-dark/50 backdrop-blur-sm border border-neon-blue/15 rounded-2xl p-6 hover:border-neon-blue/40 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center group-hover:bg-neon-blue/20 group-hover:border-neon-blue/50 transition-all duration-300">
                    <Icon size={28} className="text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-space font-bold text-white mb-1 group-hover:text-gradient transition-all duration-300">
                      {res.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{res.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-neon-blue text-sm font-medium mt-auto">
                    Learn more <ChevronRight size={14} />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="py-20 px-8 sm:px-8 lg:px-8">
        <div className="container-custom">
          <motion.div
            {...fadeUp(0)}
            className="card-3d max-w-4xl mx-auto p-6 sm:p-10 lg:p-14 text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-space font-bold text-gradient mb-4">
              Ready to Conquer the Stars?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Your wallet is set up, your character is waiting. Join thousands of
              players already building their decks on-chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MintButton className="btn-primary text-lg w-full sm:w-auto">
                Mint Your First Character
              </MintButton>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="btn-secondary text-lg w-full sm:w-auto"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GettingStarted;
