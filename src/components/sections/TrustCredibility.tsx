import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, lazy, Suspense } from "react";
import { Star } from "lucide-react";
import professionalLifestyle from "@/assets/images/professional-lifestyle.webp";
import omShieldPhone from "@/assets/images/om-shield-phone.webp";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Wellness Coach, Mumbai",
    rating: 5,
    text: "I was skeptical at first, but after attaching the Kavach Shield OM I noticed a significant reduction in the headaches I used to get during long calls. The quality is unreal — it feels like jewelry, not an accessory.",
    initials: "PS",
  },
  {
    name: "Arjun Mehta",
    role: "Tech Entrepreneur, Bangalore",
    rating: 5,
    text: "I've tried three other EMF products. None of them had the build quality or the aesthetic of Kavach Shield. The OM engraving is flawless. I have one on every device I own.",
    initials: "AM",
  },
  {
    name: "Dr. Kavya Nair",
    role: "Integrative Physician, Chennai",
    rating: 5,
    text: "As a doctor who is deeply spiritual, I appreciate both the scientific backing and the sacred symbolism. I recommend this to every patient who asks about EMF protection.",
    initials: "KN",
  },
  {
    name: "Vikram Desai",
    role: "Investment Banker, Delhi",
    rating: 5,
    text: "In my line of work, I am glued to screens 14 hours a day. Adding the Kavach Shield brought a sense of calm and focus that I didn't expect. Absolutely worth it.",
    initials: "VD",
  }
];

const stats = [
  { value: 50000, label: "Protected Devices", suffix: "+" },
  { value: 4.9, label: "Average Rating", suffix: "/5" },
  { value: 100, label: "Handcrafted", suffix: "%" },
  { value: 3, label: "Year Warranty", suffix: "-yr" },
];

function Counter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, isDecimal]);

  return (
    <span>
      {isDecimal ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
    </span>
  );
}

const trustBadges = [
  "Lab Verified",
  "100% Authentic Shungite",
  "Globally Shipped",
  "30-Day Guarantee",
  "Eco-Conscious",
];

export default function TrustCredibility() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[60px] md:blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">Trusted Worldwide</span>
          </div>
          <h2 className="text-3xl md:text-3.5xl font-serif font-bold text-foreground mb-4">
            Worn by Those Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Know Better
            </span>
          </h2>
        </motion.div>

        {/* Hero image container - optimized at 2:1 for cinematic feel without excessive crop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative w-full max-w-4xl mx-auto aspect-[16/10] md:aspect-[2.5/1] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 group"
        >
          <img 
            src={omShieldPhone} 
            alt="Kavach Shield on Device" 
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[3s] ease-out" 
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          
          {/* Minimized luxury overlay card */}
          <div className="absolute bottom-2 right-2 md:bottom-8 md:right-8 bg-card/60 backdrop-blur-2xl border border-white/10 rounded-xl md:rounded-2xl p-2.5 md:p-3.5 shadow-2XL max-w-[150px] sm:max-w-[180px] md:max-w-[220px] group/card hover:bg-card/70 transition-all duration-500 z-20">
            <div className="flex gap-0.5 mb-1.5 md:mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-1.5 md:w-2 h-1.5 md:h-2 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-[9px] md:text-[11px] font-serif font-medium text-white/90 italic leading-snug">
              "Finally, a product that values my health as much as my style. The energetic shift is palpable."
            </p>
            <div className="mt-2 md:mt-2.5 flex items-center gap-1.5 md:gap-2">
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-[7px] md:text-[10px]">AK</div>
              <div>
                <p className="text-[7px] md:text-[9.5px] font-bold text-white uppercase tracking-tighter leading-none mb-0.5">Ananya Kapoor</p>
                <p className="text-[6px] md:text-[8px] text-primary/80 font-medium leading-none">Holistic Designer</p>
              </div>
            </div>
          </div>
          {/* Subtle gold border glow */}
          <div className="absolute inset-0 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] pointer-events-none" />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-5 md:p-6 rounded-2xl border border-white/8 bg-card/30 backdrop-blur hover:border-primary/20 transition-all duration-500 group"
              style={{ background: "linear-gradient(135deg, rgba(11,16,35,0.7), rgba(5,8,22,0.8))" }}
            >
              <div className="text-2.5xl md:text-3xl font-serif font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-500">
                <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-12 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group p-5 md:p-7 rounded-2xl border border-white/8 bg-card/30 backdrop-blur hover:border-primary/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col justify-between"
              style={{ background: "linear-gradient(145deg, rgba(11,16,35,0.92), rgba(5,8,22,0.98))" }}
            >
              <div>
                <div className="flex gap-1 mb-3.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-sm md:text-[14px] text-muted-foreground leading-relaxed mb-5 italic opacity-90 group-hover:opacity-100 transition-opacity">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shadow-inner">
                  <span className="text-[10px] font-bold text-primary">{t.initials}</span>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-foreground tracking-tight">{t.name}</div>
                  <div className="text-[9px] md:text-[10.5px] text-primary/70 font-medium uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/15 bg-primary/5 text-[10px] md:text-[11px] font-medium text-primary tracking-wide shadow-sm"
            >
              <span className="w-1 h-1 rounded-full bg-primary/60" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
