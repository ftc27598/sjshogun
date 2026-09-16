import { Mail } from "lucide-react";
import northboroPizzaLogo from "@/assets/northboro-pizza-logo.png";
import Reveal from "@/components/Reveal";

const partners = [
  { name: "Coghlin Companies", logo: null },
  { name: "Northboro House of Pizza", logo: northboroPizzaLogo },
  { name: "Unibank", logo: null },
  { name: "Saint John's Robotics Camp", logo: null },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="scroll-mt-24 border-t border-border bg-card px-6 py-28">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Our <span className="text-primary red-glow">Partners</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mb-16 max-w-2xl font-sans text-lg text-muted-foreground">
            We&apos;re grateful for the support of our partners who make our mission possible. Their commitment to
            STEM education and innovation drives our success.
          </p>
        </Reveal>

        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 60}>
              <div className="flex min-h-[140px] flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-16 max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
                <div className="text-center font-sans font-semibold text-foreground">{partner.name}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-12">
            <h3 className="mb-3 text-2xl font-semibold text-foreground">Become a Partner</h3>
            <p className="mx-auto mb-6 max-w-xl font-sans text-muted-foreground">
              Join us in shaping the future of robotics and STEM education.
            </p>
            <a
              href="mailto:dojorojorobotics@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              aria-label="Email SJ Shogun about partnership opportunities"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Sponsors;
