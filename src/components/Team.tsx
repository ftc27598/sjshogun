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
  <section id="team" className="section-space bg-card">
    <div className="page-width">
      <Reveal><div className="section-heading"><p className="section-label"><span>04</span> The team</p><h2 className="section-title">Meet the team</h2><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">Here are the people working on build, code, and outreach.</p></div></Reveal>
      <Reveal><div className="team-banner mt-12"><img src={teamPhoto} alt="Saint John's Shogun team together at competition" loading="lazy" decoding="async" /><span className="team-banner-caption">SHOGUN AT COMPETITION / TEAM 27598</span></div></Reveal>
      <div className="mt-12 border-t border-border">
        {sections.map((section, index) => (
          <Reveal key={section.title} delay={index * 50}>
            <div className="roster-row grid gap-5 border-b border-border py-7 md:grid-cols-[0.38fr_1fr] md:gap-12">
              <h3 className="flex items-baseline gap-4 text-xl font-medium"><span className="font-mono text-[10px] text-primary">0{index + 1}</span>{section.title}</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">{section.members.map((member) => <li key={section.title + member.name} className="min-w-0"><span className="block text-base font-medium">{member.name}</span><span className="mt-1 block text-xs text-muted-foreground">{member.role}</span></li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
export default Team;
