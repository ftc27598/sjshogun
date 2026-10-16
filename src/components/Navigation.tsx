import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/sjs-logo.png";
import Arrow from "@/components/Arrow";
import "@/pages/Shogun.css";

const navLinks = [
  { id: "robots", label: "Robots" },
  { id: "team", label: "Team" },
  { id: "sponsors", label: "Sponsors" },
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
    <header className="sj-header-shell">
      <nav aria-label="Primary" className="sj-header">
        <Link to="/" aria-label="Saint John's Shogun home" className="sj-brand" onClick={() => setMenuOpen(false)}><img src={logoImage} alt="" width="38" height="38" /><span>SJ <span>Shogun</span><small>SAINT JOHN'S · 27598</small></span></Link>
        <div className="sj-desktop-links">{navLinks.map(link => <a key={link.id} href={home ? "#" + link.id : "/#" + link.id}>{link.label}</a>)}<Link to="/sponsorship" aria-current={pathname === "/sponsorship" ? "page" : undefined}>Sponsorship</Link></div>
        <div className="sj-header-actions"><Link to="/hackshogun" className="sj-button sj-button-primary sj-button-small">HackShogun<Arrow /></Link><button ref={toggleRef} type="button" className="sj-menu-toggle" aria-expanded={menuOpen} aria-controls={menuOpen ? "mobile-nav-links" : undefined} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen(open => !open)}>{menuOpen ? "Close" : "Menu"}<span aria-hidden="true">{menuOpen ? "−" : "+"}</span></button></div>
        {menuOpen && <div id="mobile-nav-links" className="sj-mobile-links">{navLinks.map(link => <a key={link.id} href={home ? "#" + link.id : "/#" + link.id} onClick={() => setMenuOpen(false)}>{link.label}<Arrow /></a>)}<Link to="/sponsorship" onClick={() => setMenuOpen(false)} aria-current={pathname === "/sponsorship" ? "page" : undefined}>Sponsorship<Arrow /></Link><Link to="/hackshogun" onClick={() => setMenuOpen(false)}>HackShogun<Arrow /></Link></div>}
      </nav>
    </header>
  );
};
export default Navigation;
