import { motion as Motion } from "framer-motion"
import { Code2, Download, GraduationCap, Server, Sparkles } from "lucide-react"
import { profile } from "../data/portfolio"
import SectionHeader from "./SectionHeader"

const cards = [
  { icon: Code2, title: "Frontend craft", copy: "Interactive React interfaces with careful spacing, motion, and responsive behavior." },
  { icon: Server, title: "Backend logic", copy: "REST APIs, authentication, data models, and reliable integrations for real products." },
  { icon: GraduationCap, title: "Always learning", copy: "Strong academic foundation with MERN Technologies and consistent hands-on building." },
]

const About = () => (
  <section id="about" className="relative flex items-center justify-center min-h-screen py-4 px-5 overflow-hidden">
    <div className="mx-auto max-w-7xl">
      <SectionHeader
        eyebrow="About me"
        title="A developer who cares about the whole experience"
        description="I like building products where the interface feels smooth, the backend is clear, and every interaction has a reason."
      />
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="rounded-[1.8rem] border border-white/70 bg-white/72 p-8 shadow-xl shadow-violet-500/10 backdrop-blur dark:border-white/10 dark:bg-white/10"
        >
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white">
            <Sparkles className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-black text-slate-950 dark:text-white">MERN Stack Development</h3>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>
              I've built responsive admin dashboards, optimized workflows, and delivered projects through agile practices.
            </p>
            <p>
              Through building projects like responsive admin dashboards, workflow optimization tools, and agile-delivered applications, I've mastered full-stack development.
            </p>
          </div>
          <a
            href={profile.resume}
            download
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-black text-white shadow-lg shadow-fuchsia-500/20 transition hover:-translate-y-1"
          >
            <Download className="h-5 w-5" />
            Download resume
          </a>
        </Motion.div>

        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {cards.map((card, index) => (
            <Motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-white/70 bg-white/62 p-6 shadow-lg shadow-violet-500/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/10"
            >
              <card.icon className="h-8 w-8 text-violet-600 dark:text-violet-300" />
              <h4 className="mt-4 text-lg font-black text-slate-950 dark:text-white">{card.title}</h4>
              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{card.copy}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default About
