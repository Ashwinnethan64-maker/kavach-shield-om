import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import trishulShield from "@/assets/images/trishul-shield.webp";
import trishulShieldMobile from "@/assets/images/trishul-shield-mobile.webp";
import trishulShieldTablet from "@/assets/images/trishul-shield-tablet.webp";

export default function Hero() {
  const particles = Array.from({ length: 15 });

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden" id="hero">
      {/* Ambient background glows - optimized for performance */}
      <div 
        className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[30px] md:blur-[120px] pointer-events-none opacity-60 md:opacity-100"
        style={{ transform: "translate(-50%, -50%)", willChange: "filter" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-[30rem] md:h-[30rem] bg-secondary/10 rounded-full blur-[40px] md:blur-[150px] pointer-events-none opacity-50 md:opacity-100"
        style={{ transform: "translate(50%, 50%)", willChange: "transform, filter" }}
      />
      
      {/* Floating particles - reduced count and complexity on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary/40"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-20vh"],
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

      {/* Noise texture overlay - Hidden on mobile for better FPS */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] hidden md:block" />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center z-10 pt-16 pb-12 md:pt-20 md:pb-14 max-w-7xl">
        <motion.div 
          className="flex flex-col gap-3.5 md:gap-4.5 max-w-xl text-center lg:text-left items-center lg:items-start order-2 lg:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-3.5 py-1 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">Premium EMF Protection</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-serif font-bold leading-[1.05] tracking-tight">
            Sacred Protection <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FDE08B] to-primary">
              for the Modern World
            </span>
          </h1>
          
          <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Luxury EMF protection crafted with sacred symbolism and premium shungite materials. Designed for those who demand both energetic purity and aesthetic perfection.
          </p>
          
          <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 w-full sm:w-auto pt-1.5">
            <Button 
              size="lg" 
              className="flex-1 sm:flex-none h-10.5 px-6 sm:h-11.5 sm:px-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all hover:scale-105 active:scale-95"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Buy Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="flex-1 sm:flex-none h-10.5 px-6 sm:h-11.5 sm:px-7 rounded-full border-white/20 hover:bg-white/5 backdrop-blur-sm hover:text-primary text-foreground text-sm transition-all group active:scale-95"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore
              <ArrowRight className="ml-1.5 w-3 h-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 w-full lg:w-fit">
            <p className="text-[8px] uppercase tracking-widest text-muted-foreground mb-2.5 font-semibold opacity-50">As seen in</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 md:gap-7 opacity-35 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-serif font-bold text-sm md:text-base">Forbes</span>
              <span className="font-sans font-bold text-sm md:text-base tracking-tighter">Economic Times</span>
              <span className="font-serif italic text-sm md:text-base">TOI</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative h-[220px] sm:h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center w-full order-1 lg:order-2 hero-img-container"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative w-full h-full max-w-[320px] sm:max-w-[400px] lg:max-w-none mx-auto rounded-[1.5rem] overflow-hidden shadow-2xl xl:shadow-[0_20px_60px_rgba(212,175,55,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 z-10 hidden sm:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80 z-10 hidden sm:block" />
            <picture>
              <source srcSet={trishulShieldMobile} media="(max-width: 639px)" width="400" height="275" />
              <source srcSet={trishulShieldTablet} media="(max-width: 1023px)" width="640" height="560" />
              <img 
                src={trishulShield} 
                alt="Kavach Shield Trishul Edition" 
                className="w-full h-full object-cover transform transition-transform duration-[3s]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="800"
                height="800"
              />
            </picture>
            {/* Cinematic border glow - Reduced on mobile */}
            <div className="absolute inset-0 border border-primary/10 md:border-primary/20 rounded-[2rem] z-20 pointer-events-none" />
          </div>
          
          {/* Decorative element - Hidden on mobile for performance */}
          <div className="hidden lg:block absolute -z-10 w-[120%] h-[120%] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-40 animate-pulse" style={{ willChange: 'opacity' }} />
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
