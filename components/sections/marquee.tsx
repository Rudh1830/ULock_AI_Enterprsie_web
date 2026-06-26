"use client";

const marqueeItems = [
  "AI Security SDK",
  "Prompt Injection Shield",
  "Memory Poisoning Guard",
  "API Firewall",
  "Sub-millisecond Latency",
  "Role Override Safety",
  "Streaming Protection",
  "FastAPI · LangChain · OpenAI",
];

export function MarqueeSection() {
  // Triple the items to ensure the marquee container fills the width on extra wide screens
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full overflow-hidden border-y border-border py-[18px] bg-secondary/15 dark:bg-secondary/5 relative z-10 select-none">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-default transition-all duration-300">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 px-10 font-mono text-xs tracking-widest uppercase text-muted-foreground/65 dark:text-muted-foreground/45 whitespace-nowrap flex-shrink-0"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 shadow-[0_0_8px_rgba(91,91,214,0.6)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
