import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import shungiteMacro from "@/assets/images/shungite-macro.png";

export default function Hero() {
  const particles = Array.from({ length: 15 });

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden" id="hero">
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"
        style={{ transform: "translate(50%, 50%)" }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary/40"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10 pt-24 pb-20">
        <motion.div 
          className="flex flex-col gap-6 max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Premium EMF Protection</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
            Sacred Protection <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FDE08B] to-primary">
              for the Modern World
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Luxury EMF protection crafted with sacred symbolism and premium shungite materials. Designed for those who demand both energetic purity and aesthetic perfection.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="lg" className="h-12 px-6 sm:h-14 sm:px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
              Buy Now
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 sm:h-14 sm:px-8 rounded-full border-white/20 hover:bg-white/5 hover:text-primary text-foreground text-base sm:text-lg transition-all">
              Explore Features
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">As seen in</p>
            <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="font-serif font-bold text-lg">Forbes</span>
              <span className="font-sans font-bold text-lg tracking-tight">Economic Times</span>
              <span className="font-serif italic text-lg">Times of India</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <div className="relative w-full h-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(212,175,55,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-80 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 z-10" />
            <img 
              src={shungiteMacro} 
              alt="Shungite Macro Texture" 
              className="w-full h-full object-cover"
            />
            {/* Cinematic border glow */}
            <div className="absolute inset-0 border border-primary/20 rounded-3xl z-20 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}