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

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-14 md:py-18 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">What Sets Us Apart</span>
          </div>
          <h2 className="text-3xl md:text-3.5xl lg:text-4.5xl font-serif font-bold text-foreground mb-4">
            Crafted for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Discerning Few
            </span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed opacity-80">
            Six pillars of excellence that elevate Kavach Shield OM beyond protection — into a philosophy of living.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto"
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
                whileTap={{ scale: 0.98 }}
                className="group relative rounded-[1.25rem] overflow-hidden cursor-default transition-all duration-700 active:bg-primary/5"
              >
                {/* Gold Glow Base */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-1000" />
                
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-white/10 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:via-primary/5 group-hover:to-primary/40 group-active:from-primary/30 transition-all duration-700" style={{ padding: '1px' }}>
                  <div className="absolute inset-0 rounded-[1.25rem] bg-card z-0" style={{ background: "linear-gradient(135deg, rgba(11,16,35,0.95) 0%, rgba(5,8,22,1) 100%)" }} />
                </div>

                <div 
                  className="relative z-10 p-5 md:p-6.5 h-full flex flex-col transition-all duration-700 group-hover:translate-y-[-4px] group-active:translate-y-0"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4 md:mb-5 w-11 h-11 md:w-12 md:h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary group-hover:text-black group-active:bg-primary/80 transition-all duration-700 shadow-inner group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      <Icon className="w-4.5 h-4.5 md:w-5 md:h-5 transition-transform duration-700 group-hover:scale-110" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-[17px] md:text-lg font-serif font-bold text-foreground mb-1.5 md:mb-2 group-hover:text-primary transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-[11.5px] md:text-[13px] text-muted-foreground leading-relaxed flex-1 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                      {feature.description}
                    </p>
                    
                    {/* Stealth interactive indicator */}
                    <div className="mt-4 md:mt-5 h-[0.5px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-transparent transition-all duration-1000 ease-out" />
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