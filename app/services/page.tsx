"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ShieldAlert, Code2, Layout, Briefcase,
  Bot, Cloud, GitBranch, ScanSearch, BrainCircuit,
  FileText, Globe, Palette, ArrowRight, Check, Megaphone, Link2
} from "lucide-react";

const serviceCategories = [
  {
    id: "ai-security",
    category: "AI Security",
    badge: "Core Expertise",
    icon: <ShieldAlert className="w-7 h-7" />,
    color: "from-blue-600 to-blue-400",
    description: "Protect your AI agents, LLMs, and SLMs from real-world attacks before they happen.",
    services: [
      { icon: <ScanSearch className="w-5 h-5 text-primary" />, name: "Prompt Injection Protection", desc: "Intercept and neutralize malicious prompts in real time at sub-millisecond speed." },
      { icon: <BrainCircuit className="w-5 h-5 text-primary" />, name: "Memory Poisoning Shield", desc: "Keep long-term memory clean from adversarial data designed to corrupt future responses." },
      { icon: <ShieldAlert className="w-5 h-5 text-primary" />, name: "AI Agent Security", desc: "End-to-end guardrails for autonomous AI agents operating in production environments." },
      { icon: <GitBranch className="w-5 h-5 text-primary" />, name: "API Misuse Prevention", desc: "Stop AI agents from abusing external tools, APIs, or executing unauthorized actions." },
    ],
  },
  {
    id: "ai-development",
    category: "AI Development",
    badge: "Custom Solutions",
    icon: <Bot className="w-7 h-7" />,
    color: "from-purple-600 to-purple-400",
    description: "End-to-end custom AI development — from strategy to production-ready deployment.",
    services: [
      { icon: <BrainCircuit className="w-5 h-5 text-accent" />, name: "Custom AI Development", desc: "Tailor-made LLM pipelines, AI agents, and RAG architectures for your specific use case." },
      { icon: <Bot className="w-5 h-5 text-accent" />, name: "Intelligent Automation", desc: "Automate complex workflows using AI-powered agents and decision trees." },
      { icon: <Code2 className="w-5 h-5 text-accent" />, name: "AI Consulting", desc: "Strategic advisory on AI stack selection, security posture, and integration architecture." },
      { icon: <Cloud className="w-5 h-5 text-accent" />, name: "Cloud Deployment", desc: "Scalable, secure cloud deployment for your AI models on AWS, GCP, or Azure." },
    ],
  },
  {
    id: "web-development",
    category: "Web Development",
    badge: "Full Stack",
    icon: <Layout className="w-7 h-7" />,
    color: "from-indigo-600 to-indigo-400",
    description: "Modern, performant, and beautiful web applications built for scale.",
    services: [
      { icon: <Globe className="w-5 h-5 text-indigo-400" />, name: "Responsive Website Design", desc: "Mobile-first, accessible websites that look stunning on every device." },
      { icon: <Code2 className="w-5 h-5 text-indigo-400" />, name: "Full Stack Development", desc: "React, Next.js, Node.js — end-to-end development with clean, maintainable code." },
      { icon: <GitBranch className="w-5 h-5 text-indigo-400" />, name: "API Development", desc: "RESTful and GraphQL APIs designed for performance, security, and developer experience." },
      { icon: <Palette className="w-5 h-5 text-indigo-400" />, name: "UI/UX Design", desc: "Award-worthy interfaces using modern design systems and interaction patterns." },
    ],
  },
  {
    id: "career-branding",
    category: "Career Branding",
    badge: "Professional Growth",
    icon: <Megaphone className="w-7 h-7" />,
    color: "from-cyan-600 to-cyan-400",
    description: "Position yourself as a top-tier tech professional. ATS-optimized, recruiter-ready.",
    services: [
      { icon: <Link2 className="w-5 h-5 text-cyan-400" />, name: "LinkedIn Profile Optimization", desc: "Rewrite your profile to rank higher in recruiter searches and attract top companies." },
      { icon: <FileText className="w-5 h-5 text-cyan-400" />, name: "Resume Building", desc: "ATS-friendly, keyword-optimized resumes that get through screening in seconds." },
      { icon: <Globe className="w-5 h-5 text-cyan-400" />, name: "Portfolio Website Creation", desc: "A personal portfolio that showcases your projects with a premium design." },
      { icon: <Briefcase className="w-5 h-5 text-cyan-400" />, name: "Career Branding Strategy", desc: "Full personal brand strategy — from GitHub to LinkedIn to online presence." },
    ],
  },
];

function ServiceCard({ icon, name, desc }: { icon: React.ReactNode; name: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={hovered ? { y: -6, scale: 1.02 } : { y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex items-start gap-4 p-5 rounded-2xl bg-background/50 border border-white/5 hover:border-primary/20 cursor-default relative overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex-shrink-0 p-2 rounded-xl bg-secondary/70 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{name}</h4>
          <motion.div animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }} className="text-primary">
            <Check className="w-3.5 h-3.5" />
          </motion.div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function CategorySection({ cat, catIdx }: { cat: typeof serviceCategories[0]; catIdx: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isOdd = catIdx % 2 === 1;

  return (
    <section
      ref={ref}
      id={cat.id}
      className={`py-24 relative overflow-hidden ${isOdd ? "bg-secondary/10" : ""}`}
    >
      {!isOdd && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      )}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className={`lg:col-span-2 ${isOdd ? "lg:order-2" : ""}`}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 mb-4">
              {cat.badge}
            </span>
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${cat.color} text-white mb-6 shadow-lg`}>
              {cat.icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{cat.category}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{cat.description}</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Service Cards */}
          <div className={`lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 ${isOdd ? "lg:order-1" : ""}`}>
            {cat.services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <ServiceCard icon={svc.icon} name={svc.name} desc={svc.desc} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(37,99,235,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.8) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="container mx-auto px-6 relative z-10 text-center pt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 mb-6"
          >
            All Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight"
          >
            Everything You Need to<br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Build &amp; Protect
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            From AI Security to Career Branding — enterprise-grade services across every layer of your digital presence.
          </motion.p>
        </motion.div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((cat, catIdx) => (
        <CategorySection key={cat.id} cat={cat} catIdx={catIdx} />
      ))}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation. We&apos;ll assess your stack and recommend the right plan.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 hover:-translate-y-1 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
          >
            Book Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
