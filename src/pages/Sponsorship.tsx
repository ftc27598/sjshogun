import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";
import Reveal from "@/components/Reveal";
import robotPhoto from "@/assets/robot-2025.jpg";
import teamPhoto from "@/assets/team-photo.png";
import { partners } from "@/lib/partners";

const supportOptions = [
  {
    id: "funding", title: "Fund the build", category: "Financial support",
    description: "Help us turn designs into a competition-ready robot. Talk with us about supporting the parts, tools, and competition expenses behind a season of FTC.",
    examples: ["Robot parts and electronics", "Tools and prototyping materials", "Competition and travel expenses"],
    subject: "Sponsorship inquiry: financial support",
  },
  {
    id: "resources", title: "Equip the team", category: "In-kind support",
    description: "Have materials, equipment, or a capability we could use? Let's talk about how your resources could help students make, test, and improve their ideas.",
    examples: ["Materials and components", "Fabrication and machining", "Equipment and technical resources"],
    subject: "Sponsorship inquiry: in-kind support",
  },
  {
    id: "expertise", title: "Share your expertise", category: "Mentorship & outreach",
    description: "A conversation with an engineer can change how a student approaches a problem. Explore ways to share your experience with the team or support our STEM outreach.",
    examples: ["Engineering and design feedback", "Programming and technical guidance", "STEM workshops and outreach"],
    subject: "Sponsorship inquiry: mentorship and outreach",
  },
];

const questions = [
  { question: "How do I become a sponsor?", answer: "Email us with your name, organization, and the kind of support you have in mind. We'll discuss the team's needs and work out the next steps together." },
  { question: "Where will our logo be featured?", answer: "As a sponsor, your logo is featured on Shogun's social media, team merchandise, and robot." },
  { question: "Can I contribute something other than funding?", answer: "Yes. We'd like to hear from people and organizations who can offer materials, fabrication, equipment, or technical expertise. Contact us before arranging a contribution so we can confirm what the team can use." },
  { question: "What sponsorship levels are available?", answer: "Contact us for current sponsorship options. We can discuss your goals and the team's needs as part of that conversation." },
  { question: "Can I support HackShogun?", answer: "Tell us you're interested in HackShogun when you reach out. We'll discuss opportunities to support the event with you." },
];

const inquiryUrl = (subject: string) => `mailto:dojorojorobotics@gmail.com?subject=${encodeURIComponent(subject)}`;

const SupportChooser = () => {
  const [selectedId, setSelectedId] = useState(supportOptions[0].id);
  const selected = supportOptions.find((option) => option.id === selectedId) ?? supportOptions[0];

  return (
    <div className="mt-12 grid border-t border-border lg:grid-cols-2">
      <fieldset className="min-w-0 lg:pr-14">
        <legend className="sr-only">Choose how you'd like to support Shogun</legend>
        {supportOptions.map((option, index) => (
          <label key={option.id} className={`sponsor-choice ${selectedId === option.id ? "is-selected" : ""}`}>
            <input type="radio" name="support-type" value={option.id} checked={selectedId === option.id} onChange={() => setSelectedId(option.id)} className="sr-only" />
            <span className="font-mono text-xs text-primary">0{index + 1}</span>
            <span><span className="eyebrow block text-muted-foreground">{option.category}</span><span className="mt-2 block font-display text-4xl font-semibold uppercase sm:text-5xl">{option.title}</span></span>
            <span className="sponsor-choice-mark" aria-hidden="true"><Arrow /></span>
          </label>
        ))}
      </fieldset>
      <div className="sponsor-option-panel bg-card p-7 sm:p-10 lg:p-12">
        <div aria-live="polite" aria-atomic="true">
          <p className="eyebrow text-primary">{selected.category}</p>
          <h3 className="mt-5 font-display text-4xl font-semibold uppercase leading-none">{selected.title}</h3>
          <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">{selected.description}</p>
          <p className="eyebrow mt-8 text-muted-foreground">Ways you could help</p>
          <ul className="mt-4">{selected.examples.map((example) => <li key={example} className="flex items-center gap-3 border-t border-border py-3 text-sm"><span className="award-mark" aria-hidden="true" />{example}</li>)}</ul>
        </div>
        <a href={inquiryUrl(selected.subject)} className="text-link mt-8">Discuss {selected.category.toLowerCase()} <Arrow /></a>
      </div>
    </div>
  );
};

const Sponsorship = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Sponsor Shogun | Saint John's Shogun";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="min-h-[100dvh] bg-background">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation />
      <main id="main-content">
        <section className="sponsor-hero relative overflow-hidden border-b border-border">
          <div className="page-width relative z-10 grid gap-10 pb-14 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-0 lg:pb-20 lg:pt-20">
            <div className="relative z-10">
              <p className="section-label"><span>Stand with Shogun</span> Sponsorship</p>
              <h1 className="sponsor-title mt-9">Help build<br />what's<br /><span className="text-primary">next.</span></h1>
              <p className="mt-8 max-w-md text-base leading-8 text-muted-foreground">Put your support behind students who design, build, and share what they learn. Get your logo featured on our social media, merchandise, and robot.</p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a href="#support" className="action-button">Find your way to help <Arrow direction="down" /></a>
                <a href={inquiryUrl("Sponsorship inquiry")} className="text-link">Talk to the team <Arrow /></a>
              </div>
            </div>
            <figure className="sponsor-hero-photo relative self-center lg:-ml-12 lg:mt-8">
              <div className="sponsor-photo-index" aria-hidden="true">SJ / SHOGUN</div>
              <img src={robotPhoto} alt="Shogun's 2025–26 FTC robot displayed with competition awards" className="w-full object-cover" />
              <figcaption className="flex flex-wrap justify-between gap-3 border-t border-primary py-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><span>Designed. Built. Tested.</span><span>Our 2025–26 robot</span></figcaption>
            </figure>
          </div>
          <div className="border-t border-border"><div className="page-width flex flex-wrap justify-between gap-3 py-5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"><span>FTC Team 27598</span><span>Saint John's High School</span><span>Shrewsbury, Massachusetts</span></div></div>
        </section>

        <section className="sponsor-purpose section-space">
          <div className="page-width grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
            <Reveal><p className="section-label"><span>01</span> The reason to partner</p></Reveal>
            <div>
              <Reveal><h2 className="section-title">A robot is<br />just the beginning.</h2></Reveal>
              <Reveal delay={80}><p className="mt-7 max-w-2xl text-base leading-8">Behind every mechanism is a student learning how to solve a problem. Behind every outreach event is a chance to help someone else start. Your support helps us do both.</p></Reveal>
              <div className="mt-10 grid gap-8 border-t border-current/20 pt-7 sm:grid-cols-3">
                {[{ title: "Build", text: "From early CAD to the competition field, students turn ideas into working machines." }, { title: "Learn", text: "Design, programming, and teamwork come together in a real engineering challenge." }, { title: "Share", text: "STEM outreach and HackShogun give us ways to bring that experience to others." }].map((item, index) => (
                  <Reveal key={item.title} delay={index * 80}><h3 className="font-display text-3xl font-semibold uppercase">{item.title}</h3><p className="mt-3 text-sm leading-7">{item.text}</p></Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space border-b border-border bg-card">
          <div className="page-width grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal><p className="section-label"><span>02</span> Sponsor recognition</p><h2 className="section-title mt-6">Your logo.<br /><span className="text-primary">With Shogun.</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">Your support becomes part of our story. As a sponsor, your logo is featured across three parts of team life.</p></Reveal>
            <div className="border-t border-border">
              {[{ title: "Social media", text: "Your logo featured on our social media." }, { title: "Team merchandise", text: "Your logo featured on Shogun merchandise." }, { title: "Our robot", text: "Your logo featured on the robot we build." }].map((item, index) => (
                <Reveal key={item.title} delay={index * 70}><article className="grid grid-cols-[2rem_1fr] gap-5 border-b border-border py-7"><span className="pt-2 font-mono text-xs text-primary">0{index + 1}</span><div><h3 className="font-display text-4xl font-semibold uppercase sm:text-5xl">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p></div></article></Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="support" className="section-space">
          <div className="page-width">
            <Reveal><div className="grid gap-6 lg:grid-cols-[1fr_0.6fr] lg:items-end"><div><p className="section-label"><span>03</span> Ways to support</p><h2 className="section-title mt-6">Bring what<br />you do best.</h2></div><p className="max-w-md text-sm leading-7 text-muted-foreground">Funding, resources, or experience. Choose a starting point and let's find a partnership that makes sense for you and the team.</p></div></Reveal>
            <SupportChooser />
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="page-width grid gap-0 lg:grid-cols-2">
            <figure className="sponsor-team-photo relative -mx-5 sm:-mx-8 lg:mx-0 lg:-ml-12"><img src={teamPhoto} alt="Saint John's Shogun robotics team gathered with robots and competition awards" className="h-full w-full object-cover" loading="lazy" decoding="async" /></figure>
            <div className="py-14 lg:py-20 lg:pl-16">
              <Reveal><p className="section-label"><span>04</span> Meet your team</p><h2 className="section-title mt-6">Local roots.<br />Big ideas.</h2><p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">We're the FIRST Tech Challenge team at Saint John's High School in Shrewsbury. New members and team captains all have a hand in what we build, from the robot to our community outreach.</p><div className="mt-8 flex flex-wrap gap-6"><a href="/#robots" className="text-link">See our robots <Arrow /></a><Link to="/hackshogun" className="text-link">Explore HackShogun <Arrow /></Link></div></Reveal>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="page-width">
            <Reveal><div className="grid gap-6 lg:grid-cols-2 lg:items-end"><div><p className="section-label"><span>05</span> In good company</p><h2 className="section-title mt-6">Our partners.</h2></div><p className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end">Thank you to the organizations already supporting Shogun and our work in STEM education.</p></div></Reveal>
            <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((partner, index) => <Reveal key={partner.name} delay={index * 50}><div className="partner-cell flex h-full min-h-44 flex-col justify-between gap-8 border-b border-r border-border p-6"><p className="eyebrow text-primary">Partner / 0{index + 1}</p><div>{partner.logo && <img src={partner.logo} alt="" className="mb-4 h-12 max-w-40 object-contain" loading="lazy" decoding="async" />}<h3 className="text-lg font-medium leading-tight">{partner.name}</h3></div></div></Reveal>)}
            </div>
          </div>
        </section>

        <section className="section-space border-t border-border">
          <div className="page-width grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
            <Reveal><p className="section-label"><span>06</span> A few details</p><h2 className="section-title mt-6">Good<br />questions.</h2></Reveal>
            <div className="border-t border-border">{questions.map((item) => <details key={item.question} className="sponsor-faq border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-semibold sm:text-lg">{item.question}<span className="sponsor-faq-mark" aria-hidden="true" /></summary><p className="max-w-2xl pb-7 pr-8 text-sm leading-7 text-muted-foreground">{item.answer}</p></details>)}</div>
          </div>
        </section>

        <section id="contact" className="sponsor-contact overflow-hidden bg-primary text-white">
          <div className="page-width py-16 md:py-24">
            <p className="eyebrow text-white/80">Your next partnership starts with a conversation.</p>
            <h2 className="sponsor-contact-title mt-7">Let's build.</h2>
            <div className="mt-10 grid gap-7 border-t border-white/30 pt-7 md:grid-cols-[1fr_auto] md:items-end"><p className="max-w-lg text-base leading-8 text-white/90">Tell us who you are and how you'd like to help. We'll take it from there, together.</p><a href={inquiryUrl("Sponsorship inquiry")} className="sponsor-email-button">Start a conversation <Arrow /></a></div>
            <a href={inquiryUrl("Sponsorship inquiry")} className="footer-email mt-5 inline-block text-sm underline decoration-white/50 underline-offset-4 hover:decoration-white">dojorojorobotics@gmail.com</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sponsorship;
