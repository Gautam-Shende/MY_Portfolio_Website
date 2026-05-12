import { motion as Motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { experiences } from "../data/portfolio"
import SectionHeader from "./SectionHeader"

const Experience = () => (
  <section id="experience" className="relative py-5 px-4 flex items-center justify-center min-h-screen overflow-hidden">
    <div className="mx-auto max-w-5xl">
      <SectionHeader
        eyebrow="Experience"
        title="Where I have shipped and taught"
        description="Internships, workshops, and backend work that helped me sharpen both engineering and communication."
      />
      <div className="relative">
        <div className="absolute bottom-0 left-5 top-0 w-1 rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-amber-400 md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-8">
          {experiences.map((item, index) => (
            <Motion.div
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative grid gap-4 pl-14 md:grid-cols-2 md:pl-0 ${index % 2 ? "md:text-left" : "md:text-right"}`}
            >
              <span className="absolute left-2 top-6 z-10 grid h-7 w-7 place-items-center rounded-full border-4 border-white bg-violet-600 md:left-1/2 md:-translate-x-1/2 dark:border-slate-950" />
              <div className={index % 2 ? "md:col-start-2" : ""}>
                <div className="rounded-[1.6rem] border border-white/70 bg-white/72 p-6 text-left shadow-xl shadow-violet-500/8 backdrop-blur dark:border-white/10 dark:bg-white/10">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white">
                      <Briefcase className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-black text-slate-950 dark:text-white">{item.role}</h3>
                      <p className="font-bold text-violet-700 dark:text-violet-300">{item.company}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm font-bold text-slate-500 dark:text-slate-300">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 dark:bg-white/10">
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 dark:bg-white/10">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">
                    {item.points.map((point) => (
                      <li key={point} className="leading-7">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Experience
