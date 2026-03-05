import { useState, useEffect } from "react";
import logoImage from "@/assets/sjs-logo.png";

const navLinks = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "about", label: "About" },
  { id: "robots", label: "Robots" },
  { id: "team", label: "Our Team" },
  { id: "sponsors", label: "Partners" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      aria-label="Primary"
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#main-content" className="flex items-center gap-3">
          <img src={logoImage} alt="Saint John's Shogun Logo" className="h-10 w-10" loading="eager" decoding="async" />
          <div className="text-lg font-bold text-primary red-glow md:text-2xl">SAINT JOHN'S SHOGUN</div>
        </a>

        <button
          type="button"
          className="rounded-md border border-border px-3 py-2 text-sm text-foreground md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-links"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          Menu
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-foreground transition-colors duration-300 red-glow-hover hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden text-muted-foreground md:block">Team 27598</div>
      </div>

      <div
        id="mobile-nav-links"
        className={`border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMobileMenu}
              className="text-foreground transition-colors duration-300 red-glow-hover hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 text-sm text-muted-foreground">Team 27598</div>
        </div>
      </div>

    </nav>
  );
};

export default Navigation;
