import Reveal from "@/components/Reveal";

const values = ["Compassion", "Zeal", "Trust", "Simplicity", "Humility"];
const impactStats = [
  { value: "600+", label: "Students & FTC Members" },
  { value: "200K+", label: "Viewers Online" },
  { value: "275+", label: "Families Impacted" },
  { value: "200,950+", label: "Total Impacted" },
];

const About = () => (
  <section id="about" className="section-space bg-card">
    <div className="page-width">
      <Reveal><div className="section-heading"><p className="section-label"><span>02</span> What we do</p><h2 className="section-title">Robots and outreach</h2></div></Reveal>
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:gap-24">
        <div>
          {[{ title: "Our goal", text: "We design and build robots, and we get other people involved through outreach. Both matter to our team." }, { title: "Looking ahead", text: "We want to keep getting better at FTC, solve problems together, and get more students interested in STEM." }].map((item, i) => (
            <Reveal key={item.title} delay={i * 80}><article className="grid gap-4 border-t border-border py-7 sm:grid-cols-[100px_1fr] sm:gap-8"><h3 className="text-lg font-medium">{item.title}</h3><p className="text-sm leading-7 text-muted-foreground">{item.text}</p></article></Reveal>
          ))}
        </div>
        <Reveal delay={100}><div className="border-t border-primary pt-7"><h3 className="mb-5 text-lg font-medium">What matters to us</h3><ul>{values.map((value, i) => <li key={value} className="flex items-center gap-5 border-b border-border py-3"><span className="font-mono text-[10px] text-primary">0{i + 1}</span><span className="text-muted-foreground">{value}</span></li>)}</ul></div></Reveal>
      </div>
      <Reveal><div className="mt-14 border-t border-border pt-8"><p className="eyebrow mb-8 text-muted-foreground">Outreach by the numbers</p><dl className="impact-grid grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">{impactStats.map((stat) => <div key={stat.label}><dt className="text-xs text-muted-foreground">{stat.label}</dt><dd className="impact-number mt-3">{stat.value}</dd></div>)}</dl></div></Reveal>
    </div>
  </section>
);
export default About;
