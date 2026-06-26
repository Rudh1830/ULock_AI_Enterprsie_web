"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt degrees (default 15) */
  tiltMax?: number;
  /** Glow color in dark mode (CSS color, default primary blue) */
  glowColor?: string;
  /** Whether to show glow effect */
  glow?: boolean;
  /** Whether the lift/scale animation fires on hover */
  lift?: boolean;
}

export function FloatingCard({
  children,
  className,
  tiltMax = 15,
  glowColor = "rgba(37, 99, 235, 0.25)",
  glow = true,
  lift = true,
}: FloatingCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 200, damping: 20, mass: 0.3 });
  const mouseY = useSpring(rawY, { stiffness: 200, damping: 20, mass: 0.3 });

  // Tilt — rotate around X and Y axes
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [tiltMax, -tiltMax]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-tiltMax, tiltMax]);

  // Glow spotlight that tracks cursor
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["20%", "80%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - left) / width - 0.5);
    rawY.set((e.clientY - top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      whileHover={lift ? { scale: 1.03, y: -8 } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "glass-card",
        "border border-white/5 hover:border-primary/20",
        "transition-[border-color,box-shadow] duration-300",
        className
      )}
    >
      {/* Cursor-tracked glow spotlight */}
      {glow && (
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(200px circle at ${glowX} ${glowY}, ${glowColor}, transparent 70%)`,
            opacity: 0.6,
          }}
        />
      )}

      {/* Card content lifted above glow */}
      <div
        style={{ transform: "translateZ(20px)" }}
        className="relative z-10"
      >
        {children}
      </div>
    </motion.div>
  );
}
