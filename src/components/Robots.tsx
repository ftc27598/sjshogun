import robotImage from "@/assets/robot-2024.jpg";

const Robots = () => {
  return (
    <section id="robots" className="min-h-screen flex items-center justify-center px-6 py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-foreground">
          Our <span className="text-primary red-glow">Robots</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative group">
              <img 
                src={robotImage} 
                alt="Rojo Robo Dojo 2024-2025 Robot" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">2024-2025 Season</h3>
            <h4 className="text-2xl font-semibold text-foreground">Project Phoenix</h4>
            <p className="text-muted-foreground leading-relaxed">
              This is our robot for the 2024-2025 season where we won the Connect Award at Hawk Nest's Havoc Qualifier.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our latest creation featuring advanced autonomous navigation, precision manipulation, and adaptive AI-driven decision making systems.
            </p>
            
            <div className="space-y-4">
              <h5 className="text-xl font-semibold text-foreground">Key Features</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">Autonomous Navigation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">AI-Powered</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">Precision Control</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-xl font-semibold text-foreground">Awards</h5>
              <div className="inline-block bg-primary/10 border border-primary/20 rounded-lg px-4 py-2">
                <span className="text-primary font-semibold">🏆 Connect Award - Community Outreach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Robots;