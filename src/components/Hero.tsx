import teamPhoto from "@/assets/team-photo.png";
import Arrow from "@/components/Arrow";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="hero-section relative overflow-hidden">
    <div className="page-width">
      <div className="hero-topline flex items-center justify-between gap-4 border-b border-border py-6">
        <span className="eyebrow"><span className="status-dot" /> FTC TEAM 27598</span>
        <span className="eyebrow hidden text-muted-foreground sm:block">SHREWSBURY, MASSACHUSETTS</span>
        <span className="eyebrow text-muted-foreground sm:hidden">SHREWSBURY, MA</span>
      </div>
      <div className="hero-grid grid items-center gap-12 pb-14 pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:pb-14 lg:pt-12">
        <div className="hero-copy animate-fade-slide-in">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Saint John's Robotics</p>
          <h1 className="hero-title">SHOGUN</h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">We're Saint John's Shogun, an FTC robotics team in Shrewsbury. We build, code, compete, and share robotics with our community.</p>
          <Link to="/hackshogun" className="hack-promo mt-7 flex items-center justify-between gap-4" aria-label="HackShogun 2027, January 15 to 17, online. Learn more.">
            <span><span className="eyebrow block text-primary">Jan 15-17, 2027 / Online</span><span className="hack-promo-title mt-2 block">HACKSHOGUN</span></span>
            <Arrow className="h-7 w-7 shrink-0" />
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <a href="#robots" className="action-button">Explore our robots <Arrow direction="right" /></a>
            <a href="#team" className="text-link">Meet the team <Arrow /></a>
          </div>
        </div>
        <figure className="hero-photo animate-fade-slide-in [animation-delay:120ms]">
          <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"><span>01 / At competition</span><span>2025-2026</span></div>
          <div className="photo-frame relative">
            <img src={teamPhoto} alt="Saint John's Shogun team celebrating a competition win" className="relative w-full" loading="eager" decoding="async" width="866" height="445" />
            <span className="photo-corner" aria-hidden="true" />
          </div>
          <figcaption className="flex items-center justify-between gap-5 border-b border-border py-5">
            <div><span className="eyebrow text-primary">The team at FTC States</span><p className="mt-2 text-xs text-muted-foreground">2025-2026 season</p></div>
            <span className="font-display text-4xl font-semibold text-foreground/20" aria-hidden="true">27598</span>
          </figcaption>
        </figure>
      </div>
      <div className="hero-bottom flex flex-wrap items-center justify-between gap-4 border-t border-border py-5">
        <p className="eyebrow text-muted-foreground">Saint John's High School / FTC 27598</p>
        <a href="#who-we-are" className="eyebrow flex items-center gap-4">About the team <Arrow direction="down" className="h-4 w-4" /></a>
      </div>
    </div>
  </section>
);
export default Hero;
