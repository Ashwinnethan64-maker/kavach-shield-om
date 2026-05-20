import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import productImg from "../../assets/images/kavach-shield.png";

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
    <section id="showcase" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[180px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-medium tracking-widest uppercase text-secondary">Product Details</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Precision in Every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Detail
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute w-72 h-72 bg-primary/15 rounded-full blur-[80px]" />
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img
                  src={productImg}
                  alt="Kavach Shield OM"
                  className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(212,175,55,0.3)]"
                />
                <div className="absolute inset-[-15%] border border-primary/15 rounded-full border-dashed animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-[-30%] border border-white/5 rounded-full animate-[spin_70s_linear_infinite_reverse]" />
                {/* Floating spec badges */}
                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-6 bg-card/80 backdrop-blur border border-primary/20 rounded-lg px-3 py-2 text-xs"
                >
                  <div className="text-primary font-semibold">99.8%</div>
                  <div className="text-muted-foreground">Pure Shungite</div>
                </motion.div>
                <motion.div
                  animate={{ x: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-8 bottom-10 bg-card/80 backdrop-blur border border-secondary/20 rounded-lg px-3 py-2 text-xs"
                >
                  <div className="text-secondary font-semibold">432Hz</div>
                  <div className="text-muted-foreground">OM Resonance</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Specs + cards */}
          <motion.div
            className="flex flex-col gap-8"
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
                  className="p-4 bg-card/40 backdrop-blur-sm flex flex-col gap-1 hover:bg-primary/5 transition-colors"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</span>
                  <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="group p-5 rounded-xl border border-white/8 bg-card/30 backdrop-blur hover:border-primary/25 transition-all duration-300"
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
