import { useState } from "react"
import { AnimatePresence, motion as Motion } from "framer-motion"
import { ExternalLink, Github, Star, X } from "lucide-react"
import { projects } from "../data/portfolio"
import SectionHeader from "./SectionHeader"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="relative py-5 px-5 flex items-center justify-center min-h-screen overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured projects"
          title="Built with product thinking and technical depth"
          description="A selection of full-stack, real-time, and Web3 work with production-minded UI details."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/72 shadow-xl shadow-violet-500/8 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/14 dark:border-white/10 dark:bg-white/10"
            >
              <div className="relative h-60 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-65 mix-blend-multiply`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-2 text-xs font-black text-slate-900 shadow-lg backdrop-blur">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span key={tech} className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-black text-violet-700 dark:bg-white/10 dark:text-violet-100">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} code`} className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white transition hover:-translate-y-1 dark:bg-white dark:text-slate-950">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} demo`} className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-violet-700 shadow-sm transition hover:-translate-y-1 dark:bg-white/10 dark:text-white">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-fuchsia-500/20 transition hover:-translate-y-1"
                  >
                    View details
                  </button>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/70 p-4 backdrop-blur"
            onClick={() => setSelectedProject(null)}
          >
            <Motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[1.8rem] bg-white shadow-2xl dark:bg-slate-950"
            >
              <div className="relative h-72">
                <img src={selectedProject.image} alt={selectedProject.title} className="h-full w-full rounded-t-[1.8rem] object-cover" />
                <button onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-slate-950/75 text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-7">
                <p className="text-sm font-black uppercase tracking-wide text-violet-600 dark:text-violet-300">{selectedProject.category}</p>
                <h3 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">{selectedProject.title}</h3>
                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{selectedProject.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {selectedProject.highlights.map((item) => (
                    <div key={item} className="rounded-2xl bg-violet-50 p-4 text-sm font-bold text-violet-800 dark:bg-white/10 dark:text-violet-100">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-black text-white dark:bg-white dark:text-slate-950">
                    <Github className="h-5 w-5" />
                    Code
                  </a>
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 font-black text-white">
                    <ExternalLink className="h-5 w-5" />
                    Live demo
                  </a>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
