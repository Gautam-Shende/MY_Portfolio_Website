import { motion as Motion } from "framer-motion"

const SectionHeader = ({ eyebrow, title, description }) => (
  <Motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="mx-auto mb-14 max-w-3xl text-center"
  >
    <span className="inline-flex rounded-full border border-violet-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm backdrop-blur dark:border-violet-400/20 dark:bg-white/10 dark:text-violet-200">
      {eyebrow}
    </span>
    <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    )}
    <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400" />
  </Motion.div>
)

export default SectionHeader
