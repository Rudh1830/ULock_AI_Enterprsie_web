"use client";

import { motion } from "framer-motion";
import { Mail, PhoneCall, Copy, Check, MessageSquare } from "lucide-react";
import { useState } from "react";
import { FloatingCard } from "@/components/ui/floating-card";

// Custom SVG Icons to avoid Lucide package mismatches
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const teamContacts = [
  {
    name: "Saravanavel E",
    role: "Founder & Lead Developer",
    email: "contact.ulockai@gmail.com",
    subject: "ULockAI Partnership & Technical Inquiry - Saravanavel",
    phone: "+919488722837",
    phoneDisplay: "+91 94887 22837",
    github: "https://github.com/SaravanavelE",
    linkedin: "https://www.linkedin.com/in/saravanavel-e",
    color: "from-blue-600/10 to-indigo-600/10",
  },
  {
    name: "Rudresh MR",
    role: "AI Engineer & Hiring Lead",
    email: "rudreshramasamy@gmail.com",
    subject: "ULockAI Careers & Auditing - Rudresh",
    phone: "+919566970199",
    phoneDisplay: "+91 95669 70199",
    github: "https://github.com/ulockai",
    linkedin: "https://www.linkedin.com/company/113373918/",
    color: "from-emerald-600/10 to-teal-600/10",
  },
  {
    name: "Selvamathan S",
    role: "AI Engineer & Security Architect",
    email: "selvamathans306@gmail.com",
    subject: "ULockAI Guardrail Inquiry - Selvamathan",
    phone: "+918610475216",
    phoneDisplay: "+91 86104 75216",
    github: "https://github.com/SelvamathanS",
    linkedin: "https://www.linkedin.com/in/selvamathans",
    color: "from-purple-600/10 to-accent/10",
  },
];

export default function ContactPage() {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedValue(id);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  return (
    <div className="container mx-auto px-6 py-32 min-h-screen max-w-6xl relative">
      {/* Background radial effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 mb-4"
        >
          Direct Channels
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading mb-6"
        >
          Connect With Our{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%] animate-[gradientShift_4s_ease_infinite]">
            Core Developers
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Skip the generic contact form. Connect directly with the founder and engineers building UlockAI security infrastructure.
        </motion.p>
      </div>

      {/* Interactive Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-16">
        {teamContacts.map((contact, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
          >
            <FloatingCard className="h-full p-8 flex flex-col group cursor-default border border-white/5 hover:border-primary/20 transition-all duration-350 bg-secondary/5" tiltMax={8} glow>
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />

              <div className="relative z-10 flex-1">
                <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-2">{contact.role}</span>
                <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">{contact.name}</h3>

                <div className="space-y-4 pt-4 border-t border-border/20">
                  {/* Email row */}
                  <div className="flex items-center justify-between text-sm group/row bg-secondary/40 hover:bg-secondary/70 border border-border/40 rounded-xl px-4 py-3.5 transition-colors">
                    <a
                      href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.subject)}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors flex-1"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="truncate max-w-[150px]">{contact.email}</span>
                    </a>
                    <button
                      onClick={() => handleCopy(contact.email, `${i}-email`)}
                      className="text-muted-foreground hover:text-foreground p-0.5 ml-2"
                      title="Copy Email"
                    >
                      {copiedValue === `${i}-email` ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Phone row (if available) */}
                  {contact.phone && (
                    <div className="flex items-center justify-between text-sm group/row bg-secondary/40 hover:bg-secondary/70 border border-border/40 rounded-xl px-4 py-3.5 transition-colors">
                      <a
                        href={`tel:${contact.phone}`}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors flex-1"
                      >
                        <PhoneCall className="w-4 h-4 text-emerald-400" />
                        <span>{contact.phoneDisplay}</span>
                      </a>
                      <button
                        onClick={() => handleCopy(contact.phone, `${i}-phone`)}
                        className="text-muted-foreground hover:text-foreground p-0.5 ml-2"
                        title="Copy Phone"
                      >
                        {copiedValue === `${i}-phone` ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  )}

                  {/* Social/Profiles grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      className="flex items-center justify-center gap-2 text-sm bg-secondary/40 hover:bg-secondary/70 border border-border/40 py-2.5 rounded-xl text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={contact.github}
                      target="_blank"
                      className="flex items-center justify-center gap-2 text-sm bg-secondary/40 hover:bg-secondary/70 border border-border/40 py-2.5 rounded-xl text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        ))}
      </div>

      {/* General inquiry card footer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full relative z-10 p-6 md:p-8 bg-secondary/25 border border-border/50 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-lg mb-0.5">Looking for community support?</h4>
            <p className="text-sm text-muted-foreground max-w-lg">For SDK troubleshooting, pull requests, or vulnerability disclosures, check our official GitHub organization page.</p>
          </div>
        </div>
        <a
          href="https://github.com/ulockai"
          target="_blank"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all shrink-0 shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2"
        >
          Explore Github Org
        </a>
      </motion.div>
    </div>
  );
}
