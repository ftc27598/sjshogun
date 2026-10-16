import teamPhoto from "@/assets/team-photo.png";
import Arrow from "@/components/Arrow";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="sj-hero sj-width" aria-labelledby="shogun-title">
    <div className="sj-hero-copy">
      <p className="sj-kicker"><span aria-hidden="true" />FTC Team 27598 <span className="sj-location">Shrewsbury, Massachusetts</span></p>
      <p className="sj-eyebrow sj-hero-eyebrow">Saint John's Robotics</p>
      <h1 id="shogun-title">Saint John's<br /><span>Shogun.</span></h1>
      <p className="sj-hero-description">We're Saint John's Shogun, an FTC robotics team in Shrewsbury. We build, code, compete, and share robotics with our community.</p>
      <div className="sj-actions"><a href="#robots" className="sj-button sj-button-primary">Explore our robots<Arrow direction="right" /></a><a href="#team" className="sj-button">Meet the team<Arrow /></a></div>
      <Link to="/hackshogun" className="sj-hack-promo" aria-label="HackShogun 2027, January 15 to 17, online. Learn more."><span><span className="sj-eyebrow">Jan 15–17, 2027 · Online</span><strong>HackShogun 2027</strong></span><Arrow /></Link>
    </div>
    <figure className="sj-hero-photo">
      <div className="sj-photo-label"><span>At competition</span><span>2025–2026</span></div>
      <div className="sj-photo-frame"><img src={teamPhoto} alt="Saint John's Shogun team celebrating a competition win" loading="eager" decoding="async" width="866" height="445" /></div>
      <figcaption><span><strong>The team at FTC States</strong><span>2025–2026 season</span></span><span className="sj-photo-number" aria-hidden="true">27598</span></figcaption>
    </figure>
    <div className="sj-hero-bottom"><p>Saint John's High School · FTC 27598</p><a href="#robots">See what we build<Arrow direction="down" /></a></div>
  </section>
);
export default Hero;
