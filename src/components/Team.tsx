import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [{
    name: "Team Captain 1",
    role: "Team Captain",
    image: null,
    initials: "TC1"
  }, {
    name: "Team Captain 2",
    role: "Team Captain",
    image: null,
    initials: "TC2"
  }, {
    name: "Team Captain 3",
    role: "Team Captain",
    image: null,
    initials: "TC3"
  }, {
    name: "Project Manager",
    role: "Project Manager",
    image: null,
    initials: "PM"
  }];

  return (
    <section id="team" className="min-h-screen flex items-center justify-center px-6 py-20 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-foreground">
          Our <span className="text-primary red-glow">Team</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors">
              <Avatar className="w-32 h-32">
                <AvatarImage src={member.image || undefined} alt={member.name} />
                <AvatarFallback className="bg-primary/20 text-primary text-2xl">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;