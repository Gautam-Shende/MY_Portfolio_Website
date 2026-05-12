import { motion as Motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Instagram,
  Code2,
  Mail,
  Rocket,
  Sparkles,
} from "lucide-react";

import { profile, stats } from "../data/portfolio";
import TypingName from "./TypingName.jsx";

const Home = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section)
      window.scrollTo({ top: section.offsetTop - 78, behavior: "smooth" });
  };


  return (
    <section
      id="home"
      className="relative flex items-center flex-col min-h-screen px-10 py-30 overflow-hidden"
    >
      <div className="absolute top-20 right-20 text-6xl animate-bounce" style={{ animationDelay: '0s' }}>✨</div>
      <div className="absolute top-30 left-20 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌟</div>
      <div className="absolute bottom-60 right-30 text-5xl animate-pulse" style={{ animationDelay: '1s' }}>💫</div>
      <div className="absolute bottom-55 left-30 text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>⭐</div>
      <div className="absolute top-1/2 left-10 text-4xl animate-pulse" style={{ animationDelay: '2s' }}>🎨</div>
      <div className="absolute top-1/3 right-10 text-3xl animate-pulse" style={{ animationDelay: '2.5s' }}>🖌️</div>
     
     {/* Gradient orbs */}
      <div className="absolute w-96 h-96 rounded-full top-20 right-10 bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl animate-pulse"></div>
      <div className="absolute rounded-full bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-64 h-64 rounded-full top-1/3 left-1/4 bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>


     <div>
       <div className="absolute inset-0 -z-10 overflow-hidden">
        <Motion.div
          animate={{ y: [0, -24, 0], x: [0, 18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-8rem] top-20 h-80 w-80 rounded-full bg-fuchsia-300/35 blur-3xl dark:bg-fuchsia-500/20"
        />
        <Motion.div
          animate={{ y: [0, 20, 0], x: [0, -16, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-[-7rem] h-72 w-72 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-400/10"
        />
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/70 bg-white/70 px-4 py-2 text-sm font-bold text-violet-700 shadow-sm backdrop-blur dark:border-violet-400/20 dark:bg-white/10 dark:text-violet-200">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            Open to internships and full-stack roles
          </span>
             <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              <div className="flex flex-col">
               <span>Hey, I am</span>
                 <span className="inline-block mt-2">
                   <TypingName />
                </span>
              </div>
             </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 lg:mx-0">
            {profile.tagline}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-4 font-black text-white shadow-xl shadow-fuchsia-500/20 transition hover:-translate-y-1 hover:shadow-fuchsia-500/30"
            >
              <Rocket className="h-5 w-5 transition group-hover:rotate-12" />
              View my work
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-1" />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-200/70 bg-white/75 px-7 py-4 font-black text-violet-700 shadow-lg transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              <Mail className="h-5 w-5" />
              Contact me
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-3 lg:justify-start">
            {[
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Instagram, href: profile.instagram, label: "Instagram" },
              { icon: Code2, href: profile.leetcode, label: "leetcode" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map((item) => (
              <a
                key={item.label}
                aria-label={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-2xl border border-white/70 bg-white/70 text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:text-violet-700 dark:border-white/10 dark:bg-white/10 dark:text-white"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </Motion.div>

        
        <Motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2.4rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 opacity-25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/70 p-4 shadow-2xl shadow-violet-500/20 backdrop-blur dark:border-white/10 dark:bg-white/10">
            <div className="absolute right-0 text-6xl animate-pulse" style={{ animationDelay: '0s' }}>🎯</div>
            <img
              src={profile.avatar}
              alt={profile.name}
              className="aspect-square w-full rounded-[1.6rem] object-cover" // Changed from aspect-[4/6] to aspect-square
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-[1.4rem] border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
              <p className="text-sm font-black text-slate-950 dark:text-white">
                {profile.role}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {profile.location}
              </p>
            </div>
          </div>
        </Motion.div>

      </div>
     </div>

      <div className=" w-full mt-5 grid grid-cols-4 gap-3 rounded-[1.4rem] border border-white/70 bg-white/70 p-3 shadow-xl backdrop-blur md:grid-cols-4 dark:border-white/10 dark:bg-white/10">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl px-4 py-3 text-center">
            <div className="text-2xl font-black text-violet-700 dark:text-violet-200">{stat.value}</div>
            <div className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
