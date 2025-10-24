import northboroPizzaLogo from "@/assets/northboro-pizza-logo.png";

const Sponsors = () => {
  const partners = [{
    name: "UniBank",
    logo: null
  }, {
    name: "Trader Joe's",
    logo: null
  }, {
    name: "SolidWorks",
    logo: null
  }, {
    name: "Amazon Robotics",
    logo: null
  }, {
    name: "Domino's",
    logo: null
  }, {
    name: "FIRST Robotics",
    logo: null
  }, {
    name: "Northboro House of Pizza",
    logo: northboroPizzaLogo
  }];
  return <section id="sponsors" className="min-h-screen flex items-center justify-center px-6 py-20 bg-card">
      <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
          Our <span className="text-primary red-glow">Partners</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          We are grateful for the support of our partners who make our mission possible. 
          Their commitment to STEM education and innovation drives our success.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, index) => <div key={index} className="bg-background border border-border p-8 rounded-lg hover:border-primary transition-all duration-300 flex items-center justify-center min-h-[120px]">
              {partner.logo ? (
                <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-20 max-w-full object-contain" />
              ) : (
                <div className="text-xl font-bold text-center">{partner.name}</div>
              )}
            </div>)}
        </div>

        <div className="pt-12 border-t border-border">
          <h3 className="text-2xl font-semibold mb-4">Become a Partner</h3>
          <p className="text-muted-foreground mb-6">Join us in shaping the future of robotics and STEM education.</p>
          <a href="mailto:rojodojorobotics@gmail.com" className="inline-block px-8 py-3 bg-primary text-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 red-glow">
            Contact Us
          </a>
        </div>
      </div>
    </section>;
};
export default Sponsors;