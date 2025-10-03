const Robots = () => {
  const robots = [
    {
      year: "2024-2025",
      name: "Project Phoenix",
      description: "Our latest creation featuring advanced autonomous navigation, precision manipulation, and adaptive AI-driven decision making systems.",
      specs: ["Autonomous Navigation", "AI-Powered", "Precision Control"],
      awards: ["Connect Award - Community Outreach"]
    }
  ];

  return (
    <section id="robots" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-foreground">
          Our <span className="text-primary red-glow">Robots</span>
        </h2>
        
        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
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
              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Specifications:</h4>
                {robot.specs.map((spec, i) => (
                  <div key={i} className="text-sm text-muted-foreground flex items-center">
                    <span className="text-primary mr-2">▸</span>
                    {spec}
                  </div>
                ))}
              </div>
              {robot.awards && robot.awards.length > 0 && (
                <div className="pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-3">🏆 Awards & Recognition:</h4>
                  <div className="space-y-2">
                    {robot.awards.map((award, i) => (
                      <div key={i} className="text-sm text-primary flex items-center red-glow">
                        <span className="mr-2">★</span>
                        {award}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Robots;
