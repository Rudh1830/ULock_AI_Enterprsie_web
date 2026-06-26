"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { number: "01", title: "Discover", description: "We audit your AI stack, identify attack surfaces, and map out threat models specific to your LLM deployment." },
  { number: "02", title: "Design", description: "Craft a tailored security architecture — firewalls, scanners, memory shields — tuned for your use case." },
  { number: "03", title: "Develop", description: "Our engineers build and integrate the security layer into your existing pipeline with minimal code changes." },
  { number: "04", title: "Secure", description: "Run penetration tests, red-team exercises, and vulnerability scans before going live." },
  { number: "05", title: "Deploy", description: "Ship to production with confidence. Our SDK is sub-millisecond and adds zero latency at scale." },
  { number: "06", title: "Support", description: "24/7 monitoring, threat alerts, and ongoing security updates as the AI threat landscape evolves." },
];

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #2563EB 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From discovery to deployment — a structured path to bulletproof AI security.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex items-start gap-8 group cursor-default"
              >
                {/* Number bubble */}
                <div className="relative flex-shrink-0 hidden md:flex">
                  <div className="w-16 h-16 rounded-full glass border border-white/10 group-hover:border-primary/40 transition-all flex items-center justify-center shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                    <span className="font-mono text-sm font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass rounded-2xl p-6 border border-white/5 group-hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-primary md:hidden">{step.number}</span>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
