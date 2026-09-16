import { Trophy } from "lucide-react";
import robotImage2024 from "@/assets/robot-2024.jpg";
import robotImage2025 from "@/assets/robot-2025.jpg";
import Reveal from "@/components/Reveal";

type Robot = {
  year: string;
  image: string;
  alt: string;
  blurb: string;
  awards: string[];
};

const robots: Robot[] = [
  {
    year: "2025–26",
    image: robotImage2025,
    alt: "SJ Shogun 2025-2026 robot",
    blurb: "Our current robot competing in the 2025–2026 season—currently competing at States.",
    awards: ["Inspire Award", "Control Award", "Winning Alliance Award"],
  },
  {
    year: "2024–25",
    image: robotImage2024,
    alt: "SJ Shogun 2024-2025 robot",
    blurb: "Our robot for the 2024–2025 season, where we won the Connect Award at Hawk Nest's Havoc Qualifier.",
    awards: ["Connect Award – Community Outreach"],
  },
];

const Robots = () => {
  return (
    <section id="robots" className="scroll-mt-24 bg-background px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-16 text-center text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Our <span className="text-primary red-glow">Robots</span>
          </h2>
        </Reveal>

        <div className="space-y-24">
          {robots.map((robot, index) => (
            <div
              key={robot.year}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div className="group relative overflow-hidden rounded-2xl border border-border shadow-2xl">
                  <img
                    src={robot.image}
                    alt={robot.alt}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 font-display text-sm font-bold uppercase tracking-wide text-primary backdrop-blur-md">
                    {robot.year}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">Season {robot.year}</h3>
                  <p className="font-sans leading-relaxed text-muted-foreground">{robot.blurb}</p>

                  <div className="space-y-3">
                    <h4 className="font-sans text-sm font-semibold uppercase tracking-wide text-foreground/70">
                      Awards
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {robot.awards.map((award) => (
                        <div
                          key={award}
                          className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5"
                        >
                          <Trophy className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                          <span className="font-sans text-sm font-semibold text-primary">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Robots;
