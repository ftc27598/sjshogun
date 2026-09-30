import robotImage2024 from "@/assets/robot-2024.jpg";
import robotImage2025 from "@/assets/robot-2025.jpg";
import Reveal from "@/components/Reveal";

const robots = [
  {
    year: "2025-26",
    title: "At FTC States",
    image: robotImage2025,
    alt: "SJ Shogun 2025-2026 robot with competition awards",
    blurb: "Our 2025-26 robot competed at States.",
    awards: ["Inspire Award", "Control Award", "Winning Alliance Award"],
  },
  {
    year: "2024-25",
    title: "The Connect Award season",
    image: robotImage2024,
    alt: "SJ Shogun 2024-2025 robot",
    blurb: "In the 2024-25 season, we won the Connect Award at Hawk Nest's Havoc Qualifier.",
    awards: ["Connect Award for Community Outreach"],
  },
];

const Robots = () => (
  <section id="robots" className="section-space">
    <div className="page-width">
      <Reveal><div className="section-heading"><p className="section-label"><span>03</span> The robots</p><h2 className="section-title">Our robots</h2><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">Here are the robots we've brought to competition.</p></div></Reveal>
      <Reveal><article className="coming-soon mt-14 grid items-center gap-5 border-y border-primary py-8 md:grid-cols-[1fr_0.85fr] md:gap-14">
        <div className="coming-soon-art flex min-h-52 items-center justify-center overflow-hidden border border-border" aria-hidden="true"><span>26/27</span></div>
        <div><p className="eyebrow text-primary">2026-2027 season</p><h3 className="robot-title mt-4">Coming soon</h3><p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">We'll add photos and details for the 2026-2027 robot when they're ready.</p></div>
      </article></Reveal>
      <div className="border-t border-border">
        {robots.map((robot, index) => (
          <Reveal key={robot.year} delay={index * 80}>
            <article className={`robot-row grid gap-8 border-b border-border py-10 md:grid-cols-[1fr_0.85fr] md:items-center md:gap-14 ${index === 1 ? "alternate" : ""}`}>
              <div className="robot-media">
                <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"><span>Machine / 0{index + 1}</span><span>FTC Season</span></div>
                <div className="robot-image-wrap"><img src={robot.image} alt={robot.alt} className="robot-image" loading="lazy" decoding="async" /></div>
              </div>
              <div className="robot-info">
                <p className="eyebrow text-primary">Season {robot.year}</p>
                <h3 className="robot-title mt-4">{robot.title}</h3>
                <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">{robot.blurb}</p>
                <div className="mt-8 border-t border-border pt-5"><p className="eyebrow text-muted-foreground">Awards</p><ul className="mt-4 space-y-3">{robot.awards.map((award) => <li key={award} className="flex items-center gap-3 text-sm"><span className="award-mark" aria-hidden="true" />{award}</li>)}</ul></div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
export default Robots;
