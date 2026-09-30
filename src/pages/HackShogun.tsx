import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";

const HackShogun = () => (
  <div className="min-h-[100dvh] bg-background">
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <Navigation />
    <main id="main-content" className="page-width grid min-h-[72dvh] items-center gap-12 py-20 lg:grid-cols-[1fr_0.65fr]">
      <div><p className="section-label"><span>01</span> An event by team 27598</p><h1 className="event-title mt-8">HACK<span className="text-primary">SHOGUN</span></h1><p className="mt-8 text-xl">Our first hackathon is in the works.</p><p className="mt-4 max-w-lg text-base leading-8 text-muted-foreground">We'll post dates, registration, and challenge details here when they're ready.</p><Link to="/" className="action-button mt-9 w-fit">Back to Shogun home <Arrow direction="right" /></Link></div>
      <div className="event-art relative hidden aspect-square border border-border lg:block" aria-hidden="true"><span>27598</span><div className="event-art-cross">+</div></div>
    </main>
    <Footer />
  </div>
);
export default HackShogun;
