import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Authentic Elite Shungite — 99.8% purity",
  "Precision OM laser engraving",
  "Medical-grade permanent adhesive",
  "Individual quality certification card",
  "Hand-polished luxury finish",
  "3-year protection guarantee",
  "Free worldwide express shipping",
  "Lifetime manufacturer support",
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">Exclusive Offer</span>
          </div>
          <h2 className="text-3xl md:text-3.5xl font-serif font-bold text-foreground mb-4">
            One Price.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Infinite Protection.
            </span>
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[320px] sm:max-w-[400px] group"
          >
            {/* Pulsing border animation wrapper */}
            <div className="absolute inset-0 rounded-3xl animate-pulse opacity-50 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 blur-md" />

            <div
              className="relative rounded-3xl border border-primary/40 overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500"
              style={{ background: "linear-gradient(145deg, rgba(11,16,35,0.95), rgba(5,8,22,0.98))" }}
            >
              {/* Limited edition banner gradient from primary to secondary */}
              <div
                className="flex items-center justify-center gap-1.5 md:gap-2 py-2 md:py-2.5 text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-background"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))" }}
              >
                <Zap className="w-2.5 h-2.5 md:w-3 md:h-3" />
                <span>Limited Edition — Only 500 Pieces</span>
                <Zap className="w-2.5 h-2.5 md:w-3 md:h-3" />
              </div>

              <div className="p-6 md:p-9">
                {/* Price */}
                <div className="text-center mb-5 md:mb-6">
                  <div className="text-[8px] md:text-[9px] text-muted-foreground tracking-widest uppercase mb-1.5 md:mb-2">One-time payment</div>
                  <div className="flex items-start justify-center gap-0.5">
                    <span className="text-lg md:text-xl font-serif text-primary mt-1 md:mt-2">₹</span>
                    <span className="text-5xl md:text-6xl font-serif font-bold text-primary leading-none tracking-tight">1499</span>
                  </div>
                  <div className="mt-2 text-[10px] md:text-xs text-muted-foreground">Inclusive of all taxes + free shipping</div>
                  <div className="mt-1 line-through text-muted-foreground/50 text-[10px] md:text-xs">₹2499</div>
                </div>

                {/* Features - optimized spacing */}
                <ul className="flex flex-col gap-2 md:gap-2 mb-6 md:mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 md:gap-2.5 text-[11px] md:text-[13px] text-foreground/90">
                      <div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                        <Check className="w-2 md:w-2.5 h-2 md:h-2.5 text-primary" />
                      </div>
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full h-11 md:h-12 rounded-full text-[13px] md:text-sm font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-95 transition-all duration-300"
                >
                  Order Now — Claim Your Shield
                </Button>

                {/* Guarantee Badge */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground bg-white/5 rounded-full py-2 px-4 w-fit mx-auto border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
                
                <p className="text-center text-[10px] text-muted-foreground/60 mt-3 uppercase tracking-wider">
                  Secure checkout &bull; Ships within 2 business days
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-primary/20 rounded-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-primary/20 rounded-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
