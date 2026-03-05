const values = ["Compassion", "Zeal", "Trust", "Simplicity", "Humility"];

const About = () => {
  return (
    <section id="about" className="min-h-screen scroll-mt-24 flex items-center justify-center bg-card px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-5xl font-bold text-foreground md:text-6xl">
          Our <span className="text-primary red-glow">Story</span>
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Mission</h3>
            <p className="leading-relaxed text-muted-foreground">
              Our mission at Saint John's Shogun is to design and build innovative robots while creating a lasting
              impact through outreach. We aim to combine engineering excellence with meaningful community engagement,
              as well as building strong connections across the engineering, science, and technology communities.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Vision</h3>
            <p className="leading-relaxed text-muted-foreground">
              To be recognized as a leading team in FTC, setting new standards for FIRST Robotics, collaborative
              problem-solving, and inspiring future generations to pursue careers in science, technology, engineering,
              and mathematics.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Values</h3>
            <ul className="list-inside list-disc space-y-3 text-muted-foreground marker:text-primary">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Impact</h3>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-3 text-center">
                <div className="text-2xl font-bold text-primary">600+</div>
                <div className="text-sm text-muted-foreground">Students &amp; FTC Members</div>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-3 text-center">
                <div className="text-2xl font-bold text-primary">200K+</div>
                <div className="text-sm text-muted-foreground">Viewers Online</div>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-3 text-center">
                <div className="text-2xl font-bold text-primary">275+</div>
                <div className="text-sm text-muted-foreground">Families Impacted</div>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-3 text-center">
                <div className="text-2xl font-bold text-primary">200,950+</div>
                <div className="text-sm text-muted-foreground">Total Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
