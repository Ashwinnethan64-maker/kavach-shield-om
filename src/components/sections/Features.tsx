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
    <section id="features" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">What Sets Us Apart</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Crafted for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Discerning Few
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed opacity-80">
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
                className="group relative rounded-[1.5rem] overflow-hidden cursor-default transition-all duration-700"
              >
                {/* Gold Glow Base */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-white/10 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:via-primary/5 group-hover:to-primary/40 transition-all duration-700" style={{ padding: '1px' }}>
                  <div className="absolute inset-0 rounded-[1.5rem] bg-card z-0" style={{ background: "linear-gradient(135deg, rgba(11,16,35,0.95) 0%, rgba(5,8,22,1) 100%)" }} />
                </div>

                <div 
                  className="relative z-10 p-8 h-full flex flex-col transition-all duration-700 group-hover:translate-y-[-4px]"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary group-hover:text-black transition-all duration-700 shadow-inner group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      <Icon className="w-6 h-6 transition-transform duration-700 group-hover:scale-110" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                      {feature.description}
                    </p>
                    
                    {/* Stealth interactive indicator */}
                    <div className="mt-6 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-transparent transition-all duration-1000 ease-out" />
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