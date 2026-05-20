import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Paperclip, Radio, ShieldCheck } from "lucide-react";

const steps = [
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-secondary/4 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-secondary/20 bg-secondary/5 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-medium tracking-widest uppercase text-secondary">Simple. Powerful.</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Three Steps to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Sacred Protection
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            No complexity. No rituals. Just ancient wisdom delivered with modern precision.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[calc(50%/3*1+50%/3/2)] right-[calc(50%/3*1+50%/3/2)] h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.3), rgba(255,107,0,0.3), transparent)" }}
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step number */}
                  <div className="relative mb-8">
                    <motion.div
                      animate={inView ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 2, delay: 1 + i * 0.3, repeat: Infinity, repeatDelay: 3 }}
                      className="w-20 h-20 rounded-full border-2 border-primary/30 bg-card flex items-center justify-center relative z-10 group-hover:border-primary/60 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.2)]"
                      style={{ background: "linear-gradient(135deg, rgba(11,16,35,0.9), rgba(5,8,22,0.95))" }}
                    >
                      <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center z-20">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                  </div>

                  <div
                    className="p-6 rounded-2xl border border-white/8 w-full hover:border-primary/20 transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, rgba(11,16,35,0.7), rgba(5,8,22,0.9))" }}
                  >
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="pt-3 border-t border-white/5">
                      <p className="text-xs text-primary/70 italic">{step.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
