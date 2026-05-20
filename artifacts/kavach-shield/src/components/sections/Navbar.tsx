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
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              Buy Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors p-2"
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
            
            <div className="flex flex-col items-center justify-center flex-1 gap-8 pb-20">
              {navLinks.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-serif font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-8"
              >
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-10 h-14 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
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