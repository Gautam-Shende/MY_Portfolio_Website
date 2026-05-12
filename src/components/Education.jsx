import { motion as Motion } from "framer-motion"
import { Award, GraduationCap } from "lucide-react"
import { education } from "../data/portfolio"
import SectionHeader from "./SectionHeader"

const Education = () => (
  <section id="education" className="relative py-5 px-4 flex items-center justify-center min-h-screen overflow-hidden">
    <div className="mx-auto max-w-6xl">
      <SectionHeader
        eyebrow="Education"
        title="Academic foundation"
        description="A steady path through computer science, leadership, and hands-on technical growth."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, index) => (
          <Motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="rounded-[1.6rem] border border-white/70 bg-white/72 p-7 shadow-xl shadow-violet-500/8 backdrop-blur dark:border-white/10 dark:bg-white/10"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-fuchsia-500 text-white">
              {index === 0 ? <GraduationCap className="h-6 w-6" /> : <Award className="h-6 w-6" />}
            </span>
            <h3 className="mt-5 text-2xl font-black text-slate-950 dark:text-white">{item.degree}</h3>
            <p className="mt-2 font-bold text-violet-700 dark:text-violet-300">{item.school}</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.period}</p>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">{item.detail}</p>
          </Motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Education
