import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import LoadingScreen from "./components/LoadingScreen"
import { navItems } from "./data/portfolio"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1600)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const current = navItems.find(({ id }) => {
        const section = document.getElementById(id)
        if (!section) return false
        const top = section.offsetTop - 120
        return window.scrollY >= top && window.scrollY < top + section.offsetHeight
      })

      if (current) setActiveSection(current.id)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" />
      ) : (
        <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#f5d0fe,transparent_34%),linear-gradient(135deg,#fff7ed_0%,#fdf2f8_36%,#eef2ff_100%)] text-slate-900 transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.28),transparent_34%),linear-gradient(135deg,#020617_0%,#1e1b4b_48%,#312e81_100%)] dark:text-white">
          <Navbar activeSection={activeSection} />
          <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </AnimatePresence>
  )
}

export default App
