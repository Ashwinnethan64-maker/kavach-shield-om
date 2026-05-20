import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@kavachshield.com" },
];

const brandLinks = [
  { label: "About", href: "#" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Shipping Info", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center bg-primary/10 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <span className="font-serif text-primary font-bold">OM</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-foreground">Kavach Shield OM</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Premium EMF protection crafted with sacred shungite and ancient symbolism. Where spiritual wisdom meets modern science.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    data-testid={`link-social-${link.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Brand links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Explore</h4>
            <ul className="flex flex-col gap-3">
              {brandLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Legal</h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5"
        >
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Kavach Shield OM. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with reverence in India &bull; Ships Worldwide
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Contact:</span>
            <a href="mailto:hello@kavachshield.com" className="text-xs text-primary hover:underline">
              hello@kavachshield.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
