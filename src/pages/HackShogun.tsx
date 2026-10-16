import { useEffect } from "react";
import { Link } from "react-router-dom";
import Arrow from "@/components/Arrow";
import HackNavigation from "@/components/hackshogun/HackNavigation";
import HackCountdown from "@/components/hackshogun/HackCountdown";
import { HackSponsorCarousel, HackSponsorSection } from "@/components/hackshogun/HackSponsors";
import { discordUrl, registrationUrl } from "@/lib/hackshogun";
import "./HackShogun.css";

const steps = [
  { title: "Make it official", text: "Every participant registers individually, even if your team is already formed.", link: "Register now", href: registrationUrl },
  { title: "Join the Discord", text: "Find teammates, follow announcements, and get the event and submission details.", link: "Join the community", href: discordUrl },
  { title: "Find your people", text: "Build a team of 1–4. Choose a captain and confirm your roster through Discord.", link: "Read the team rules", href: "#rules" },
  { title: "Show up. Build something.", text: "Attend the opening ceremony, then turn your idea into a working project over the weekend.", link: "See the schedule", href: "#schedule" },
];

const schedule = [
  { day: "01", date: "Friday, Jan 15", label: "Kick things off", events: [
    { time: "5:00 PM EST", title: "Opening ceremony", text: "Required for everyone. Rules, judging, GitHub, a FIRST Robotics introduction, and Q&A on Discord." },
    { time: "Approx. 5:30 PM", title: "Let the building begin", text: "Development starts after the ceremony. Pick your problem and get to work." },
  ] },
  { day: "02", date: "Saturday, Jan 16", label: "Build, learn, repeat", events: [
    { time: "All day", title: "Your main build day", text: "Make progress, test your ideas, and help your teammates." },
    { time: "Times in Discord", title: "Optional sessions", text: "Mentoring, coding and AI workshops, GitHub help, and robotics programming may be available." },
  ] },
  { day: "03", date: "Sunday, Jan 17", label: "Bring it all together", events: [
    { time: "Before the deadline", title: "Test. Record. Check.", text: "Finish your README, record your demo, prepare written answers, and test all links while signed out." },
    { time: "5:00 PM EST", title: "Submissions close", text: "One submission per team. The submission form will be shared in Discord. Code freezes at the deadline." },
  ] },
];

const rules = [
  { title: "Teams of 1–4", text: "Each person joins one team. Solo builders form one-person teams and compete under the same judging criteria." },
  { title: "Build during the event", text: "Create the main project during HackShogun. Libraries, templates, and APIs are welcome; disclose major resources and pre-existing code." },
  { title: "One public GitHub repo", text: "Create a public repository for your team, commit regularly, and include your source code and a useful README. Keep credentials out." },
  { title: "AI is allowed", text: "Disclose meaningful AI assistance, check generated work, and be ready to explain your code and each member's contribution." },
  { title: "Show the real thing", text: "Prepare a 3–5 minute video of your working project, plus the four written responses in the hacker guide." },
  { title: "Be good to each other", text: "Respect participants, protect private information, and ask mentors for guidance. Your team must create its own project." },
];

const judging = [
  { title: "Innovation & creativity", text: "An original idea or a thoughtful new approach to a real problem." },
  { title: "Technical execution", text: "How you built it, the decisions you made, and what you understand." },
  { title: "Functionality & execution", text: "A working prototype that does what your team says it does." },
  { title: "Presentation & communication", text: "A clear demo and an explanation that makes your project easy to follow." },
  { title: "Impact & usefulness", text: "Who your project helps and how it could make a meaningful difference." },
];

const faqs = [
  { question: "Who can join HackShogun?", answer: "Students ages 13–18 during the event. Each participant must register, join Discord, attend the opening ceremony, and complete any required parent or guardian permissions." },
  { question: "Do I need coding experience?", answer: "No prior programming experience is necessary. HackShogun is beginner-friendly. Build something you can demonstrate and explain, and use the weekend to learn." },
  { question: "Can I participate by myself?", answer: "Yes. Teams have 1–4 registered participants. A one-person team is fully eligible and is judged using the same criteria as larger teams. Each person can join only one team." },
  { question: "Does every teammate need to register?", answer: "Yes. Register individually, then follow the team confirmation process announced in Discord. Choose one captain as the primary organizer contact. Team deadlines and roster changes are handled through Discord." },
  { question: "What can we build?", answer: "A website, app, AI tool, game with a real-world purpose, robot, hardware prototype, or another working technology project. Choose a meaningful problem that fits #Tech4Tomorrow." },
  { question: "Can we use AI and existing libraries?", answer: "Yes. AI tools, libraries, templates, APIs, and datasets are allowed. Disclose meaningful use and pre-existing code, verify generated work, and understand the important parts of your project. Most project-specific development must happen during the event." },
  { question: "Where do we submit our project?", answer: "The project submission form and instructions will be shared in the official Discord. One representative submits for the team by Sunday, January 17 at 5:00 PM EST. The registration form is only for signing up to participate." },
  { question: "What goes into the final submission?", answer: "Your team and project details, a public GitHub repository, an accessible 3–5 minute demo video, four written responses, and disclosures of AI use and outside resources. Test all links while signed out. The hacker guide includes the full checklist and word limits." },
  { question: "Is the opening ceremony required?", answer: "Yes. Every participant must attend on Friday, January 15 at 5:00 PM EST in Discord. Building begins afterward, at approximately 5:30 PM. All published event times are Eastern Standard Time." },
];

const HackShogun = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");
    document.title = "HackShogun 2027 | Build a better tomorrow";
    description?.setAttribute("content", "Join HackShogun January 15–17, 2027. A beginner-friendly online hackathon for ages 13–18, in teams of 1–4. Register and build for #Tech4Tomorrow.");
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return () => {
      document.title = previousTitle;
      if (previousDescription !== null && previousDescription !== undefined) description?.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <div className="hack-event" id="top">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <HackNavigation />
      <HackSponsorCarousel />
      <main id="main-content">
        <section className="hs-hero hs-width" aria-labelledby="hack-title">
          <div className="hs-hero-copy">
            <p className="hs-event-date"><span aria-hidden="true" />January 15–17, 2027 <span className="hs-date-divider" aria-hidden="true">—</span> Online</p>
            <h1 id="hack-title">Hack<span>Shogun</span></h1>
            <p className="hs-hero-description">A weekend to turn a good idea into something real. Join students ages 13–18, build in a team of 1–4, and create tech for a better tomorrow.</p>
            <div className="hs-actions">
              <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="hs-button hs-button-primary">Register for HackShogun <Arrow /></a>
              <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="hs-button">Join Discord <Arrow /></a>
            </div>
            <p className="hs-hero-note">Organized by <Link to="/">Saint John's Shogun · FTC 27598</Link><br />First-time builders are welcome.</p>
          </div>
          <div className="hs-hero-art" aria-hidden="true"><div className="hs-globe-halo" /><img src="/hackshogun-orbit.svg" alt="" width="660" height="660" /><span className="hs-art-caption">Good ideas can come from anywhere.</span></div>
        </section>

        <div className="hs-width"><HackCountdown /></div>

        <section id="about" className="hs-section hs-width">
          <p className="hs-eyebrow">One weekend. A world of possibilities.</p>
          <h2 className="hs-heading">A little curiosity.<br /><span>A better tomorrow.</span></h2>
          <div className="hs-about-grid">
            <article className="hs-theme-card"><span className="hs-tag">The 2027 challenge</span><h3>#Tech4Tomorrow</h3><p>Find a problem that matters to someone. Then build a working technology project that helps.</p><p>Think health, education, accessibility, sustainability, robotics, science, safety—or another issue you care about.</p><div className="hs-format-tags" aria-label="Project ideas">{["An app", "A website", "An AI tool", "A purposeful game", "A hardware prototype"].map((format) => <span key={format}>{format}</span>)}</div></article>
            <div className="hs-about-details"><p>This is HackShogun: a virtual, beginner-friendly technology competition from SJ Shogun. Bring your idea, your questions, and a willingness to figure things out.</p><p>Build with friends or start a one-person team. The goal is a working project your team can demonstrate, understand, and be proud of.</p><dl className="hs-facts"><div><dt>years old</dt><dd>13–18</dd></div><div><dt>people per team</dt><dd>1–4</dd></div><div><dt>online, on Discord</dt><dd>100%</dd></div></dl></div>
          </div>
        </section>

        <section id="get-started" className="hs-section hs-width">
          <div className="hs-section-heading"><div><p className="hs-eyebrow">Your next project starts here</p><h2 className="hs-heading">Join in <span>four steps.</span></h2></div><p>Register as a person.<br />Build as a team.</p></div>
          <ol className="hs-step-grid">{steps.map((step, index) => <li className="hs-card hs-step-card" key={step.title}><span className="hs-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p><a href={step.href} {...(step.href.startsWith("https://") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="hs-inline-link">{step.link}<Arrow /></a></li>)}</ol>
        </section>

        <section id="schedule" className="hs-section hs-width">
          <div className="hs-section-heading"><div><p className="hs-eyebrow">Make a weekend of it</p><h2 className="hs-heading">The event <span>schedule.</span></h2></div><span className="hs-tag">All times are EST</span></div>
          <div className="hs-schedule-grid">{schedule.map((day) => <article className="hs-card hs-day" key={day.day}><div className="hs-day-header"><span>Day {day.day}</span><span>{day.date}</span></div><h3>{day.label}</h3><ol>{day.events.map((event) => <li key={event.title}><p className="hs-time">{event.time}</p><h4>{event.title}</h4><p>{event.text}</p></li>)}</ol></article>)}</div>
          <p className="hs-section-note">Watch Discord for confirmed workshop times and any updates. Leave time to upload and check your project before the Sunday deadline.</p>
        </section>

        <section id="rules" className="hs-section hs-width">
          <div className="hs-section-heading"><div><p className="hs-eyebrow">A fair shot for every builder</p><h2 className="hs-heading">The rules.<br /><span>The essentials.</span></h2></div><a href="/hackshogun-2027-guide.txt" target="_blank" rel="noopener noreferrer" className="hs-inline-link">Read the official hacker guide<Arrow /></a></div>
          <div className="hs-rules-grid">{rules.map((rule, index) => <article className="hs-rule" key={rule.title}><span className="hs-rule-index" aria-hidden="true">0{index + 1}</span><h3>{rule.title}</h3><p>{rule.text}</p></article>)}</div>
          <div className="hs-discord-note"><div><span className="hs-tag">Keep this in mind</span><h3>Register here. Submit through Discord.</h3><p>The project submission form will be shared in Discord. One teammate submits your final project, demo, and written answers by January 17 at 5:00 PM EST.</p></div><a href={discordUrl} target="_blank" rel="noopener noreferrer" className="hs-button">Join Discord<Arrow /></a></div>
        </section>

        <section id="judging" className="hs-section hs-width">
          <div className="hs-section-heading"><div><p className="hs-eyebrow">Make it useful. Make it work.</p><h2 className="hs-heading">How projects<br /><span>are judged.</span></h2></div><p>A clear, working prototype can go further than a big idea that isn't finished. The same criteria apply to every team size.</p></div>
          <ol className="hs-judging-list">{judging.map((criterion, index) => <li key={criterion.title}><span className="hs-judging-number">0{index + 1}</span><h3>{criterion.title}</h3><p>{criterion.text}</p><span className="hs-judging-dot" aria-hidden="true" /></li>)}</ol>
          <p className="hs-section-note">Top submissions may advance to a live finalist round. Be ready to explain your decisions, code, AI use, and each teammate's contribution. Details will be announced in Discord.</p>
        </section>

        <HackSponsorSection />

        <section id="faq" className="hs-section hs-width">
          <div className="hs-faq-layout"><div><p className="hs-eyebrow">Before you jump in</p><h2 className="hs-heading">Good<br /><span>questions.</span></h2><p className="hs-faq-intro">Still wondering about something?<br /><a href={discordUrl} target="_blank" rel="noopener noreferrer" className="hs-inline-link">Ask us on Discord<Arrow /></a></p></div><div className="hs-faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span className="hs-faq-plus" aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div></div>
        </section>

        <section className="hs-closing hs-width">
          <p className="hs-eyebrow">January 15–17, 2027 · Online</p><h2>Your idea.<br /><span>A better tomorrow.</span></h2><p>Find your team. Follow your curiosity. Build something that matters.</p><div className="hs-actions"><a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="hs-button hs-button-primary">I'm in. Let's build.<Arrow /></a><a href={discordUrl} target="_blank" rel="noopener noreferrer" className="hs-button">Join Discord<Arrow /></a></div>
        </section>
      </main>
      <footer className="hs-footer hs-width"><Link to="/" className="hs-footer-brand">SJ SHOGUN <span>FTC 27598</span></Link><p>A student-built event. A better tomorrow.</p><div><a href="mailto:dojorojorobotics@gmail.com">Contact us<Arrow /></a><Link to="/">Back to the team<Arrow /></Link></div><p className="hs-footer-bottom">© {new Date().getFullYear()} Saint John's Shogun · Shrewsbury, Massachusetts</p></footer>
    </div>
  );
};

export default HackShogun;
