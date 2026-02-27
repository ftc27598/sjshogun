const Team = () => {
  const captains = [
    { name: "Ayan", role: "Captain" },
    { name: "Jeremy", role: "Captain" },
    { name: "Rushil", role: "Captain" },
  ];

  const leadership = [
    { name: "Kirpal", role: "Project Manager" },
  ];

  const outreachTeam = [
    { name: "Anay", role: "Outreach" },
    { name: "Cyril", role: "Outreach" },
    { name: "Krish", role: "Outreach" },
  ];

  const programmingTeam = [
    { name: "Andy", role: "Programmer" },
    { name: "Vihaan", role: "Programmer" },
    { name: "David", role: "Programmer" },
  ];

  const buildTeam = [
    { name: "Vineeth", role: "Build Co-Captain" },
    { name: "Gowtham", role: "Builder" },
    { name: "Jack", role: "Builder" },
    { name: "Ken", role: "Builder" },
    { name: "Vismay", role: "Builder" },
    { name: "Zander", role: "Builder" },
  ];

  const MemberCard = ({ member }: { member: { name: string; role: string } }) => (
    <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors">
      <div className="text-center">
        <h4 className="text-xl font-semibold text-foreground">{member.name}</h4>
        <p className="text-sm text-primary">{member.role}</p>
      </div>
    </div>
  );

  return (
    <section id="team" className="min-h-screen flex items-center justify-center px-6 py-20 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-foreground">
          Our <span className="text-primary red-glow">Team</span>
        </h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6 text-center">Captains</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {captains.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-6 text-center">Leadership</h3>
            <div className="grid md:grid-cols-1 max-w-xs mx-auto gap-6">
              {leadership.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-6 text-center">Outreach</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {outreachTeam.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-6 text-center">Programming</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {programmingTeam.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-6 text-center">Build</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {buildTeam.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
