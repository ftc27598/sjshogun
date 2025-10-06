const Team = () => {
  const outreachTeam = [
    { name: "Ayan", role: "Outreach Captain" },
    { name: "Anay", role: "Outreach Member" },
    { name: "Cyril", role: "Outreach Member" },
    { name: "Krish", role: "Outreach Member" }
  ];

  const programmingTeam = [
    { name: "Jeremy", role: "Programming Captain" },
    { name: "Hexi", role: "Programming Member" },
    { name: "Andy", role: "Programming Member" },
    { name: "Zander", role: "Programming Member" },
    { name: "Vihaan", role: "Programming Member" },
    { name: "Neil", role: "Programming Member" }
  ];

  const buildTeam = [
    { name: "Rushil", role: "Build Captain" },
    { name: "Vineeth", role: "Build Member" },
    { name: "Gowtham", role: "Build Member" },
    { name: "Jack", role: "Build Member" },
    { name: "Ken", role: "Build Member" },
    { name: "Ethan", role: "Build Member" }
  ];

  return (
    <section id="team" className="min-h-screen flex items-center justify-center px-6 py-20 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-foreground">
          Our <span className="text-primary red-glow">Team</span>
        </h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6 text-center">Outreach</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {outreachTeam.map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-foreground">{member.name}</h4>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-6 text-center">Programming</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmingTeam.map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-foreground">{member.name}</h4>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-6 text-center">Build</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildTeam.map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-foreground">{member.name}</h4>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;