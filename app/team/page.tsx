"use client";

import { motion } from "framer-motion";
import { Mail, Shield, Cpu, UserCheck } from "lucide-react";
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

const team = [
  {
    name: "Saravanavel E",
    role: "Founder",
    bio: "Lead developer, CTO, and creator of the UlockAI open-source security core. Driving product architecture and developer integrations.",
    icon: <Shield className="w-6 h-6 text-primary" />,
    color: "from-blue-500/20 to-indigo-500/20",
    border: "group-hover:border-primary/40",
    email: "mr.saravanavel.e@gmail.com",
    github: "https://github.com/SaravanavelE",
    linkedin: "https://www.linkedin.com/in/saravanavel-e",
  },
  {
    name: "Rudresh MR",
    role: "AI Engineer & Hiring Lead",
    bio: "Focusing on agentic workflows, API firewall configurations, team scaling, developer outreach, and security research audits.",
    icon: <UserCheck className="w-6 h-6 text-emerald-400" />,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/40",
    email: "[rudreshramasamy@gmail.com]",
    github: "https://github.com/rudh1830",
    linkedin: "https://www.linkedin.com/in/rudresh-m-r-842022298/",
  },
  {
    name: "Selvamathan S",
    role: "AI Engineer",
    bio: "Architecting machine learning models, sub-millisecond classifier layers, and guardrail heuristics for real-time prompt injection detection.",
    icon: <Cpu className="w-6 h-6 text-accent" />,
    color: "from-purple-500/20 to-accent/20",
    border: "group-hover:border-accent/40",
    email: "selvamathans306@gmail.com",
    github: "https://github.com/SelvamathanS",
    linkedin: "https://www.linkedin.com/in/selvamathans",
  },
];

export default function TeamPage() {
  return (
    <div className="container mx-auto px-6 py-32 min-h-screen max-w-6xl relative">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 mb-4"
        >
          Meet ULockAI
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading mb-6"
        >
          The Team Behind <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%] animate-[gradientShift_4s_ease_infinite]">
            Secure AI Infrastructure
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
        >
          We are developers and security researchers building lightweight, developer-first guardrails to protect AI applications at the inference layer.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
          >
            <FloatingCard className="h-full p-8 flex flex-col group cursor-default" tiltMax={10} glow>
              {/* Profile Orb/Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                {member.icon}
              </div>

              {/* Title & Name */}
              <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm font-mono tracking-wider text-accent uppercase mb-4">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                {member.bio}
              </p>

              {/* Links */}
              <div className="flex items-center gap-3 pt-6 border-t border-border/30">
                <a
                  href={`mailto:${member.email}?subject=Inquiry%20to%20${member.name}`}
                  className="p-2.5 rounded-xl bg-secondary/50 border border-border/60 hover:border-primary/40 hover:bg-secondary transition-all text-muted-foreground hover:text-primary flex items-center justify-center"
                  title={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  className="p-2.5 rounded-xl bg-secondary/50 border border-border/60 hover:border-primary/40 hover:bg-secondary transition-all text-muted-foreground hover:text-primary flex items-center justify-center"
                  title={`LinkedIn Connect`}
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  className="p-2.5 rounded-xl bg-secondary/50 border border-border/60 hover:border-primary/40 hover:bg-secondary transition-all text-muted-foreground hover:text-primary flex items-center justify-center"
                  title={`GitHub Profile`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </FloatingCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
