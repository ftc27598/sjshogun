import { Target, Eye, Heart, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";

const values = ["Compassion", "Zeal", "Trust", "Simplicity", "Humility"];

const impactStats = [
  { value: "600+", label: "Students & FTC Members" },
  { value: "200K+", label: "Viewers Online" },
  { value: "275+", label: "Families Impacted" },
  { value: "200,950+", label: "Total Impacted" },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 border-y border-border bg-card px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-16 text-center text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Our <span className="text-primary red-glow">Story</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal delay={0} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background/60 p-8 transition-colors hover:border-primary/30">
              <Target className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-foreground">Mission</h3>
              <p className="font-sans leading-relaxed text-muted-foreground">
                To design and build innovative robots while creating a lasting impact through outreach&mdash;combining
                engineering excellence with meaningful community engagement.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background/60 p-8 transition-colors hover:border-primary/30">
              <Eye className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-foreground">Vision</h3>
              <p className="font-sans leading-relaxed text-muted-foreground">
                To be recognized as a leading FTC team, setting new standards for collaborative problem-solving and
                inspiring the next generation to pursue STEM.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background/60 p-8 transition-colors hover:border-primary/30">
              <Heart className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-foreground">Values</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-sans text-muted-foreground">
                {values.map((value) => (
                  <li key={value} className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background/60 p-8 transition-colors hover:border-primary/30">
              <TrendingUp className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-foreground">Impact</h3>
              <div className="grid grid-cols-2 gap-3">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-primary/5 p-3 text-center">
                    <div className="font-display text-xl font-bold text-primary">{stat.value}</div>
                    <div className="font-sans text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
