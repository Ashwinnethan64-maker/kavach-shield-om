import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import trishulShield from "@/assets/images/trishul-shield.png";
import omShieldPhone from "@/assets/images/om-shield-phone.png";

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
    <section id="showcase" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[180px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-medium tracking-widest uppercase text-secondary">Product Details</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Precision in Every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Detail
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Layered images */}
          <motion.div
            className="relative flex items-center justify-center h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute w-72 h-72 bg-primary/15 rounded-full blur-[80px]" />
            
            <div className="relative w-full max-w-[400px] aspect-[4/5]">
              {/* Primary image */}
              <motion.div 
                className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.15)] z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src={trishulShield} 
                  alt="Trishul Shield Close-up" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </motion.div>

              {/* Floating secondary image */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -bottom-8 w-48 h-48 rounded-xl overflow-hidden border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-20 bg-card/40 backdrop-blur-md p-2"
              >
                <img 
                  src={omShieldPhone} 
                  alt="OM Shield on Phone" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Specs + cards */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Specs grid */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden border border-white/8"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="p-3 bg-card/40 backdrop-blur-sm flex flex-col gap-1 hover:bg-primary/5 transition-colors"
                >
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{spec.label}</span>
                  <span className="text-xs font-semibold text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-3">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="group p-4 rounded-xl border border-white/8 bg-card/30 backdrop-blur hover:border-primary/25 transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, rgba(11,16,35,0.7), rgba(5,8,22,0.8))" }}
                >
                  <h4 className="text-sm font-serif font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}