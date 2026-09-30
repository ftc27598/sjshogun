import northboroPizzaLogo from "@/assets/northboro-pizza-logo.png";
import Reveal from "@/components/Reveal";
import Arrow from "@/components/Arrow";

const partners = [
  { name: "Coghlin Companies", logo: null },
  { name: "Northboro House of Pizza", logo: northboroPizzaLogo },
  { name: "Unibank", logo: null },
  { name: "Saint John's Robotics Camp", logo: null },
];

const Sponsors = () => (
  <section id="sponsors" className="section-space">
    <div className="page-width">
      <Reveal><div className="section-heading"><p className="section-label"><span>05</span> Our partners</p><h2 className="section-title">Thanks to our partners</h2><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">These partners support our team and its work in STEM education.</p></div></Reveal>
      <div className="partner-grid mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner, index) => <Reveal key={partner.name} delay={index * 50}><div className="partner-cell flex min-h-36 flex-col items-start justify-between gap-6 border-b border-r border-border p-6">
          <span className="font-mono text-[10px] tracking-[0.2em] text-primary">0{index + 1} / PARTNER</span>
          {partner.logo && <img src={partner.logo} alt="Northboro House of Pizza logo" className="h-12 max-w-40 object-contain" loading="lazy" decoding="async" />}
          <span className="text-lg font-medium leading-tight">{partner.name}</span>
        </div></Reveal>)}
      </div>
      <Reveal><div className="partner-cta mt-14 grid gap-7 border-t border-primary pt-8 md:grid-cols-[1fr_auto] md:items-end">
        <div><p className="eyebrow text-primary">Become a partner</p><h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Want to support the team?</h3><p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">Email us if you'd like to work with Shogun.</p></div>
        <a href="mailto:dojorojorobotics@gmail.com" className="action-button w-fit" aria-label="Email SJ Shogun about partnership opportunities">Contact us <Arrow /></a>
      </div></Reveal>
    </div>
  </section>
);
export default Sponsors;
