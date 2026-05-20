import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import productImg from "../../assets/images/kavach-shield.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"
        style={{ transform: "translate(50%, 50%)" }}
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          className="flex flex-col gap-8 max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Premium EMF Protection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
            Sacred Protection <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FDE08B] to-primary">
              for the Modern World
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Luxury EMF protection crafted with sacred symbolism and premium shungite materials. Designed for those who demand both energetic purity and aesthetic perfection.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
              Buy Now
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-white/20 hover:bg-white/5 hover:text-primary text-foreground text-lg transition-all">
              Explore Features
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="relative h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              rotate: [-2, 2, -2]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="relative z-10 w-full max-w-md aspect-square rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.15)]"
          >
            <img 
              src={productImg} 
              alt="Kavach Shield OM Device" 
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
            
            {/* Orbital rings */}
            <div className="absolute inset-[-20%] border border-primary/20 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-[-40%] border border-white/5 rounded-full border-dotted animate-[spin_90s_linear_infinite_reverse]" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
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
