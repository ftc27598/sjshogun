import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: "Team Captain 1",
      role: "Team Captain",
      image: null,
      initials: "TC1"
    },
    {
      name: "Team Captain 2",
      role: "Team Captain",
      image: null,
      initials: "TC2"
    },
    {
      name: "Team Captain 3",
      role: "Team Captain",
      image: null,
      initials: "TC3"
    },
    {
      name: "Project Manager",
      role: "Project Manager",
      image: null,
      initials: "PM"
    }
  ];

  return (
    <section id="team" className="min-h-screen flex items-center justify-center px-6 py-20 bg-card">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
          Our <span className="text-primary red-glow">Team</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-background border border-border p-6 rounded-lg hover:border-primary transition-all duration-300 group text-center"
            >
              <div className="flex justify-center mb-4">
                <Avatar className="h-32 w-32 border-2 border-primary/20 group-hover:border-primary transition-colors">
                  <AvatarImage src={member.image || undefined} alt={member.name} />
                  <AvatarFallback className="text-2xl bg-secondary text-foreground">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-semibold">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Our leadership team drives innovation, collaboration, and excellence in everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
