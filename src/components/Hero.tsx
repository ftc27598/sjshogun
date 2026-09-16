import { ArrowRight, PlayCircle } from "lucide-react";
import teamPhoto from "@/assets/team-photo.png";
import northboroPizzaLogo from "@/assets/northboro-pizza-logo.png";

const partners = [
  { name: "Coghlin Companies", logo: null },
  { name: "Northboro House of Pizza", logo: northboroPizzaLogo },
  { name: "Unibank", logo: null },
  { name: "Saint John's Robotics Camp", logo: null },
];

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center overflow-hidden">
      <img
        src={teamPhoto}
        alt="Saint John's Shogun team celebrating a competition win"
        className="absolute inset-0 h-full w-full object-cover object-top"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
      <div className="absolute inset-0 bg-background/30" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-28 text-center">
        <div className="mb-6 inline-flex animate-fade-slide-in items-center gap-3 rounded-full bg-white/5 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur [animation-delay:0ms]">
          <span className="rounded-full bg-primary px-2.5 py-0.5 font-sans text-xs font-semibold text-primary-foreground">
            Team 27598
          </span>
          <span className="text-sm font-medium text-white/90">Competing at FTC States 2025&ndash;2026</span>
        </div>

        <h1 className="animate-fade-slide-in text-4xl font-bold leading-tight tracking-tight text-white [animation-delay:100ms] sm:text-5xl md:text-6xl lg:text-7xl">
          SAINT JOHN&apos;S
          <br />
          <span className="text-primary red-glow">SHOGUN</span>
        </h1>

        <p className="animate-fade-slide-in mx-auto mt-6 max-w-2xl text-base text-white/80 [animation-delay:200ms] sm:text-lg">
          Precision. Creativity. Impact. We design and build competition robots while creating a lasting impact
          through outreach across our community.
        </p>

        <div className="animate-fade-slide-in mt-10 flex flex-col items-center justify-center gap-3 [animation-delay:300ms] sm:flex-row sm:gap-4">
          <a
            href="#team"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Meet the Team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#robots"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-white/15"
          >
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            See Our Robots
          </a>
        </div>

        <div className="mx-auto mt-20 max-w-4xl">
          <p className="animate-fade-slide-in text-center text-sm text-white/60 [animation-delay:400ms]">
            Proudly supported by our sponsors &amp; partners
          </p>
          <div className="animate-fade-slide-in mt-6 grid grid-cols-2 items-center justify-items-center gap-6 text-white/70 [animation-delay:500ms] sm:grid-cols-4">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href="#sponsors"
                className="flex h-9 items-center justify-center opacity-80 transition-opacity hover:opacity-100"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-9 max-w-[120px] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="text-center text-xs font-semibold uppercase tracking-wide text-white/70 sm:text-sm">
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
