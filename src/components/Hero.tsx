import heroImage from "@/assets/robot-2024.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="SJ Shogun Robotics 2024-2025 Robot"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">SJ</span>{" "}
          <span className="text-primary red-glow">SHOGUN</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Precision. Creativity. Impact. Building the future of robotics, one innovation at a time.
        </p>
      </div>
    </section>
  );
};

export default Hero;
