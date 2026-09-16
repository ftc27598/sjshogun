import Reveal from "@/components/Reveal";

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="scroll-mt-24 bg-background px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Who We Are
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mb-8 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Built at <span className="text-primary red-glow">Saint John&apos;s</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <div className="space-y-6 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              We are the Saint John&apos;s Shogun, an FTC team based in Shrewsbury representing Saint John&apos;s
              High School&mdash;where every member, from first-year builder to team captain, is vital to what we
              build together.
            </p>
            <p>
              We combine engineering excellence with meaningful community engagement, forging strong connections
              across the engineering, science, and technology communities that surround us.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhoWeAre;
