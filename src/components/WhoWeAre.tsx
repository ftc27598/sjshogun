const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="min-h-screen scroll-mt-24 flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 text-5xl font-bold text-foreground md:text-6xl">
          Who We <span className="text-primary red-glow">Are</span>
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
          <p>
            We are the Saint John's Shogun, an FTC team in Shrewsbury representing our school, Saint John's High
            School, where every team member is vital to our success. Our mission is to design and build innovative
            robots while creating a lasting impact through outreach.
          </p>
          <p>
            We aim to combine engineering excellence with meaningful community engagement, as well as building strong
            connections across the engineering, science, and technology communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
