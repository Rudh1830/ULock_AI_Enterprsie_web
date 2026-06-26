"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    q: "What is ULockAI Shield?",
    a: "ULockAI Shield is our flagship AI Firewall that protects your LLMs from prompt injections, memory poisoning, and jailbreak attempts in real time at sub-millisecond speed."
  },
  {
    q: "How does prompt injection protection work?",
    a: "Our SDK intercepts every input before it reaches your LLM, running it through a multi-layer classifier trained on thousands of known attack patterns including indirect injection, role-play jailbreaks, and instruction overrides."
  },
  {
    q: "What LLMs and frameworks are supported?",
    a: "ULockAI integrates with OpenAI, Anthropic Claude, Google Gemini, and any open-source model via a simple Python or Node.js SDK wrapper. No framework lock-in."
  },
  {
    q: "Do you offer custom Web Development?",
    a: "Yes! We offer responsive, high-performance web development and API creation for startups and enterprise clients — from simple landing pages to full-stack applications."
  },
  {
    q: "How does your LinkedIn Branding work?",
    a: "We audit your existing profile, rewrite your headline, summary, and experiences to pass ATS filters and rank higher in recruiter searches. Results typically show within 2-4 weeks."
  },
  {
    q: "What is the response time of ULockAI Shield?",
    a: "Our scanner adds less than 2ms to your average LLM request — well under the threshold of noticeable latency for end users."
  },
  {
    q: "Is there a free trial or open-source version?",
    a: "Yes — our core package is open-source on GitHub (pip install ulockai). Enterprise features like 24/7 monitoring dashboards, advanced API threat telemetry, and SLA support are available on paid plans."
  },
  {
    q: "How do I get started?",
    a: "Install the SDK with pip install ulockai, or book a free consultation with our team for custom integrations and enterprise deployments."
  },
];

export default function FAQPage() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="container mx-auto px-6 py-32 min-h-screen max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 mb-4">
          FAQ
        </span>
        <h1 className="text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about ULockAI, our products, and our services.
        </p>
      </motion.div>

      <Accordion className="w-full space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
          >
            <AccordionItem
              value={`item-${i}`}
              className="glass border border-white/5 rounded-2xl px-4 hover:border-primary/20 transition-all"
            >
              <AccordionTrigger className="text-left font-medium hover:text-primary hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </section>
  );
}
