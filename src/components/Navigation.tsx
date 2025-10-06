import { useState, useEffect } from "react";
import logoImage from "@/assets/sjs-logo.png";
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Saint John's Shogun Logo" className="h-10 w-10" />
          <div className="text-2xl font-bold text-primary red-glow">SAINT JOHN'S SHOGUN</div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("who-we-are")} className="text-foreground hover:text-primary transition-colors duration-300 red-glow-hover">
            Who We Are
          </button>
          <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors duration-300 red-glow-hover">
            About
          </button>
          <button onClick={() => scrollToSection("robots")} className="text-foreground hover:text-primary transition-colors duration-300 red-glow-hover">
            Robots
          </button>
          <button onClick={() => scrollToSection("team")} className="text-foreground hover:text-primary transition-colors duration-300 red-glow-hover">
            Our Team
          </button>
          <button onClick={() => scrollToSection("sponsors")} className="text-foreground hover:text-primary transition-colors duration-300 red-glow-hover">
            Partners
          </button>
        </div>

        <div className="text-muted-foreground">Team 27598</div>
      </div>
    </nav>;
};
export default Navigation;