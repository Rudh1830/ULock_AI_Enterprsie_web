"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Code2, Presentation, Briefcase, Bot, Layout } from "lucide-react";

const services = [
  {
    icon: <ShieldAlert className="w-8 h-8 text-primary" />,
    title: "AI Security",
    description: "Prompt Injection Protection, AI Agent Security, and Enterprise Guardrails."
  },
  {
    icon: <Code2 className="w-8 h-8 text-accent" />,
    title: "Custom AI Development",
    description: "Intelligent Automation, Custom LLMs, and AI Consulting tailored to your needs."
  },
  {
    icon: <Layout className="w-8 h-8 text-primary" />,
    title: "Web Development",
    description: "Responsive Website Design, Full Stack Development, and API Creation."
  },
  {
    icon: <Presentation className="w-8 h-8 text-accent" />,
    title: "LinkedIn Branding",
    description: "Profile Optimization and Career Branding for tech professionals."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Resume Building",
    description: "ATS-friendly resumes and Portfolio Website Creation."
  },
  {
    icon: <Bot className="w-8 h-8 text-accent" />,
    title: "Automation Solutions",
    description: "Streamline workflows with intelligent cloud deployment and scripts."
  }
];

export function ServicesSection() {
  return (
    <section className="py-32 relative z-10 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions bridging the gap between cutting-edge AI, robust security, and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-xl bg-secondary/50 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
