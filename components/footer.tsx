"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ExternalLink, Link2, AtSign } from "lucide-react";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const logoSrc = mounted && resolvedTheme === "light" ? "/ulockai-light-theme.png" : "/ulockai-dark-theme.png";

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm mt-0">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="relative w-40 h-12 mb-4">
              {mounted && <Image src={logoSrc} alt="ULockAI" fill className="object-contain" />}
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs leading-relaxed">
              Enterprise-grade AI Security SDK — lightweight, sub-millisecond, and developer-first protection for LLMs and AI Agents.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/ulockai/ulockai" target="_blank" className="p-2 rounded-lg glass border border-white/10 hover:border-primary/30 hover:-translate-y-0.5 transition-all text-muted-foreground hover:text-primary">
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg glass border border-white/10 hover:border-primary/30 hover:-translate-y-0.5 transition-all text-muted-foreground hover:text-primary">
                <Link2 className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg glass border border-white/10 hover:border-primary/30 hover:-translate-y-0.5 transition-all text-muted-foreground hover:text-primary">
                <AtSign className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/products/ai-shield" className="hover:text-primary transition-colors">AI Shield</Link></li>
              <li><Link href="/products/secure-sdk" className="hover:text-primary transition-colors">Secure SDK</Link></li>
              <li><Link href="/products/apis" className="hover:text-primary transition-colors">Security APIs</Link></li>
              <li><Link href="https://github.com/ulockai/ulockai" target="_blank" className="hover:text-primary transition-colors">GitHub</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/services#ai-security" className="hover:text-primary transition-colors">AI Security</Link></li>
              <li><Link href="/services#web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services#career-branding" className="hover:text-primary transition-colors">Career Branding</Link></li>
              <li><Link href="/services#ai-development" className="hover:text-primary transition-colors">AI Development</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/academy" className="hover:text-primary transition-colors">Academy</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} ULockAI. All rights reserved. Your AI&apos;s First Line of Defense.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
