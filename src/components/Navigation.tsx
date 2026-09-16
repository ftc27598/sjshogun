import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logoImage from "@/assets/sjs-logo.png";

const navLinks = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "about", label: "About" },
  { id: "robots", label: "Robots" },
  { id: "team", label: "Team" },
  { id: "sponsors", label: "Partners" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="#main-content" className="flex items-center gap-2.5">
          <img src={logoImage} alt="Saint John's Shogun Logo" className="h-9 w-9" loading="eager" decoding="async" />
          <span className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
            Shogun <span className="text-primary">27598</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground/75 transition-colors hover:bg-white/10 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/hackshogun"
            className="ml-1 inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-1.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            HackShogun
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-links"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-nav-links"
        className={`mx-4 overflow-hidden rounded-2xl border border-white/10 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-2.5 text-foreground/85 transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/hackshogun"
            onClick={closeMobileMenu}
            className="mt-2 inline-flex items-center justify-center gap-1 rounded-lg bg-primary px-3 py-2.5 font-semibold text-primary-foreground"
          >
            HackShogun
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
