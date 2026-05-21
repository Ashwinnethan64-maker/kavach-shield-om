import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Paperclip, Radio, ShieldCheck } from "lucide-react";
import omShieldPhone from "@/assets/images/om-shield-phone.webp";

interface Step {
  step: string;
  title: string;
  icon: any;
  description: string;
  detail: string;
}

const steps: Step[] = [
  {
    step: "01",
    title: "Attach",
    icon: Paperclip,
    description: "Peel the precision medical-grade adhesive and press the Kavach Shield OM firmly onto the back of your device for 30 seconds. The bond is instant and permanent.",
    detail: "Works on all materials — glass, metal, plastic, leather cases.",
  },
  {
    step: "02",
    title: "Activate",
    icon: Radio,
    description: "Within 24 hours, the shungite carbon matrix fully calibrates to your device's unique electromagnetic signature, creating a personalized protective field.",
    detail: "No apps, no setup, no maintenance required.",
  },
  {
    step: "03",
    title: "Protect",
    icon: ShieldCheck,
    description: "From the moment of activation, Kavach Shield OM continuously neutralizes incoming EMF radiation while the sacred OM geometry maintains your energetic equilibrium.",
    detail: "24/7 protection that never degrades or weakens.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-14 md:py-18 overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-5 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Simple. Powerful.</span>
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-serif font-bold text-foreground mb-4 leading-tight">
            Three Steps to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FDE08B] to-primary">
              Sacred Protection
            </span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm max-w-xl mx-auto opacity-70 leading-relaxed font-sans">
            Expert protection for those who settle for nothing less than absolute energetic clarity.
          </p>
        </motion.div>

        <div className="relative mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Wide Cinematic Horizontal Showcase */}
          <motion.div
            className="w-full order-1 lg:order-1"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-video md:aspect-[16/10] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.05)] group bg-[#050816]">
              <img 
                src={omShieldPhone} 
                alt="Kavach Shield Horizontal Showcase" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transform transition-transform duration-[8s] group-hover:scale-105" 
              />
              
              {/* Premium Luxury Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 border border-white/5 rounded-[24px] pointer-events-none shadow-inner" />
            </div>
          </motion.div>

          {/* RIGHT SIDE: Elegant Vertical Timeline Steps */}
          <div className="w-full relative order-2 lg:order-2 lg:pl-4">
            <div className="flex flex-col gap-8 md:gap-10 relative z-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    className="flex gap-6 md:gap-8 group relative"
                  >
                    {/* Vertical Luxury Connector Line */}
                    {i < steps.length - 1 && (
                      <div className="absolute left-[31px] md:left-[39px] top-[75px] bottom-[-40px] md:bottom-[-55px] w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent hidden md:block" />
                    )}

                    {/* Step Icon & Alignment Line */}
                    <div className="shrink-0 flex flex-col items-center relative">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] border border-white/10 bg-white/[0.03] flex items-center justify-center relative transition-all duration-700 group-hover:border-primary/50 group-hover:bg-primary/5 shadow-xl backdrop-blur-md overflow-hidden">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary/90 transition-transform duration-700 group-hover:scale-110" strokeWidth={1} />
                      </div>
                      <div className="mt-3 text-[9px] md:text-[10px] font-black text-primary/30 tracking-[0.2em] group-hover:text-primary transition-colors duration-500 uppercase">
                        STEP {step.step}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 pt-2 md:pt-4 relative">
                      {/* Horizontal Connector Line - Refined Luxury System */}
                      <div className="absolute left-[-32px] md:left-[-40px] top-[40px] md:top-[50px] w-8 md:w-10 h-px bg-gradient-to-r from-primary/30 to-transparent group-hover:from-primary/60 transition-all duration-700" />
                      
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors duration-500">
                        {step.title}
                      </h3>
                      <p className="text-[13px] md:text-[15px] text-muted-foreground leading-relaxed mb-3 max-w-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500 font-sans">
                        {step.description}
                      </p>
                      
                      {/* Premium Technical Chip */}
                      <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-white/[0.02] border border-white/[0.05] inline-flex backdrop-blur-sm group-hover:border-primary/20 transition-all">
                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                        <span className="text-[9px] md:text-[10px] font-medium text-muted-foreground/80 tracking-widest uppercase">
                          {step.detail}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

