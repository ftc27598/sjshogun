const WhoWeAre = () => {
  return <section id="who-we-are" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
          Who We <span className="text-primary red-glow">Are</span>
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p>We are the Saint John's Shōgun, an FTC team in Shrewsbury representing our school, Saint John's High School, where every team member is vital to our success. Our mission is to design and build innovative robots while creating a lasting impact through outreach.</p>
          <p>
            We aim to combine engineering excellence with meaningful community engagement, as well as building strong connections across the engineering, science, and technology communities.
          </p>
        </div>
      </div>
    </section>;
};
export default WhoWeAre;