import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import trishulShield from "@/assets/images/trishul-shield.png";
import professionalLifestyle from "@/assets/images/professional-lifestyle.png";
import shungiteMacro from "@/assets/images/shungite-macro.png";

const specs = [
  { label: "Material", value: "Elite Shungite" },
  { label: "Purity", value: "99.8%" },
  { label: "Diameter", value: "35mm" },
  { label: "Thickness", value: "2.4mm" },
  { label: "Finish", value: "Hand-Polished" },
  { label: "Adhesive", value: "Medical Grade" },
  { label: "Origin", value: "Karelia, Russia" },
  { label: "Engraving", value: "Laser OM" },
];

const infoCards = [
  {
    title: "Carbon-60 Fullerene Matrix",
    body: "Shungite's unique C60 fullerene structure creates a quantum-level electromagnetic shield proven in independent laboratory testing.",
  },
  {
    title: "Sacred Geometry Integration",
    body: "The OM symbol is mathematically encoded to resonate at 432Hz — the harmonic frequency aligned with natural order.",
  },
  {
    title: "Universal Compatibility",
    body: "Engineered to adhere perfectly to any smartphone, tablet, laptop, or wearable device without interfering with signal reception.",
  },
];

export default function Showcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="showcase" className="relative py-18 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[180px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-medium tracking-widest uppercase text-secondary">Product Details</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Precision in Every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Detail
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Layered images */}
          <motion.div
            className="relative flex items-center justify-center h-[300px] sm:h-[400px] md:h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute w-full h-full bg-primary/5 rounded-full blur-[100px] sm:blur-[120px] scale-125 sm:scale-150" />
            
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] aspect-[4/5]">
              {/* Primary image - Lifestyle context */}
              <motion.div 
                className="absolute inset-x-0 top-0 h-[85%] rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={professionalLifestyle} 
                  alt="Professional using Kavach Shield" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Floating secondary image - Product detail */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 1, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 sm:-right-4 md:-right-8 bottom-4 w-32 sm:w-40 md:w-52 aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-primary/30 shadow-[0_15px_40px_rgba(212,175,55,0.25)] z-30 bg-card/80 backdrop-blur-xl p-2 md:p-2.5"
              >
                <img 
                  src={shungiteMacro} 
                  alt="Elite Shungite Macro" 
                  className="w-full h-full object-cover rounded-lg md:rounded-xl"
                  loading="lazy"
                />
              </motion.div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            </div>
          </motion.div>

          {/* Specs + cards */}
          <motion.div
            className="flex flex-col gap-5 md:gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Specs grid */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden border border-white/5"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="p-3 bg-card/60 backdrop-blur-sm flex flex-col gap-0.5 hover:bg-primary/5 transition-colors"
                >
                  <span className="text-[9px] text-muted-foreground uppercase tracking-widest leading-tight">{spec.label}</span>
                  <span className="text-xs font-bold text-foreground leading-tight">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-2.5">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  whileTap={{ scale: 0.99 }}
                  className="group p-3 md:p-3.5 rounded-xl border border-white/5 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, rgba(15,20,45,0.5), rgba(5,8,22,0.6))" }}
                >
                  <h4 className="text-xs md:text-[13px] font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-[10.5px] md:text-[11px] text-muted-foreground leading-relaxed opacity-80 group-hover:opacity-100">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}