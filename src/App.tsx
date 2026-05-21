import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, Suspense, lazy } from "react";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";

// Lazy load non-critical sections
const Showcase = lazy(() => import("./components/sections/Showcase"));
const TrustCredibility = lazy(() => import("./components/sections/TrustCredibility"));
const HowItWorks = lazy(() => import("./components/sections/HowItWorks"));
const Pricing = lazy(() => import("./components/sections/Pricing"));
const FAQ = lazy(() => import("./components/sections/FAQ"));
const FinalCTA = lazy(() => import("./components/sections/FinalCTA"));
const Footer = lazy(() => import("./components/sections/Footer"));

const queryClient = new QueryClient();

// Loading placeholder to prevent layout shifts
const SectionPlaceholder = () => <div className="min-h-[400px]" />;

function Home() {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Suspense fallback={<SectionPlaceholder />}>
          <Showcase />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <TrustCredibility />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
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

