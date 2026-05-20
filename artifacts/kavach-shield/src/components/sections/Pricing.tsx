import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap } from "lucide-react";
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
    <section id="pricing" className="relative py-32 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">Exclusive Offer</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
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
            className="relative w-full max-w-md"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-[40px]" />

            <div
              className="relative rounded-3xl border border-primary/30 overflow-hidden"
              style={{ background: "linear-gradient(145deg, rgba(11,16,35,0.95), rgba(5,8,22,0.98))" }}
            >
              {/* Limited edition banner */}
              <div
                className="flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-widest uppercase"
                style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.2), rgba(255,107,0,0.2), rgba(212,175,55,0.2))" }}
              >
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary">Limited Edition — Only 500 Pieces</span>
                <Zap className="w-3.5 h-3.5 text-primary" />
              </div>

              <div className="p-10">
                {/* Price */}
                <div className="text-center mb-10">
                  <div className="text-xs text-muted-foreground tracking-widest uppercase mb-2">One-time payment</div>
                  <div className="flex items-start justify-center gap-1">
                    <span className="text-2xl font-serif text-primary mt-3">₹</span>
                    <span className="text-7xl font-serif font-bold text-primary leading-none">1499</span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">Inclusive of all taxes + free shipping</div>
                  <div className="mt-1 line-through text-muted-foreground/50 text-sm">₹2499</div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-10">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full h-14 rounded-full text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-[1.02]"
                >
                  Order Now — Claim Your Shield
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  Secure checkout &bull; Ships within 2 business days
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-primary/10 rounded-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-primary/10 rounded-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
