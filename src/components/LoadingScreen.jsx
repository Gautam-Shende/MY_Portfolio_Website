import { motion as Motion } from "framer-motion"
import { Send } from "lucide-react"

const LoadingScreen = () => (
  <Motion.div
    key="loader"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.45 } }}
    className="fixed inset-0 z-[100] grid place-items-center bg-gradient-to-br from-violet-100 via-fuchsia-100 to-amber-100 dark:from-slate-950 dark:via-violet-950 dark:to-fuchsia-950"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.24),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.2),transparent_24%)]" />
    <Motion.div
      initial={{ y: 18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative text-center"
    >
      <Motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="mx-auto grid h-24 w-24 place-items-center rounded-[2rem] bg-white/80 text-violet-600 shadow-2xl shadow-violet-500/20 backdrop-blur dark:bg-white/10 dark:text-violet-200"
      >
        <Send className="h-11 w-11" />
      </Motion.div>
      <h1 className="mt-8 text-2xl font-black text-slate-950 dark:text-white">Preparing portfolio</h1>
      <div className="mx-auto mt-5 h-2 w-64 overflow-hidden rounded-full bg-white/70 dark:bg-white/10">
        <Motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
        />
      </div>
    </Motion.div>
  </Motion.div>
)

export default LoadingScreen
