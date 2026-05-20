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
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">Exclusive Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
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
            className="relative w-full max-w-md group"
          >
            {/* Pulsing border animation wrapper */}
            <div className="absolute inset-0 rounded-3xl animate-pulse opacity-50 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 blur-md" />

            <div
              className="relative rounded-3xl border border-primary/40 overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.25)] transition-all duration-500"
              style={{ background: "linear-gradient(145deg, rgba(11,16,35,0.95), rgba(5,8,22,0.98))" }}
            >
              {/* Limited edition banner gradient from primary to secondary */}
              <div
                className="flex items-center justify-center gap-2 py-3 text-xs font-bold tracking-widest uppercase text-background"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))" }}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Limited Edition — Only 500 Pieces</span>
                <Zap className="w-3.5 h-3.5" />
              </div>

              <div className="p-8 md:p-10">
                {/* Price */}
                <div className="text-center mb-8">
                  <div className="text-[10px] text-muted-foreground tracking-widest uppercase mb-2">One-time payment</div>
                  <div className="flex items-start justify-center gap-1">
                    <span className="text-2xl font-serif text-primary mt-3">₹</span>
                    <span className="text-7xl font-serif font-bold text-primary leading-none tracking-tight">1499</span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">Inclusive of all taxes + free shipping</div>
                  <div className="mt-1 line-through text-muted-foreground/50 text-sm">₹2499</div>
                </div>

                {/* Features - optimized spacing */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground/90">
                      <div className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full h-14 rounded-full text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-[1.02] group-hover:animate-pulse"
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