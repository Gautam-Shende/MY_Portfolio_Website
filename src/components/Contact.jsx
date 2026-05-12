import { useState, useEffect } from "react"
import { motion as Motion } from "framer-motion"

import { Github, Linkedin, Mail, MapPin, Phone, Send, LoaderCircle, Instagram } from "lucide-react";
import { profile } from "../data/portfolio"

import SectionHeader from "./SectionHeader"
// email messages
import { initEmailJS, sendContactEmail } from "../data/email.js";

import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    subject: "", 
    message: "" 
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initEmailJS();
  }, []);

  const updateForm = (e) => {
    setForm((current) => ({ 
      ...current, 
      [e.target.name]: e.target.value 
    }))
  }

  const submitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const loadingToast = toast.loading("Sending message...")

    try {
    const result = await sendContactEmail(form);

    if (result.success) {
      toast.success("Message sent Successfully....", {
         id: loadingToast,
          duration: 3000,
      })
      setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.", {
          id: loadingToast,
          duration: 4000,
        });
      }
     } catch (error){
      toast.error("Something went wrong...., Please try again.." , {
        id: loadingToast,
        duration: 4000,
      });
    } finally {
    setIsLoading(false);
   }
  };

  return (
    <section id="contact" className="px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Have an idea worth building?"
          description="Send a note for internships, collaborations, freelance work, or a focused tech conversation."
        />
        
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[1.8rem] border border-white/70 bg-white/72 p-7 shadow-xl shadow-violet-500/8 backdrop-blur dark:border-white/10 dark:bg-white/10"
          >
            <h3 className="text-2xl font-black text-slate-950 dark:text-white">
              Reach me directly
            </h3>
            
            <div className="mt-6 space-y-4">
              {[
                { 
                  icon: Mail, 
                  label: "Email", 
                  value: profile.email, 
                  href: `mailto:${profile.email}` 
                },
                { 
                  icon: Phone, 
                  label: "Phone", 
                  value: profile.phone, 
                  href: `tel:${profile.phone.replace(/\s/g, "")}` 
                },
                { 
                  icon: MapPin, 
                  label: "Location", 
                  value: profile.location 
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 rounded-2xl bg-white/70 p-4 transition hover:-translate-y-1 hover:shadow-lg dark:bg-white/10"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-black text-slate-500 dark:text-slate-400">
                      {item.label}
                    </span>
                    <span className="break-all font-bold text-slate-900 dark:text-white">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
            
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: profile.instagram, label: "Instagram" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:-translate-y-1 dark:bg-white dark:text-slate-950"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </Motion.div>

          <Motion.form
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={submitForm}
            className="rounded-[1.8rem] border border-white/70 bg-white/72 p-7 shadow-xl shadow-violet-500/8 backdrop-blur dark:border-white/10 dark:bg-white/10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-slate-700 dark:text-slate-200">
                Name
                <input 
                  required 
                  name="name" 
                  value={form.name} 
                  onChange={updateForm} 
                  className="rounded-2xl border border-violet-100 bg-white/80 px-4 py-3 font-medium outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-white/10" 
                  placeholder="Your name" 
                />
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-700 dark:text-slate-200">
                Email
                <input 
                  required 
                  type="email" 
                  name="email" 
                  value={form.email} 
                  onChange={updateForm} 
                  className="rounded-2xl border border-violet-100 bg-white/80 px-4 py-3 font-medium outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-white/10" 
                  placeholder="you@example.com" 
                />
              </label>
            </div>
            
            <label className="mt-4 grid gap-2 text-sm font-black text-slate-700 dark:text-slate-200">
              Subject
              <input 
                required 
                name="subject" 
                value={form.subject} 
                onChange={updateForm} 
                className="rounded-2xl border border-violet-100 bg-white/80 px-4 py-3 font-medium outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-white/10" 
                placeholder="Project, role, or collaboration" 
              />
            </label>
            
            <label className="mt-4 grid gap-2 text-sm font-black text-slate-700 dark:text-slate-200">
              Message
              <textarea 
                required 
                rows={6} 
                name="message" 
                value={form.message} 
                onChange={updateForm} 
                className="resize-none rounded-2xl border border-violet-100 bg-white/80 px-4 py-3 font-medium outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-white/10" 
                placeholder="Tell me what you want to build." 
              />
            </label>
            
            <button 
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-4 font-black text-white shadow-lg shadow-fuchsia-500/20 transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? (<><LoaderCircle  className="h-5 w-5 animate-spin" />Sending Message...</>)  : (<><Send className="h-5 w-5" />Send Message...</>) }
            </button>
          </Motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;