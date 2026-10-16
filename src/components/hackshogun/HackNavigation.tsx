import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "@/components/Arrow";
import { discordUrl, registrationUrl, showHackShogunSponsors, hackShogunSponsors } from "@/lib/hackshogun";

const links = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#rules", label: "Rules" },
  { href: "#judging", label: "Judging" },
  { href: "#faq", label: "FAQ" },
];

const HackNavigation = () => {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const sponsorsVisible = showHackShogunSponsors && hackShogunSponsors.length > 0;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (media.matches) setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="hs-header-shell">
      <nav className="hs-header" aria-label="HackShogun navigation">
        <a href="#top" className="hs-brand" onClick={() => setOpen(false)} aria-label="HackShogun home">
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M4 7Q18 12 32 7M6 14H30M11 12L10 31M25 12L26 31M9 23H27" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" /></svg>
          <span>Hack<span>Shogun</span></span>
        </a>
        <div className="hs-desktop-links">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          {sponsorsVisible && <a href="#event-sponsors">Sponsors</a>}
        </div>
        <div className="hs-header-actions">
          <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="hs-button hs-button-small hs-header-discord">Discord</a>
          <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="hs-button hs-button-primary hs-button-small">Register <Arrow /></a>
          <button ref={toggle} type="button" className="hs-menu-toggle" aria-expanded={open} aria-controls={open ? "hack-mobile-menu" : undefined} aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span></button>
        </div>
        {open && <div id="hack-mobile-menu" className="hs-mobile-links">
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<Arrow /></a>)}
          {sponsorsVisible && <a href="#event-sponsors" onClick={() => setOpen(false)}>Sponsors<Arrow /></a>}
          <a href={discordUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Join Discord<Arrow /></a>
          <Link to="/">Back to SJ Shogun<Arrow /></Link>
        </div>}
      </nav>
    </header>
  );
};

export default HackNavigation;
