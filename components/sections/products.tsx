"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Terminal, ShieldAlert, ScanSearch, Package, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const products = [
  {
    icon: <ShieldAlert className="w-6 h-6" />,
    name: "ULockAI Shield",
    tagline: "AI Firewall",
    description: "Real-time guardrails that intercept malicious prompts before they reach your LLM. Zero-latency, production-ready.",
    color: "from-blue-600 to-blue-400",
    href: "/products/ai-shield",
  },
  {
    icon: <ScanSearch className="w-6 h-6" />,
    name: "Prompt Scanner",
    tagline: "Injection Detector",
    description: "Scan every input for injection patterns, jailbreaks, and adversarial payloads with 99.9% detection accuracy.",
    color: "from-purple-600 to-purple-400",
    href: "/products/ai-shield",
  },
  {
    icon: <Package className="w-6 h-6" />,
    name: "Secure SDK",
    tagline: "Developer Toolkit",
    description: "Drop-in Python & Node SDK. Integrate security into any LLM pipeline in under 5 minutes.",
    color: "from-indigo-600 to-indigo-400",
    href: "/products/secure-sdk",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    name: "Security APIs",
    tagline: "Enterprise APIs",
    description: "REST APIs for memory poisoning detection, API misuse monitoring, and real-time threat telemetry.",
    color: "from-cyan-600 to-cyan-400",
    href: "/products/apis",
  },
];

const terminalLines = [
  { text: "$ pip install ulockai", delay: 0, color: "text-green-400" },
  { text: "Installing ULockAI Shield v1.0.0...", delay: 1.2, color: "text-muted-foreground" },
  { text: "✓ Prompt Scanner loaded", delay: 2.0, color: "text-emerald-400" },
  { text: "✓ Memory shield active", delay: 2.6, color: "text-emerald-400" },
  { text: "✓ API guardian online", delay: 3.2, color: "text-emerald-400" },
  { text: "🔒 ULockAI is protecting your AI.", delay: 3.9, color: "text-primary font-semibold" },
];

function AnimatedTerminal() {
  const [visible, setVisible] = useState<number[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    terminalLines.forEach((line, i) => {
      setTimeout(() => setVisible((v) => [...v, i]), line.delay * 1000);
    });
  }, [isInView]);

  return (
    <div ref={ref} className="glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Terminal bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/20">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="ml-4 flex items-center gap-2 text-xs text-muted-foreground font-mono">
          <Terminal className="w-3 h-3" />
          bash — ulockai
        </div>
      </div>
      <div className="p-6 font-mono text-sm space-y-2 min-h-[180px] bg-black/30">
        {terminalLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={visible.includes(i) ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className={line.color}
          >
            {line.text}
          </motion.div>
        ))}
        {visible.length < terminalLines.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
            className="text-green-400"
          >
            ▋
          </motion.span>
        )}
      </div>
    </div>
  );
}

export function ProductsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Built for <span className="text-gradient">Production AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete security stack for LLMs and AI Agents. Sub-millisecond, lightweight, and developer-first.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative glass rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`relative z-10 inline-flex p-3 rounded-xl bg-gradient-to-br ${product.color} mb-4 text-white shadow-lg`}>
                  {product.icon}
                </div>
                <span className="relative z-10 text-xs text-muted-foreground font-mono mb-1 block">{product.tagline}</span>
                <h3 className="relative z-10 font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                <div className="relative z-10 mt-4 flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AnimatedTerminal />
            <div className="mt-6 flex justify-center">
              <Link
                href="https://github.com/ulockai/ulockai"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 glass text-sm font-medium hover:border-primary/30 hover:-translate-y-0.5 transition-all"
              >
                View on GitHub
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
