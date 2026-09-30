import { Link } from "react-router-dom";
import logoImage from "@/assets/sjs-logo.png";
import Arrow from "@/components/Arrow";

const Footer = () => (
  <footer className="footer border-t border-border bg-card">
    <div className="page-width py-12">
      <div className="grid gap-10 md:grid-cols-[1fr_auto]">
        <div><img src={logoImage} alt="" className="h-12 w-12 rounded-full" width="48" height="48" loading="lazy" /><p className="mt-6 font-display text-5xl font-bold tracking-tight">SHOGUN</p><p className="mt-2 text-sm text-muted-foreground">Saint John's High School · Shrewsbury, Massachusetts · FTC 27598</p></div>
        <div><p className="eyebrow text-primary">Get in touch</p><a href="mailto:dojorojorobotics@gmail.com" className="footer-email mt-4 flex items-center gap-3 text-lg sm:text-xl">dojorojorobotics@gmail.com <Arrow className="h-4 w-4 shrink-0" /></a><Link to="/hackshogun" className="text-link mt-6 inline-flex">HackShogun <Arrow /></Link></div>
      </div>
      <div className="mt-16 flex flex-col gap-4 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} SJ Shogun Robotics. All rights reserved.</p><p>We are using <a className="underline underline-offset-4 hover:text-foreground" href="https://robodk.com/" target="_blank" rel="noopener noreferrer">RoboDK</a>.</p></div>
    </div>
  </footer>
);
export default Footer;
