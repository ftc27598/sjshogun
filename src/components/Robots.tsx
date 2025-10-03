const Robots = () => {
  const robots = [
    {
      year: "2024-2025",
      name: "Project Phoenix",
      description: "Our latest creation featuring advanced autonomous navigation, precision manipulation, and adaptive AI-driven decision making systems.",
      specs: ["Autonomous Navigation", "AI-Powered", "Precision Control"]
    },
    {
      year: "2023-2024",
      name: "Titan V2",
      description: "Championship-winning design with revolutionary mechanical systems and unparalleled reliability in competitive environments.",
      specs: ["Regional Champion", "Robust Design", "High-Speed"]
    },
    {
      year: "2022-2023",
      name: "Velocity",
      description: "Speed-optimized robot showcasing innovative drivetrain design and competition-proven performance under pressure.",
      specs: ["Speed Optimized", "Innovative Drivetrain", "Competition Ready"]
    }
  ];

  return (
    <section id="robots" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
          Our <span className="text-primary red-glow">Robots</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {robots.map((robot, index) => (
            <div
              key={index}
              className="bg-card border border-border p-8 rounded-lg hover:border-primary transition-all duration-300 group"
            >
              <div className="text-primary font-semibold mb-2">{robot.year}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {robot.name}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {robot.description}
              </p>
              <div className="space-y-2">
                {robot.specs.map((spec, i) => (
                  <div key={i} className="text-sm text-muted-foreground flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Robots;
