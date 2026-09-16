import Reveal from "@/components/Reveal";

type TeamMember = {
  name: string;
  role: string;
};

type TeamSection = {
  title: string;
  members: TeamMember[];
};

const sections: TeamSection[] = [
  {
    title: "Captains",
    members: [
      { name: "Ayan", role: "Captain" },
      { name: "Andy", role: "Captain" },
      { name: "Rushil", role: "Captain" },
    ],
  },
  {
    title: "Outreach",
    members: [
      { name: "Anay", role: "Outreach" },
      { name: "Cyril", role: "Outreach" },
      { name: "Krish", role: "Outreach" },
      { name: "Vihaan", role: "Outreach" },
    ],
  },
  {
    title: "Programming",
    members: [
      { name: "Hexi", role: "Programmer" },
      { name: "Vihaan", role: "Programmer" },
      { name: "Matt", role: "Programmer" },
    ],
  },
  {
    title: "Build",
    members: [
      { name: "Vismay", role: "Build Co-Captain" },
      { name: "Ken", role: "Builder" },
      { name: "Nick", role: "Builder" },
      { name: "Arjun", role: "Builder" },
      { name: "Zander", role: "Builder" },
    ],
  },
];

const MemberCard = ({ member }: { member: TeamMember }) => (
  <div className="group rounded-xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card/80 hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)]">
    <h4 className="text-lg font-semibold text-foreground">{member.name}</h4>
    <p className="font-sans text-sm text-primary">{member.role}</p>
  </div>
);

const Team = () => {
  return (
    <section id="team" className="scroll-mt-24 bg-background px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-16 text-center text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Our <span className="text-primary red-glow">Team</span>
          </h2>
        </Reveal>

        <div className="space-y-14">
          {sections.map((section, sectionIndex) => (
            <Reveal key={section.title} delay={sectionIndex * 60}>
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="whitespace-nowrap text-xl font-bold uppercase tracking-wide text-primary">
                    {section.title}
                  </h3>
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {section.members.map((member) => (
                    <MemberCard key={`${section.title}-${member.name}`} member={member} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
