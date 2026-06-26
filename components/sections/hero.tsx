"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Copy, Check } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const handleCopy = () => {
    navigator.clipboard.writeText("pip install ulockai");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { y: "115%" },
    visible: {
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-0">
      {/* Top sub-header decoration (Awwwards style) */}
      <div className="absolute top-24 left-0 right-0 flex items-center justify-between pointer-events-none px-6 md:px-12 z-20 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-2 font-mono text-[10px] md:text-xs tracking-[0.18em] uppercase text-accent border border-accent/25 px-4 py-1.5 rounded-full bg-accent/5 pointer-events-auto shadow-[0_0_15px_rgba(91,91,214,0.1)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse_1.5s_ease-in-out_infinite]" />
          v1.0 · Now Available
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="hidden md:flex flex-col items-end gap-1.5 font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground/75"
        >
          <li className="border-b border-white/5 pb-0.5">Prompt Injection Shield</li>
          <li className="border-b border-white/5 pb-0.5">Memory Poisoning Guard</li>
          <li>API Firewall</li>
        </motion.ul>
      </div>

      {/* Parallax Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "1s" }} />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div style={{ y: textY, opacity }} className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-20 w-full">
          {/* Left Column: Massive Title */}
          <div className="lg:max-w-[65%] w-full">
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-heading font-extrabold text-[clamp(44px,8.5vw,110px)] leading-[0.9] tracking-tighter text-foreground text-left select-none flex flex-col gap-1 md:gap-2"
            >
              <span className="block overflow-hidden relative pb-1">
                <motion.span variants={lineVariants} className="block">
                  Secure Your
                </motion.span>
              </span>
              <span className="block overflow-hidden relative pb-1">
                <motion.span variants={lineVariants} className="block">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%] animate-[gradientShift_4s_ease_infinite]">
                    AI
                  </span>{" "}
                  Before
                </motion.span>
              </span>
              <span className="block overflow-hidden relative pb-1">
                <motion.span variants={lineVariants} className="block">
                  It Speaks.
                </motion.span>
              </span>
            </motion.h1>
          </div>

          {/* Right Column: Description + Cmd + CTA */}
          <div className="lg:max-w-[340px] w-full flex flex-col items-start gap-6 z-10">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base text-muted-foreground leading-relaxed text-left font-sans"
            >
              AI Security SDK for Agents, LLMs &amp; SLMs. Lightweight, sub-millisecond, and developer-first protection against prompt injection, memory poisoning, and API misuse.
            </motion.p>

            {/* Install box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex items-center justify-between w-full bg-secondary/35 border border-border rounded-xl px-4 py-3 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-primary font-bold">$</span>
                <span className="text-foreground">pip install ulockai</span>
              </div>
              <button
                onClick={handleCopy}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                title="Copy install command"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-3 w-full"
            >
              <MagneticButton
                variant="primary"
                size="lg"
                href="https://github.com/ulockai/ulockai"
                strength={0.3}
                className="flex-1 sm:flex-initial justify-center text-center text-sm"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                size="lg"
                href="#features"
                strength={0.2}
                className="flex-1 sm:flex-initial justify-center text-center text-sm"
              >
                View Features
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
