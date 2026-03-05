import robotImage2024 from "@/assets/robot-2024.jpg";
import robotImage2025 from "@/assets/robot-2025.jpg";

const Robots = () => {
  return (
    <section id="robots" className="min-h-screen scroll-mt-24 flex items-center justify-center bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-5xl font-bold text-foreground md:text-6xl">
          Our <span className="text-primary red-glow">Robots</span>
        </h2>

        <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="group relative">
              <img
                src={robotImage2025}
                alt="SJ Shogun 2025-2026 robot"
                className="h-auto w-full rounded-lg shadow-2xl"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">2025-2026 Season</h3>
            <p className="leading-relaxed text-muted-foreground">
              Our current robot competing in the 2025-2026 season. We are currently competing at states.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Awards</h4>
              <div className="flex flex-wrap gap-3">
                <div className="inline-block rounded-lg border border-primary/20 bg-primary/10 px-4 py-2">
                  <span className="font-semibold text-primary">Inspire Award</span>
                </div>
                <div className="inline-block rounded-lg border border-primary/20 bg-primary/10 px-4 py-2">
                  <span className="font-semibold text-primary">Control Award</span>
                </div>
                <div className="inline-block rounded-lg border border-primary/20 bg-primary/10 px-4 py-2">
                  <span className="font-semibold text-primary">Winning Alliance Award</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="group relative">
              <img
                src={robotImage2024}
                alt="SJ Shogun 2024-2025 robot"
                className="h-auto w-full rounded-lg shadow-2xl"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">2024-2025 Season</h3>
            <p className="leading-relaxed text-muted-foreground">
              This is our robot for the 2024-2025 season where we won the Connect Award at Hawk Nest's Havoc
              Qualifier.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Awards</h4>
              <div className="inline-block rounded-lg border border-primary/20 bg-primary/10 px-4 py-2">
                <span className="font-semibold text-primary">Connect Award - Community Outreach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Robots;
