import { Link } from "react-router-dom";
import logoImage from "@/assets/sjs-logo.png";
import Arrow from "@/components/Arrow";

const Footer = () => (
  <footer className="sj-footer">
    <div className="sj-width">
      <div className="sj-footer-main"><div><Link to="/" className="sj-brand" aria-label="Saint John's Shogun home"><img src={logoImage} alt="" width="38" height="38" /><span>SJ <span>Shogun</span></span></Link><p>Saint John's High School<br />Shrewsbury, Massachusetts · FTC 27598</p></div><div className="sj-footer-contact"><p className="sj-eyebrow">Get in touch</p><a href="mailto:dojorojorobotics@gmail.com" className="sj-footer-email">dojorojorobotics@gmail.com<Arrow /></a><div className="sj-footer-links"><Link to="/hackshogun">HackShogun<Arrow /></Link><Link to="/sponsorship">Sponsorship<Arrow /></Link></div></div></div>
      <div className="sj-footer-bottom"><p>© {new Date().getFullYear()} SJ Shogun Robotics. All rights reserved.</p><p>We are using <a href="https://robodk.com/" target="_blank" rel="noopener noreferrer">RoboDK</a>.</p></div>
    </div>
  </footer>
);
export default Footer;
