import Reveal from "@/components/Reveal";
import teamPhoto from "@/assets/team-photo.png";

type TeamMember = { name: string; role: string };
type TeamSection = { title: string; members: TeamMember[] };
const sections: TeamSection[] = [
  { title: "Captains", members: [{ name: "Ayan", role: "Captain" }, { name: "Andy", role: "Captain" }, { name: "Rushil", role: "Captain" }] },
  { title: "Outreach", members: [{ name: "Anay", role: "Outreach" }, { name: "Cyril", role: "Outreach" }, { name: "Krish", role: "Outreach" }, { name: "Vihaan", role: "Outreach" }] },
  { title: "Programming", members: [{ name: "Hexi", role: "Programmer" }, { name: "Vihaan", role: "Programmer" }, { name: "Matt", role: "Programmer" }] },
  { title: "Build", members: [{ name: "Vismay", role: "Build Co-Captain" }, { name: "Ken", role: "Builder" }, { name: "Nick", role: "Builder" }, { name: "Arjun", role: "Builder" }, { name: "Zander", role: "Builder" }] },
];

const Team = () => (
  <section id="team" className="sj-section sj-width" aria-labelledby="team-title">
    <Reveal><div className="sj-section-heading"><div><p className="sj-eyebrow">02 / The people</p><h2 id="team-title">Many minds.<br /><span>One team.</span></h2></div><p>Here are the people working on build, code, and outreach.</p></div></Reveal>
    <Reveal><figure className="sj-team-photo"><img src={teamPhoto} alt="Saint John's Shogun team together at competition" loading="lazy" decoding="async" width="866" height="445" /><figcaption>Shogun at competition <span>Team 27598</span></figcaption></figure></Reveal>
    <div className="sj-roster">{sections.map((section, index) => <Reveal key={section.title} delay={index * 40}><div className="sj-roster-row"><h3><span>0{index + 1}</span>{section.title}</h3><ul>{section.members.map(member => <li key={section.title + member.name}><strong>{member.name}</strong><span>{member.role}</span></li>)}</ul></div></Reveal>)}</div>
  </section>
);
export default Team;
