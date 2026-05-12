
import { useEffect, useState } from "react"
import { AnimatePresence, motion as Motion } from "framer-motion"
import { Menu, Moon, Sun, X } from "lucide-react"
import { navItems, profile } from "../data/portfolio"
import { useTheme } from "./ThemeProvider"

const scrollToSection = (id) => {
  const section = document.getElementById(id)
  if (section) window.scrollTo({ top: section.offsetTop - 78, behavior: "smooth" })
}

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (id) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-[1.4rem] border px-4 transition-all duration-300 md:px-6 ${
          isScrolled
            ? "border-white/70 bg-white/82 shadow-xl shadow-violet-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/72"
            : "border-transparent bg-transparent"
        }`}
      >
        <button onClick={() => handleNav("home")} className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 text-2xl font-black text-white shadow-lg shadow-fuchsia-500/20">
            GS
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-black leading-none text-slate-950 dark:text-white">{profile.name}</span>
            <span className="text-xs font-semibold text-violet-600 dark:text-violet-300">{profile.role}</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20"
                  : "text-slate-600 hover:bg-white/70 hover:text-violet-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-violet-200/60 bg-white/70 text-slate-700 transition hover:-translate-y-0.5 hover:text-violet-700 dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-violet-200/60 bg-white/70 text-slate-700 lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-[1.4rem] border border-white/70 bg-white/92 p-3 shadow-xl backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-slate-950/92"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-bold ${
                  activeSection === item.id ? "bg-violet-600 text-white" : "text-slate-700 dark:text-slate-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
