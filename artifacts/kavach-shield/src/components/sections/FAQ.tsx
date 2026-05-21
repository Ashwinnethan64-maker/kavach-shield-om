import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is shungite?",
    answer: "Shungite is an ancient mineral found exclusively in the Karelia region of Russia, estimated to be over 2 billion years old. It is the only known natural material to contain C60 fullerenes — a unique carbon molecule structure that gives shungite its extraordinary electromagnetic absorption properties. Elite shungite (which we use) contains over 98% carbon and is classified as a rare earth material.",
  },
  {
    question: "Does it fit all phones?",
    answer: "Yes. Kavach Shield OM is designed with universal compatibility in mind. The 35mm diameter disc adheres perfectly to any smartphone, including iPhones, Samsung Galaxy, OnePlus, Pixel, and all other Android devices. It also works on tablets, laptops, AirPod cases, smart watches, and any other device with a flat surface. The medical-grade adhesive works on glass, metal, plastic, and leather.",
  },
  {
    question: "Is it removable?",
    answer: "The standard Kavach Shield OM uses a permanent medical-grade adhesive designed for long-term wear. While it can be removed with gentle heat (a hairdryer on low for 30-60 seconds), we recommend treating it as a permanent installation for maximum protection. Removal may leave a faint residue mark. We recommend applying it to the back of your phone case rather than directly on the device if you prefer flexibility.",
  },
  {
    question: "Does it affect charging?",
    answer: "No. Kavach Shield OM has zero effect on wireless charging, wired charging speeds, signal reception, or any other device functionality. The shungite disc is positioned on the back of your device away from charging coils. The material does not conduct electricity, does not interfere with NFC, GPS, Bluetooth, WiFi, or cellular signals. Your device operates at 100% functionality.",
  },
  {
    question: "Is it waterproof?",
    answer: "Yes. Kavach Shield OM is fully waterproof. The shungite material itself is naturally water-resistant, and the medical-grade adhesive maintains a permanent bond even when submerged. You can use your device in rain, shower steam, or near water without any concern. The gold OM engraving is laser-etched into the stone and will not fade, rust, or tarnish under any conditions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-5 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Concierge Support</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
            Everything You <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FDE08B] to-primary">
              Need to Know
            </span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-base max-w-xl mx-auto opacity-70">
            Expert answers for those who settle for nothing less than absolute clarity.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                openIndex === i
                  ? "border-primary/40 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.4)] ring-1 ring-primary/10"
                  : "border-white/5 hover:border-white/15"
              }`}
              style={{ background: openIndex === i ? "rgba(11,16,35,0.95)" : "rgba(11,16,35,0.6)" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
              >
                <span className={`font-serif font-bold text-base md:text-lg transition-all duration-300 ${
                  openIndex === i ? "text-primary translate-x-1" : "text-foreground group-hover:text-primary/70"
                }`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ml-4 transition-all duration-500 ${
                  openIndex === i
                    ? "border-primary/50 bg-primary/20 text-primary rotate-[135deg]"
                    : "border-white/10 text-muted-foreground group-hover:border-primary/30 group-hover:rotate-[45deg]"
                }`}>
                  <Plus className="w-4 h-4 transition-transform duration-500" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-5 md:px-6 pb-6 border-t border-white/5">
                      <p className="text-[13px] md:text-[15px] text-muted-foreground leading-relaxed pt-5 lg:max-w-[95%] font-sans opacity-80">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}