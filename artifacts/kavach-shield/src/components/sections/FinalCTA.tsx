import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import shungiteMacro from "@/assets/images/shungite-macro.png";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-40 overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={shungiteMacro} 
          alt="Shungite Texture Background" 
          className="w-full h-full object-cover opacity-10 blur-xl scale-110" 
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.08) 0%, rgba(255,107,0,0.04) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 50% 100%, rgba(212,175,55,0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Top glow divider */}
      <div
        className="absolute top-0 inset-x-0 h-px z-10"
        style={{
          background: "linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={inView ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full border border-primary/30 bg-primary/10 mb-10 shadow-[0_0_50px_rgba(212,175,55,0.2)] backdrop-blur-sm"
          >
            <span className="font-serif text-4xl font-bold text-primary">OM</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            Carry Sacred Protection{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FDE08B] to-secondary">
              Everywhere.
            </span>
          </h2>

          <p className="text-xl text-muted-foreground/90 leading-relaxed mb-10 max-w-xl mx-auto">
            Join 50,000+ conscious individuals who have chosen to walk through the modern world shielded by ancient wisdom.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button
              size="lg"
              className="h-16 px-12 rounded-full text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_50px_rgba(212,175,55,0.5)] hover:shadow-[0_0_80px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-105"
              data-testid="button-order-now-cta"
            >
              Order Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm font-medium text-muted-foreground/80 tracking-wide">
              ₹1499 &bull; Free Shipping &bull; 30-Day Guarantee
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom glow divider */}
      <div
        className="absolute bottom-0 inset-x-0 h-px z-10"
        style={{
          background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)",
        }}
      />
    </section>
  );
}