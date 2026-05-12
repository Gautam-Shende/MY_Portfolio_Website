import { Code2, Github, Linkedin, Mail, Instagram } from "lucide-react"
import { navItems, profile } from "../data/portfolio"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="px-4 pb-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-violet-950 to-fuchsia-950 p-8 text-white shadow-2xl shadow-violet-500/20 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-black">AK</span>
              <div>
                <h3 className="text-xl font-black">{profile.name}</h3>
                <p className="text-sm font-semibold text-violet-200">{profile.role}</p>
              </div>
            </div>
            <p className="mt-5 max-w-xl leading-8 text-violet-100">
              Building polished full-stack experiences with React, Node.js, Tailwind CSS, and modern product thinking.
            </p>
          </div>
          <div>
            <h4 className="font-black text-violet-100">Navigate</h4>
            <div className="mt-4 grid gap-2">
              {navItems.slice(0, 6).map((item) => (
                <a key={item.id} href={`#${item.id}`} className="text-violet-200 transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-black text-violet-100">Connect</h4>
            <div className="mt-4 flex gap-3">
              {[
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: profile.instagram, label: "Instagram" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map((item) => (
                <a key={item.label} aria-label={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-violet-100 transition hover:-translate-y-1 hover:bg-white/20 hover:text-white">
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm font-semibold text-violet-200 md:flex-row md:items-center md:justify-between">
          <p>Copyright {year} {profile.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <Code2 className="h-4 w-4" />
            Built with React, Vite, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
