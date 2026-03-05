import northboroPizzaLogo from "@/assets/northboro-pizza-logo.png";

const Sponsors = () => {
  const partners = [{
    name: "Coghlin Companies",
    logo: null
  }, {
    name: "Northboro House of Pizza",
    logo: northboroPizzaLogo
  }, {
    name: "Unibank",
    logo: null
  }, {
    name: "Saint John's Robotics Camp",
    logo: null
  }];
  return <section id="sponsors" className="min-h-screen scroll-mt-24 flex items-center justify-center px-6 py-20 bg-card">
      <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
          Our <span className="text-primary red-glow">Partners</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          We are grateful for the support of our partners who make our mission possible. 
          Their commitment to STEM education and innovation drives our success.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {partners.map((partner) => <div key={partner.name} className="bg-background border border-border p-8 rounded-lg hover:border-primary transition-all duration-300 flex flex-col items-center justify-center min-h-[160px] gap-4">
              {partner.logo ? (
                <>
                  <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-32 max-w-full object-contain" loading="lazy" decoding="async" />
                  <div className="text-lg font-bold text-center">{partner.name}</div>
                </>
              ) : (
                <div className="text-xl font-bold text-center">{partner.name}</div>
              )}
            </div>)}
        </div>

        <div className="pt-12 border-t border-border">
          <h3 className="text-2xl font-semibold mb-4">Become a Partner</h3>
          <p className="text-muted-foreground mb-6">Join us in shaping the future of robotics and STEM education.</p>
          <a href="mailto:dojorojorobotics@gmail.com" className="inline-block px-8 py-3 bg-primary text-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 red-glow" aria-label="Email SJ Shogun about partnership opportunities">
            Contact Us
          </a>
        </div>
      </div>
    </section>;
};
export default Sponsors;
