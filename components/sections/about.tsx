"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Users, Globe, Zap } from "lucide-react";
import { FloatingCard } from "@/components/ui/floating-card";

const stats = [
  { value: "99.9%", label: "Threat Detection Rate", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
  { value: "<2ms", label: "Response Time", icon: <Zap className="w-5 h-5 text-accent" /> },
  { value: "500+", label: "Enterprises Secured", icon: <Globe className="w-5 h-5 text-primary" /> },
  { value: "24/7", label: "Monitoring & Support", icon: <Users className="w-5 h-5 text-accent" /> },
];

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const logoY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  return (
    <section ref={ref} id="about" className="py-32 relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 mb-4">
            About ULockAI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The Team Behind<br />
            <span className="text-gradient">AI-First Security</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            ULockAI was founded to solve a critical gap: the rapid deployment of AI agents without any security guardrails. We build lightweight, developer-first tools that protect AI systems at the inference layer.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Floating logo */}
          <motion.div
            style={{ y: logoY }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl" />
            <div className="glass rounded-3xl p-10 border border-white/10 relative group hover:border-primary/30 transition-all duration-500">
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-64 h-48">
                  <Image src="/ulockai-dark-theme.png" alt="ULockAI" fill className="object-contain dark:block hidden" />
                  <Image src="/ulockai-light-theme.png" alt="ULockAI" fill className="object-contain block dark:hidden" />
                </div>
              </motion.div>
              {/* Watermark */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="relative w-8 h-8">
                  <Image src="/small-logo.png" alt="ULockAI Icon" fill className="object-contain" />
                </div>
                <span className="text-sm text-muted-foreground font-medium">Your AI&apos;s First Line of Defense</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2 space-y-6">
            {[
              {
                title: "What We Do",
                text: "We build AI security infrastructure — from Prompt Injection firewalls and Memory Poisoning shields to API misuse detectors — designed for teams deploying LLMs in production."
              },
              {
                title: "Who We Serve",
                text: "Startups, scale-ups, and enterprise teams integrating OpenAI, Anthropic, Gemini, or open-source LLMs who need real-time protection without sacrificing performance."
              },
              {
                title: "Our Philosophy",
                text: "Security should be invisible to users and effortless for developers. Sub-millisecond latency, zero-config defaults, and a developer-first SDK that works in minutes."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-5 rounded-2xl glass border border-white/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 cursor-default">
                  <div className="w-1 h-full min-h-[3rem] bg-gradient-to-b from-primary to-accent rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <FloatingCard className="p-6 text-center group cursor-default" tiltMax={12} glow>
                <div className="flex justify-center mb-3 p-2 rounded-xl bg-secondary/50 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold tracking-tight text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </FloatingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
