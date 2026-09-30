import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/sjs-logo.png";
import Arrow from "@/components/Arrow";

const navLinks = [
  { id: "who-we-are", label: "The story" },
  { id: "robots", label: "Our robots" },
  { id: "team", label: "The team" },
  { id: "sponsors", label: "Partners" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const home = pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
    if (!home) window.scrollTo(0, 0);
  }, [pathname, home]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (media.matches) setMenuOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    media.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      media.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-border">
      <nav aria-label="Primary" className="page-width flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="Saint John's Shogun home" className="flex shrink-0 items-center gap-3">
          <img src={logoImage} alt="" className="h-11 w-11 rounded-full" width="44" height="44" />
          <span className="brand-lockup">SHOGUN<span className="block font-mono text-[10px] font-normal tracking-[0.22em] text-muted-foreground">SAINT JOHN'S · 27598</span></span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => <a key={link.id} href={home ? "#" + link.id : "/#" + link.id} className="nav-link">{link.label}</a>)}
        </div>
        <Link to="/hackshogun" className="nav-event hidden items-center gap-5 lg:inline-flex" aria-current={pathname === "/hackshogun" ? "page" : undefined}>HackShogun <Arrow className="h-4 w-4" /></Link>
        <button ref={toggleRef} type="button" className="menu-toggle inline-flex items-center gap-3 lg:hidden" aria-expanded={menuOpen} aria-controls={menuOpen ? "mobile-nav-links" : undefined} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen((open) => !open)}>
          <span className="font-mono text-xs uppercase tracking-widest">{menuOpen ? "Close" : "Menu"}</span>
          <span className={menuOpen ? "menu-lines is-open" : "menu-lines"} aria-hidden="true"><span /><span /></span>
        </button>
      </nav>
      {menuOpen && <nav id="mobile-nav-links" aria-label="Mobile" className="mobile-menu border-t border-border lg:hidden">
        <div className="page-width flex flex-col py-5">
          {navLinks.map((link, index) => <a key={link.id} href={home ? "#" + link.id : "/#" + link.id} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-border py-4 text-xl"><span><span className="mr-5 font-mono text-xs text-primary">0{index + 1}</span>{link.label}</span><Arrow /></a>)}
          <Link to="/hackshogun" onClick={() => setMenuOpen(false)} className="mt-5 flex items-center justify-between bg-primary px-5 py-4 font-semibold">HackShogun <Arrow /></Link>
        </div>
      </nav>}
    </header>
  );
};
export default Navigation;
