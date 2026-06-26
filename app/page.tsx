import { HeroSection } from "@/components/sections/hero";
import { MarqueeSection } from "@/components/sections/marquee";
import { ProductsSection } from "@/components/sections/products";
import { ProcessSection } from "@/components/sections/process";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ProductsSection />
      <ProcessSection />
    </>
  );
}
