const Hero = () => {
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">SAINT JOHN'S</span>{" "}
          <span className="text-primary red-glow">SHOGUN</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          Team 27598
        </p>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Precision. Creativity. Impact. Building the future of robotics, one innovation at a time.
        </p>
      </div>
    </section>;
};
export default Hero;
