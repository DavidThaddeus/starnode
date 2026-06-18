import React, { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import GameMechanics from './components/GameMechanics'
import About from './components/About'
import Community from './components/Community'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

// Heavy / route-level chunks are loaded on demand to keep the initial bundle small.
const StarField = lazy(() => import('./components/3D/StarField'))
const GettingStarted = lazy(() => import('./pages/GettingStarted'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

// Shared layout — Navbar, StarField background, Footer
const Layout = ({ children }) => (
  <div className="relative min-h-screen bg-space-gradient">
    <div className="fixed inset-0 z-0">
      <Suspense fallback={null}>
        <StarField />
      </Suspense>
    </div>
    <div className="relative z-10">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
)

// Home page sections
const HomePage = () => (
  <>
    <Hero />
    <div className="bg-black">
      <Features />
      <GameMechanics />
      <About />
      <Community />
    </div>
  </>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <LoadingScreen />

  return (
    <Router>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
