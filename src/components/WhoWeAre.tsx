import Reveal from "@/components/Reveal";
import Arrow from "@/components/Arrow";

const WhoWeAre = () => (
  <section id="who-we-are" className="section-space border-t border-border">
    <div className="page-width grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
      <Reveal><p className="section-label"><span>01</span> Who we are</p></Reveal>
      <div>
        <Reveal><h2 className="section-title">A robotics team<br /><span className="text-muted-foreground">from Shrewsbury</span></h2></Reveal>
        <Reveal delay={80}>
          <div className="mt-8 grid gap-6 text-base leading-8 text-muted-foreground md:grid-cols-2 md:gap-10">
            <p>Saint John's Shogun is the FTC team at Saint John's High School. New members and team captains all have a hand in what we build.</p>
            <p>We work on the robot and spend time sharing robotics with our community. Build, code, and outreach are all part of the team.</p>
          </div>
          <a href="#about" className="text-link mt-8 inline-flex">What we do <Arrow direction="down" /></a>
        </Reveal>
      </div>
    </div>
  </section>
);
export default WhoWeAre;
