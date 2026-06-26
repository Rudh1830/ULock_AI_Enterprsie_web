"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------
   AnimatedText — split text by character/word with reveal
   ------------------------------------------------------- */

interface AnimatedTextProps {
  text: string;
  by?: "char" | "word";
  className?: string;
  variant?: "fadeUp" | "blurIn" | "slideIn" | "scaleIn";
  stagger?: number;
  delay?: number;
  once?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  margin?: any;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

const textVariantMap: Record<string, { hidden: Variants["hidden"]; visible: Variants["visible"] }> = {
  fadeUp: {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  blurIn: {
    hidden:  { opacity: 0, filter: "blur(12px)", y: 8 },
    visible: { opacity: 1, filter: "blur(0px)",  y: 0 },
  },
  slideIn: {
    hidden:  { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden:  { opacity: 0, scale: 0.6, y: 10 },
    visible: { opacity: 1, scale: 1,   y: 0 },
  },
};

export function AnimatedText({
  text,
  by = "word",
  className,
  variant = "fadeUp",
  stagger = 0.04,
  delay = 0,
  once = true,
  margin = "-80px",
  as: Tag = "div",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once, margin });

  const items = by === "char" ? text.split("") : text.split(" ");

  const vDef = textVariantMap[variant];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: vDef.hidden,
    visible: {
      ...(vDef.visible as object),
      transition: {
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    /* @ts-expect-error polymorphic Tag with ref */
    <Tag ref={ref} className={cn("overflow-hidden", className)}>
      <motion.span
        aria-label={text}
        className="inline-flex flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {items.map((item, i) => (
          <span key={i} className="overflow-hidden inline-block" aria-hidden>
            <motion.span className="inline-block" variants={itemVariants}>
              {item}
              {by === "word" && i < items.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* -------------------------------------------------------
   AnimatedHeading — convenience wrapper for headings
   ------------------------------------------------------- */
interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function AnimatedHeading({
  children,
  className,
  delay = 0,
  once = true,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" as unknown as undefined });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------
   RevealBlock — blur+fade reveal for any content block
   ------------------------------------------------------- */
interface RevealBlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export function RevealBlock({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: RevealBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" as unknown as undefined });

  const dirMap = {
    up:    { y: 32, x: 0 },
    down:  { y: -32, x: 0 },
    left:  { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(8px)", ...dirMap[direction] }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)", x: 0, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
