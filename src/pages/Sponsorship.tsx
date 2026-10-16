import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";
import Reveal from "@/components/Reveal";
import robotPhoto from "@/assets/robot-2025.jpg";
import teamPhoto from "@/assets/team-photo.png";
import { partners } from "@/lib/partners";
import { Radio, Shirt, Bot } from "lucide-react";
import "./Sponsorship.css";

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
  const selected = supportOptions.find(option => option.id === selectedId) ?? supportOptions[0];

  return (
    <div className="sp-support-grid">
      <fieldset className="sp-support-options">
        <legend className="sr-only">Choose how you'd like to support Shogun</legend>
        {supportOptions.map((option, index) => (
          <label key={option.id} className={"sp-choice" + (selectedId === option.id ? " is-selected" : "")}>
            <input type="radio" name="support-type" value={option.id} checked={selectedId === option.id} onChange={() => setSelectedId(option.id)} className="sr-only" />
            <span className="sp-choice-number">0{index + 1}</span>
            <span><span className="sj-eyebrow">{option.category}</span><strong>{option.title}</strong></span>
            <span className="sp-choice-mark" aria-hidden="true"><Arrow /></span>
          </label>
        ))}
      </fieldset>
      <div className="sp-support-panel">
        <div aria-live="polite" aria-atomic="true">
          <p className="sj-eyebrow">{selected.category}</p>
          <h3>{selected.title}</h3>
          <p className="sp-body">{selected.description}</p>
          <p className="sp-panel-label">Ways you could help</p>
          <ul>{selected.examples.map(example => <li key={example}><span aria-hidden="true" />{example}</li>)}</ul>
        </div>
        <a href={inquiryUrl(selected.subject)} className="sj-button sj-button-primary">Discuss {selected.category.toLowerCase()}<Arrow /></a>
      </div>
    </div>
  );
};

const Sponsorship = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");
    document.title = "Sponsor Shogun | Saint John's Shogun";
    description?.setAttribute("content", "Support Saint John's Shogun, FTC Team 27598. Help students build, learn, and share robotics. Sponsor logos feature on social media, merchandise, and our robot.");
    return () => {
      document.title = previousTitle;
      if (previousDescription != null) description?.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <div className="shogun-site sp-page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation />
      <main id="main-content">
        <section className="sj-hero sp-hero sj-width" aria-labelledby="sponsorship-title">
          <div className="sj-hero-copy">
            <p className="sj-kicker"><span aria-hidden="true" />Stand with Shogun · FTC 27598</p>
            <p className="sj-eyebrow sj-hero-eyebrow">Sponsorship</p>
            <h1 id="sponsorship-title">Help build<br /><span>what's next.</span></h1>
            <p className="sj-hero-description">Put your support behind students who design, build, and share what they learn. Get your logo featured on our social media, merchandise, and robot.</p>
            <div className="sj-actions"><a href="#support" className="sj-button sj-button-primary">Find your way to help<Arrow direction="down" /></a><a href={inquiryUrl("Sponsorship inquiry")} className="sj-button">Talk to the team<Arrow /></a></div>
            <p className="sp-hero-note">Saint John's High School<br />Shrewsbury, Massachusetts</p>
          </div>
          <figure className="sp-hero-photo"><div className="sj-photo-label"><span>Designed. Built. Tested.</span><span>2025–2026</span></div><div className="sp-robot-frame"><img src={robotPhoto} alt="Shogun's 2025–26 FTC robot displayed with competition awards" loading="eager" decoding="async" width="960" height="1280" /><span className="sj-image-badge">DECODE · FTC 27598</span></div><figcaption>A season of ideas, made real.</figcaption></figure>
          <div className="sj-hero-bottom"><p>Support the students behind the machine.</p><a href="#recognition">Your logo. With Shogun.<Arrow direction="down" /></a></div>
        </section>

        <section id="recognition" className="sj-section sj-width" aria-labelledby="recognition-title">
          <Reveal><div className="sj-section-heading"><div><p className="sj-eyebrow">01 / Sponsor recognition</p><h2 id="recognition-title">Your logo.<br /><span>With Shogun.</span></h2></div><p>Your support becomes part of our story. Your logo is featured across three parts of team life.</p></div></Reveal>
          <div className="sp-recognition-grid">{[
            { title: "Social media", text: "Your logo featured on our social media.", icon: Radio },
            { title: "Team merchandise", text: "Your logo featured on Shogun merchandise.", icon: Shirt },
            { title: "Our robot", text: "Your logo featured on the robot we build.", icon: Bot },
          ].map((item, index) => <Reveal key={item.title} delay={index * 60}><article className="sp-recognition-card"><div className="sp-card-top"><item.icon aria-hidden="true" strokeWidth={1.4} /><span>0{index + 1}</span></div><h3>{item.title}</h3><p>{item.text}</p></article></Reveal>)}</div>
        </section>

        <section className="sj-section sj-width" aria-labelledby="purpose-title">
          <Reveal><div className="sp-purpose"><div><p className="sj-eyebrow">The reason to partner</p><h2 id="purpose-title">A robot is<br /><span>just the beginning.</span></h2><p>Behind every mechanism is a student learning how to solve a problem. Behind every outreach event is a chance to help someone else start. Your support helps us do both.</p></div><div className="sp-purpose-list">{[
            { title: "Build", text: "From early CAD to the competition field, students turn ideas into working machines." },
            { title: "Learn", text: "Design, programming, and teamwork come together in a real engineering challenge." },
            { title: "Share", text: "STEM outreach and HackShogun give us ways to bring that experience to others." },
          ].map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></Reveal>
        </section>

        <section id="support" className="sj-section sj-width" aria-labelledby="support-title">
          <Reveal><div className="sj-section-heading"><div><p className="sj-eyebrow">02 / Ways to support</p><h2 id="support-title">Bring what<br /><span>you do best.</span></h2></div><p>Funding, resources, or experience. Choose a starting point and let's find a partnership that makes sense for you and the team.</p></div></Reveal>
          <SupportChooser />
        </section>

        <section className="sj-section sj-width" aria-labelledby="sponsor-team-title">
          <Reveal><div className="sp-team"><figure><img src={teamPhoto} alt="Saint John's Shogun robotics team gathered with robots and competition awards" loading="lazy" decoding="async" width="866" height="445" /><figcaption>Saint John's Shogun · Team 27598</figcaption></figure><div><p className="sj-eyebrow">Meet your team</p><h2 id="sponsor-team-title">Local roots.<br /><span>Big ideas.</span></h2><p>We're the FIRST Tech Challenge team at Saint John's High School in Shrewsbury. New members and team captains all have a hand in what we build, from the robot to our community outreach.</p><div className="sp-text-links"><a href="/#robots">See our robots<Arrow /></a><Link to="/hackshogun">Explore HackShogun<Arrow /></Link></div></div></div></Reveal>
        </section>

        <section className="sj-section sj-width" aria-labelledby="partners-title">
          <Reveal><div className="sj-section-heading"><div><p className="sj-eyebrow">03 / In good company</p><h2 id="partners-title">Our partners.<br /><span>Part of the team.</span></h2></div><p>Thank you to the organizations supporting Shogun and our work in STEM education.</p></div></Reveal>
          <div className="sj-partner-grid">{partners.map((partner, index) => <Reveal key={partner.name} delay={index * 40}><div className="sj-partner"><span className="sj-partner-index">0{index + 1} / Partner</span>{partner.logo ? <img src={partner.logo} alt={partner.name + " logo"} loading="lazy" decoding="async" /> : <span className="sj-partner-wordmark">{partner.name}</span>}{partner.logo && <p>{partner.name}</p>}</div></Reveal>)}</div>
        </section>

        <section className="sj-section sj-width" aria-labelledby="sponsor-faq-title">
          <div className="sp-faq-layout"><Reveal><p className="sj-eyebrow">04 / A few details</p><h2 id="sponsor-faq-title">Good<br /><span>questions.</span></h2><p className="sp-body">Something else on your mind?</p><a href={inquiryUrl("Sponsorship question")} className="sp-text-link">Ask the team<Arrow /></a></Reveal><div className="sp-faq-list">{questions.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></div>
        </section>

        <section id="contact" className="sp-closing sj-width" aria-labelledby="contact-title">
          <p className="sj-eyebrow">Your next partnership starts with a conversation.</p><h2 id="contact-title">Let's build<br /><span>what's next.</span></h2><p>Tell us who you are and how you'd like to help.<br />We'll take it from there, together.</p><a href={inquiryUrl("Sponsorship inquiry")} className="sj-button sj-button-primary">Start a conversation<Arrow /></a><a href={inquiryUrl("Sponsorship inquiry")} className="sp-contact-email">dojorojorobotics@gmail.com</a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sponsorship;
