type TeamMember = {
  name: string;
  role: string;
};

type TeamSection = {
  title: string;
  members: TeamMember[];
  gridClassName?: string;
};

const sections: TeamSection[] = [
  {
    title: "Captains",
    members: [
      { name: "Ayan", role: "Captain" },
      { name: "Jeremy", role: "Captain" },
      { name: "Rushil", role: "Captain" },
    ],
  },
  {
    title: "Leadership",
    members: [{ name: "Kirpal", role: "Project Manager" }],
    gridClassName: "mx-auto max-w-xs md:grid-cols-1",
  },
  {
    title: "Outreach",
    members: [
      { name: "Anay", role: "Outreach" },
      { name: "Cyril", role: "Outreach" },
      { name: "Krish", role: "Outreach" },
    ],
  },
  {
    title: "Programming",
    members: [
      { name: "Andy", role: "Programmer" },
      { name: "Vihaan", role: "Programmer" },
      { name: "David", role: "Programmer" },
    ],
  },
  {
    title: "Build",
    members: [
      { name: "Vineeth", role: "Build Co-Captain" },
      { name: "Gowtham", role: "Builder" },
      { name: "Jack", role: "Builder" },
      { name: "Ken", role: "Builder" },
      { name: "Vismay", role: "Builder" },
      { name: "Zander", role: "Builder" },
    ],
  },
];

const MemberCard = ({ member }: { member: TeamMember }) => (
  <div className="flex flex-col items-center space-y-3 rounded-lg border border-primary/10 bg-background/50 p-6 transition-colors hover:border-primary/30">
    <div className="text-center">
      <h4 className="text-xl font-semibold text-foreground">{member.name}</h4>
      <p className="text-sm text-primary">{member.role}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <section id="team" className="min-h-screen scroll-mt-24 flex items-center justify-center bg-card px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-5xl font-bold text-foreground md:text-6xl">
          Our <span className="text-primary red-glow">Team</span>
        </h2>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-6 text-center text-3xl font-bold text-primary">{section.title}</h3>
              <div className={`grid gap-6 md:grid-cols-3 ${section.gridClassName ?? ""}`}>
                {section.members.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
