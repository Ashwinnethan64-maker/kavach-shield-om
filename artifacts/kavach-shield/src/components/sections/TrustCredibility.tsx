import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

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
    text: "As a doctor who is also deeply spiritual, I appreciate both the scientific backing and the sacred symbolism. I recommend this to every patient who asks about EMF protection.",
    initials: "KN",
  },
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
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">Trusted Worldwide</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Worn by Those Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Know Better
            </span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl border border-white/8 bg-card/30 backdrop-blur"
              style={{ background: "linear-gradient(135deg, rgba(11,16,35,0.7), rgba(5,8,22,0.8))" }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="group p-8 rounded-2xl border border-white/8 bg-card/30 backdrop-blur hover:border-primary/25 transition-all duration-300"
              style={{ background: "linear-gradient(145deg, rgba(11,16,35,0.9), rgba(5,8,22,0.95))" }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
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
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
