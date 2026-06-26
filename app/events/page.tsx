"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Loader2, Users } from "lucide-react";
import { FloatingCard } from "@/components/ui/floating-card";

const ongoingEvents = [
  {
    title: "Smartathon",
    status: "Ongoing",
    role: "Community Partner",
    date: "June 2026",
    location: "National Level Hackathon",
    desc: "ULockAI is proud to be the official Community Partner for Smartathon, empowering students, builders, and developers to design and deploy secure, trustworthy AI applications.",
    image: "/smartathon-cp.jpg",
    stats: "500+ Innovators",
  },
];

const upcomingEvents = [
  {
    title: "Antigravity Workshop",
    status: "Upcoming",
    role: "New Event Loading",
    date: "July 2026",
    location: "Online Masterclass",
    desc: "A hands-on, high-fidelity deep dive into Next.js 15, agentic coding with Antigravity, and building resilient security layers for LLMs. Stay tuned, registration opens soon!",
    stats: "Limited Seats",
  },
];

const pastEvents = [
  {
    title: "AI Agents Workshop",
    status: "Completed",
    role: "Technical Workshop",
    date: "May 2026",
    location: "Live Interactive Session",
    desc: "Learned how to construct, secure, and deploy agentic AI workflows. Developers walked away with practical guardrail experience and ULockAI Python SDK certificates.",
    image: "/workshop.png",
    stats: "200+ Developers",
  },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-6 py-32 min-h-screen max-w-6xl relative">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 mb-4"
        >
          ULockAI Hackathons & Workshops
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading mb-6"
        >
          Community &{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%] animate-[gradientShift_4s_ease_infinite]">
            Technical Events
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Learn, build, and deploy. Follow our active hackathons, upcoming advanced workshops, and review previous educational sessions.
        </motion.p>
      </div>

      {/* ----------------- ONGOING EVENTS ----------------- */}
      <div className="mb-20 relative z-10">
        <h2 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          Ongoing Events
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {ongoingEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
                {/* Image */}
                <div className="lg:col-span-6 relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/5">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase tracking-widest backdrop-blur-md">
                    {event.status}
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-6 flex flex-col justify-between py-2 text-left">
                  <div>
                    <span className="text-xs font-mono tracking-wider text-accent uppercase block mb-1">
                      {event.role}
                    </span>
                    <h3 className="text-3xl font-extrabold mb-4">{event.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {event.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-border/20 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary shrink-0" />
                      <span>{event.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ----------------- UPCOMING & PAST GRID ----------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        {/* Upcoming (Teaser) */}
        <div>
          <h2 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
            <Loader2 className="w-5 h-5 text-accent animate-spin" />
            Upcoming Events
          </h2>
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <FloatingCard className="h-full p-8 flex flex-col justify-between border border-dashed border-accent/20 hover:border-accent/40 bg-accent/[0.02]" tiltMax={6} glow>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono tracking-wider text-accent uppercase">
                      {event.role}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/20 text-accent font-mono text-[9px] uppercase tracking-widest animate-pulse">
                      Loading
                    </span>
                  </div>

                  <h3 className="text-3xl font-extrabold mb-4">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {event.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-border/20 text-xs text-muted-foreground flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-accent/10 text-accent px-2.5 py-1 rounded-md">
                    {event.stats}
                  </span>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
            <Users className="w-5 h-5 text-muted-foreground" />
            Previous Events
          </h2>
          {pastEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FloatingCard className="p-6 flex flex-col border border-white/5 hover:border-primary/25 bg-secondary/5" tiltMax={6} glow>
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-white/5">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-muted-foreground font-mono text-[9px] uppercase tracking-widest backdrop-blur-md">
                    {event.status}
                  </div>
                </div>

                <div className="text-left">
                  <span className="text-[10px] font-mono tracking-wider text-accent uppercase block mb-1">
                    {event.role}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                    {event.desc}
                  </p>

                  <div className="pt-5 border-t border-border/20 flex items-center justify-between text-[11px] text-muted-foreground">
                    <div className="flex gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-primary" /> {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-primary" /> {event.stats}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono bg-primary/10 text-primary px-2.5 py-0.5 rounded-md">
                      Archive
                    </span>
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
