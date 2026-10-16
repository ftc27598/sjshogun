import { Link } from "react-router-dom";
import { partners } from "@/lib/partners";
import Reveal from "@/components/Reveal";
import Arrow from "@/components/Arrow";

const Sponsors = () => (
  <section id="sponsors" className="sj-section sj-width sj-sponsors" aria-labelledby="sponsors-title">
    <Reveal><div className="sj-section-heading"><div><p className="sj-eyebrow">03 / Our sponsors</p><h2 id="sponsors-title">Behind every build.<br /><span>Thank you.</span></h2></div><p>These partners support our team and its work in STEM education.</p></div></Reveal>
    <div className="sj-partner-grid">{partners.map((partner, index) => <Reveal key={partner.name} delay={index * 40}><div className="sj-partner"><span className="sj-partner-index">0{index + 1} / Partner</span>{partner.logo ? <img src={partner.logo} alt={partner.name + " logo"} loading="lazy" decoding="async" /> : <span className="sj-partner-wordmark">{partner.name}</span>}{partner.logo && <p>{partner.name}</p>}</div></Reveal>)}</div>
    <Reveal><div className="sj-partner-cta"><div><p className="sj-eyebrow">Become a partner</p><h3>Help build what's next.</h3><p>Support the team. Get your logo featured on our social media, merchandise, and robot.</p></div><Link to="/sponsorship" className="sj-button sj-button-primary">Explore sponsorship<Arrow /></Link></div></Reveal>
  </section>
);
export default Sponsors;
