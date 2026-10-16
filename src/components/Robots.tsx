import robotImage2024 from "@/assets/robot-2024.jpg";
import robotImage2025 from "@/assets/robot-2025.jpg";
import Reveal from "@/components/Reveal";

const robots = [
  { year: "2025–2026", title: "DECODE", image: robotImage2025, alt: "SJ Shogun's DECODE robot with competition awards", blurb: "Our 2025–26 robot competed at States.", awards: ["Inspire Award", "Control Award", "Winning Alliance Award"] },
  { year: "2024–2025", title: "INTO THE DEEP", image: robotImage2024, alt: "SJ Shogun's INTO THE DEEP robot", blurb: "In the 2024–25 season, we won the Connect Award at Hawk Nest's Havoc Qualifier.", awards: ["Connect Award for Community Outreach"] },
];

const Robots = () => (
  <section id="robots" className="sj-section sj-width" aria-labelledby="robots-title">
    <Reveal><div className="sj-section-heading"><div><p className="sj-eyebrow">01 / The robots</p><h2 id="robots-title">Built here.<br /><span>Tested on the field.</span></h2></div><p>Here are the robots we've brought to competition.</p></div></Reveal>
    <Reveal><article className="sj-next-robot"><div className="sj-next-mark" aria-hidden="true">26<span>/</span>27</div><div><p className="sj-eyebrow">2026–2027 robot</p><h3>Coming soon.</h3><p>We'll add photos and details for the 2026–2027 robot when they're ready.</p></div><span className="sj-tag">Next chapter</span></article></Reveal>
    <div className="sj-robot-list">{robots.map((robot, index) => <Reveal key={robot.year}><article className={"sj-robot" + (index % 2 ? " sj-robot-alternate" : "")}>
      <div className="sj-robot-media"><img src={robot.image} alt={robot.alt} loading="lazy" decoding="async" /><span className="sj-image-badge">FTC · {robot.year}</span></div>
      <div className="sj-robot-copy"><p className="sj-eyebrow">{robot.year} season</p><h3>{robot.title}</h3><p>{robot.blurb}</p><div className="sj-awards"><p className="sj-eyebrow">Season highlights</p><ul>{robot.awards.map(award => <li key={award}><span aria-hidden="true" />{award}</li>)}</ul></div></div>
    </article></Reveal>)}</div>
  </section>
);
export default Robots;
