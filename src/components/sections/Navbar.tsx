import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Features", "Showcase", "Testimonials", "Pricing", "FAQ"];

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-white/10 py-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-4 md:py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-7 h-7 rounded-full border border-primary/50 flex items-center justify-center bg-card shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:border-primary transition-all duration-300">
              <span className="font-serif text-primary font-bold text-xs">OM</span>
            </div>
            <span className="font-serif text-base md:text-lg font-bold tracking-wider text-foreground group-hover:text-primary transition-colors">
              Kavach Shield
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-5 h-10 shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 text-sm"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Buy Now
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors p-2 rounded-lg bg-white/5 active:bg-white/10"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col md:hidden"
          >
            <div className="flex items-center justify-end p-6 py-8">
              <button
                className="text-foreground hover:text-primary transition-colors p-2 rounded-full bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-1 gap-6 pb-20 px-6">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl sm:text-2xl font-serif font-medium text-foreground hover:text-primary transition-colors text-center w-full py-2 border-b border-white/5 active:bg-white/5 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                >
                  {item}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-8 w-full max-w-[200px]"
              >
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-12 md:h-14 shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95 transition-transform"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Buy Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}