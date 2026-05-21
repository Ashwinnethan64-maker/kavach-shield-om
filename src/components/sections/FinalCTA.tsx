import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import shungiteMacro from "@/assets/images/shungite-macro.webp";
import shungiteMacroMobile from "@/assets/images/shungite-macro-mobile.webp";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-14 overflow-hidden min-h-[450px] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={shungiteMacroMobile} media="(max-width: 639px)" width="480" />
          <img 
            src={shungiteMacro} 
            alt="Shungite Texture Background" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-10 scale-110" 
            width="1200"
            height="800"
          />
        </picture>
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Cinematic gradient overlays - performance optimized */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
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

      <div className="container mx-auto px-6 relative z-10 max-w-7xl" ref={ref}>
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={inView ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/30 bg-primary/10 mb-6 shadow-[0_0_40px_rgba(212,175,55,0.2)] backdrop-blur-sm"
          >
            <span className="font-serif text-2xl font-bold text-primary">OM</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
            Carry Sacred Protection <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FDE08B] to-secondary">
              Everywhere.
            </span>
          </h2>

          <p className="text-base text-muted-foreground/90 leading-relaxed mb-8 max-w-lg mx-auto opacity-80">
            Join 50,000+ conscious individuals who have chosen to walk through the modern world shielded by ancient wisdom.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button
              size="lg"
              className="h-12 px-8 rounded-full text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-105"
              data-testid="button-order-now-cta"
            >
              Order Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <p className="text-[11px] font-medium text-muted-foreground/80 tracking-wide">
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
