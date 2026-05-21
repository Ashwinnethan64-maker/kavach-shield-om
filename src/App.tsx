import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Showcase from "./components/sections/Showcase";
import TrustCredibility from "./components/sections/TrustCredibility";
import HowItWorks from "./components/sections/HowItWorks";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/sections/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <TrustCredibility />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Home />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

