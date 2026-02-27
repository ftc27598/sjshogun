const About = () => {
  return <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-foreground">
          Our <span className="text-primary red-glow">Story</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">Our mission at Saint John's Shogun is to design and build innovative robots while creating a lasting impact through outreach. We aim to combine engineering excellence with meaningful community engagement, as well as building strong connections across the engineering, science, and technology communities.</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">To be recognized as a leading team in FTC, setting new standards for first robotics, collaborative problem-solving, and inspiring future generations to pursue careers in science, technology, engineering, and mathematics.</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Values</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Compassion</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Zeal</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Trust</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Simplicity</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Humility</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Impact</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-2xl font-bold text-primary">600+</div>
                <div className="text-sm text-muted-foreground">Students & FTC Members</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-2xl font-bold text-primary">200K+</div>
                <div className="text-sm text-muted-foreground">Viewers Online</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-2xl font-bold text-primary">275+</div>
                <div className="text-sm text-muted-foreground">Families Impacted</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-2xl font-bold text-primary">200,950+</div>
                <div className="text-sm text-muted-foreground">Total Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;