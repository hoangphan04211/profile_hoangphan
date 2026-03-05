import React from 'react'
import Layout from './components/layout/Layout'
import ParticlesBackground from './components/ui/ParticlesBackground'
import Terminal from './components/widgets/Terminal'
import AIChat from './components/widgets/AIChat'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import GitHubActivity from './components/sections/GitHubActivity'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <ParticlesBackground />
      {/* Global CRT overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"></div>

      <Layout>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <GitHubActivity />
        <Contact />
      </Layout>

      <Terminal />
      <AIChat />
    </>
  )
}

export default App
