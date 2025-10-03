const Sponsors = () => {
  const sponsors = [
    { name: "Tech Corp", tier: "Platinum" },
    { name: "Innovation Labs", tier: "Gold" },
    { name: "Engineering Solutions", tier: "Gold" },
    { name: "Future Robotics", tier: "Silver" },
    { name: "STEM Education Foundation", tier: "Silver" },
    { name: "Local Business Partners", tier: "Bronze" }
  ];

  return (
    <section id="sponsors" className="min-h-screen flex items-center justify-center px-6 py-20 bg-card">
      <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
          Our <span className="text-primary red-glow">Sponsors</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          We are grateful for the support of our sponsors who make our mission possible. 
          Their commitment to STEM education and innovation drives our success.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-background border border-border p-6 rounded-lg hover:border-primary transition-all duration-300"
            >
              <div className="text-primary font-semibold mb-2">{sponsor.tier}</div>
              <div className="text-xl font-bold">{sponsor.name}</div>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-border">
          <h3 className="text-2xl font-semibold mb-4">Become a Sponsor</h3>
          <p className="text-muted-foreground mb-6">
            Join us in shaping the future of robotics and STEM education.
          </p>
          <a
            href="mailto:rojodojorobotics@gmail.com"
            className="inline-block px-8 py-3 bg-primary text-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 red-glow"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
