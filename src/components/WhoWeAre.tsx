const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
          Who We <span className="text-primary red-glow">Are</span>
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p>
            SJ Shogun is a competitive robotics team driven by innovation, collaboration, and a passion for STEM excellence. We are engineers, designers, programmers, and problem-solvers united by a common goal: pushing the boundaries of what's possible.
          </p>
          <p>
            From conceptualization to competition, we embody precision engineering and creative thinking. Our team thrives on challenges, transforming complex problems into elegant solutions through cutting-edge technology and teamwork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
