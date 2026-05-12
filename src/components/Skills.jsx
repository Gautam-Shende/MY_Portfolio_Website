import { motion as Motion } from "framer-motion"
import { Braces, Database, Globe2, Layers, Shield, Wrench } from "lucide-react"
import { skills } from "../data/portfolio"
import SectionHeader from "./SectionHeader"

const icons = [ Braces, Globe2, Layers, Database, Shield, Wrench]

const Skills = () => (
  <section id="skills" className="relative py-4 px-5 flex items-center justify-center min-h-screen overflow-hidden">

    <div className="mx-auto max-w-7xl">
      <SectionHeader
        eyebrow="Skills"
        title="The tools I use to ship ideas"
        description="A practical mix of frontend polish, backend architecture, databases, and Web3 integrations."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, index) => {
          const Icon = icons[index]
          return (
            <Motion.div
              key={category.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group rounded-[1.6rem] border border-white/70 bg-white/68 p-6 shadow-lg shadow-violet-500/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10 dark:border-white/10 dark:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-black text-slate-950 dark:text-white">{category.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-violet-100 bg-violet-50 px-3 py-2 text-sm font-bold text-violet-700 transition group-hover:border-fuchsia-600 dark:group-hover:bg-fuchsia-800 dark:group-hover:border-fuchsia-400 group-hover:bg-fuchsia-200  dark:border-white/10  dark:bg-white/10 dark:text-violet-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Motion.div>
          )
        })}
      </div>
    </div>
  </section>
)

export default Skills
