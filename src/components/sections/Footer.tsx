import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Mail, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <footer className="relative border-t border-white/5 pt-12 pb-6 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Newsletter Section */}
        <div className="mb-12 max-w-xl border-b border-white/10 pb-8">
          <h3 className="text-xl font-serif font-semibold mb-2">Join the Inner Circle</h3>
          <p className="text-[13px] text-muted-foreground mb-5">Subscribe to receive exclusive insights on EMF protection, spiritual wellness, and early access to new releases.</p>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Input 
              placeholder="Enter your email address" 
              className="h-11 bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary/50 text-foreground placeholder:text-muted-foreground/50 rounded-lg flex-1 text-sm"
            />
            <Button className="h-11 px-6 bg-white/10 hover:bg-white/20 text-foreground border border-white/10 rounded-lg shadow-none text-sm">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 footer-logo-container">
              <div className="w-6.5 h-6.5 rounded-full border border-primary/40 flex items-center justify-center bg-primary/10 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <span className="font-serif text-primary font-bold text-[10px]">OM</span>
              </div>
              <span className="font-serif text-base font-bold tracking-wider text-foreground">Kavach Shield</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px] mb-5 opacity-80">
              Premium EMF protection crafted with sacred shungite. Where spiritual wisdom meets modern science.
            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors bg-white/5"
                    data-testid={`link-social-${link.label.toLowerCase()}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">Explore</h4>
            <ul className="flex flex-col gap-2">
              {brandLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">Legal</h4>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h4 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">Contact</h4>
             <ul className="flex flex-col gap-2 text-[13px] text-muted-foreground">
               <li>
                 <a href="mailto:hello@kavachshield.com" className="hover:text-primary transition-colors">
                   hello@kavachshield.com
                 </a>
               </li>
               <li>
                 <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                   WhatsApp Support <ArrowRight className="w-3 h-3" />
                 </a>
               </li>
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-5 border-t border-white/10 text-[10px] text-muted-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Kavach Shield OM. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Made with reverence in India <span className="w-1 h-1 rounded-full bg-primary/50" /> Ships Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
