"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50",
  ghost:
    "glass border border-white/10 hover:border-primary/30 hover:bg-white/5",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
};

const sizes = {
  sm: "h-9 px-5 text-xs",
  md: "h-11 px-7 text-sm",
  lg: "h-14 px-9 text-base",
};

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  onClick,
  href,
  variant = "primary",
  size = "md",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.2 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.2 });
  const scaleX = useSpring(1, { stiffness: 300, damping: 20 });
  const scaleY = useSpring(1, { stiffness: 300, damping: 20 });

  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    x.set(dx);
    y.set(dy);
    scaleX.set(1 + Math.abs(dx) * 0.002);
    scaleY.set(1 - Math.abs(dy) * 0.001);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scaleX.set(1);
    scaleY.set(1);
    setHovered(false);
  };

  const baseClass = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    "transition-colors duration-200 select-none overflow-hidden",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    disabled && "opacity-50 pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <motion.div
      ref={ref}
      style={{ x, y, scaleX, scaleY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      onClick={disabled ? undefined : onClick}
      role={href ? undefined : "button"}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (!disabled && (e.key === "Enter" || e.key === " ")) onClick?.();
      }}
      aria-disabled={disabled}
    >
      <span className={baseClass}>
        {/* Inner glow overlay */}
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-white pointer-events-none"
          animate={{ opacity: hovered ? 0.06 : 0 }}
          transition={{ duration: 0.2 }}
        />
        {/* Gradient shimmer on hover */}
        {variant === "primary" && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full pointer-events-none"
            animate={hovered ? { translateX: "200%" } : { translateX: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" tabIndex={-1}>
        {content}
      </a>
    );
  }

  return content;
}
