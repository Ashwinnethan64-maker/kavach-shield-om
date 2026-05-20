import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center bg-card shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <span className="font-serif text-primary font-bold text-sm">OM</span>
          </div>
          <span className="font-serif text-xl font-bold tracking-wider text-foreground">
            Kavach Shield
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Showcase", "Testimonials", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
