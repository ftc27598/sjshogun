import { ArrowRight, Trophy } from "lucide-react";
import teamPhoto from "@/assets/team-photo.png";
import northboroPizzaLogo from "@/assets/northboro-pizza-logo.png";

const partners = [
  { name: "Coghlin Companies", logo: null },
  { name: "Northboro House of Pizza", logo: northboroPizzaLogo },
  { name: "Unibank", logo: null },
  { name: "SJ Robotics Camp", logo: null },
];

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-background">
      <img
        src={teamPhoto}
        alt="Saint John's Shogun team celebrating a competition win"
        className="absolute inset-0 h-full w-full object-cover object-top"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-32 text-center">
        <div className="animate-fade-slide-in mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-2.5 py-2 backdrop-blur-md [animation-delay:0ms]">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 font-sans text-xs font-bold uppercase tracking-wide text-primary-foreground">
            <Trophy className="h-3 w-3" aria-hidden="true" />
            Team 27598
          </span>
          <span className="font-sans text-sm font-medium text-white/90">Competing at FTC States, 2025&ndash;2026</span>
        </div>

        <h1 className="animate-fade-slide-in text-5xl font-bold leading-[0.95] text-white [animation-delay:100ms] sm:text-6xl md:text-7xl lg:text-8xl">
          Saint John&apos;s
          <br />
          <span className="text-primary red-glow">Shogun</span>
        </h1>

        <p className="animate-fade-slide-in mx-auto mt-6 max-w-2xl font-sans text-base text-white/80 [animation-delay:200ms] sm:text-lg">
          An FTC robotics team engineering competition-ready machines and driving lasting community impact&mdash;built
          on precision, creativity, and relentless iteration.
        </p>

        <div className="animate-fade-slide-in mt-10 flex flex-col items-center justify-center gap-3 [animation-delay:300ms] sm:flex-row sm:gap-4">
          <a
            href="#team"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/0.45)]"
          >
            Meet the Team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#robots"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-sans text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            See Our Robots
          </a>
        </div>

        <div className="mx-auto mt-20 max-w-4xl">
          <p className="animate-fade-slide-in font-sans text-xs uppercase tracking-[0.2em] text-white/50 [animation-delay:400ms]">
            Proudly supported by our sponsors &amp; partners
          </p>
          <div className="animate-fade-slide-in mt-6 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-4 [animation-delay:500ms] sm:grid-cols-4">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href="#sponsors"
                className="flex h-9 items-center justify-center opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-9 max-w-[110px] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="text-center font-sans text-xs font-semibold uppercase tracking-wide text-white/70 sm:text-sm">
                    {partner.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
