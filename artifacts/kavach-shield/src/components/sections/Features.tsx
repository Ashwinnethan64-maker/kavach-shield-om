import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Sparkles, Gem, Zap, Hand, Layers } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "EMF Protection",
    description: "Advanced shungite mineral matrix neutralizes harmful electromagnetic radiation from 5G, WiFi, and cellular signals at the molecular level.",
  },
  {
    icon: Sparkles,
    title: "Sacred OM Symbolism",
    description: "The ancient OM symbol is laser-engraved into every disc, channeling centuries of vibrational wisdom into a modern protective talisman.",
  },
  {
    icon: Gem,
    title: "Premium Shungite",
    description: "Sourced exclusively from the ancient Karelian deposits in Russia — the only place on Earth where true elite shungite is found.",
  },
  {
    icon: Zap,
    title: "Easy Installation",
    description: "Precision-adhesive backing bonds instantly to any device surface. No residue, no damage. Designed to be permanent or removable.",
  },
  {
    icon: Hand,
    title: "Handcrafted Finish",
    description: "Each shield is individually hand-finished by artisans, ensuring no two pieces are identical. A true luxury object in miniature.",
  },
  {
    icon: Layers,
    title: "Minimal Luxury Design",
    description: "Engineered to disappear into your device's aesthetic. Zero bulk, maximum presence — a mark of quiet sophistication.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">What Sets Us Apart</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
            Crafted for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Discerning Few
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Six pillars of excellence that elevate Kavach Shield OM beyond protection — into a philosophy of living.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group relative rounded-2xl overflow-hidden cursor-default"
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500 rounded-2xl" style={{ padding: '1px' }}>
                  <div className="absolute inset-[1px] rounded-[15px] bg-card z-0" style={{ background: "linear-gradient(135deg, rgba(11,16,35,0.9) 0%, rgba(5,8,22,1) 100%)" }} />
                </div>

                <div 
                  className="relative z-10 p-6 h-full flex flex-col transition-all duration-300 group-hover:bg-primary/5"
                  style={{ background: "linear-gradient(135deg, rgba(11,16,35,0.8) 0%, rgba(5,8,22,0.9) 100%)" }}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4 w-10 h-10 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}