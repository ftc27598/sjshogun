import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";

const discordUrl = "https://discord.gg/pMh7hK8eAm";
const submissionUrl = "https://forms.gle/KmPCB5GrciDG8S7v8";

const quickFacts = [
  { label: "When", value: "Jan 15-17, 2027" },
  { label: "Where", value: "Online on Discord" },
  { label: "Who", value: "Ages 13-18" },
  { label: "Cost", value: "Free" },
];

const schedule = [
  {
    day: "Friday",
    date: "January 15",
    time: "5:00 PM EST",
    title: "Opening ceremony",
    description: "Required for every participant. Join the Discord Stage for the theme, rules, GitHub Classroom setup, submission instructions, and a Q&A. Building starts at about 5:30 PM.",
  },
  {
    day: "Saturday",
    date: "January 16",
    time: "All day",
    title: "Build and learn",
    description: "Work on your project. Optional workshops, mentor help, and other activities may run throughout the day. Exact times will be posted in Discord.",
  },
  {
    day: "Sunday",
    date: "January 17",
    time: "5:00 PM EST",
    title: "Submission deadline",
    description: "Push your final code, upload your demo, check that your links work, and submit the Google Form before 5:00 PM EST.",
  },
];

const rules = [
  {
    number: "01",
    title: "Build on your own",
    text: "HackShogun is an individual competition. You can ask questions and attend workshops, but the project you submit must be your own work.",
  },
  {
    number: "02",
    title: "Start fresh",
    text: "Build the main project during the event. Starter templates, libraries, and public resources are fine. Disclose meaningful code or work that existed beforehand.",
  },
  {
    number: "03",
    title: "Use GitHub Classroom",
    text: "You'll receive your own repository through the official GitHub Classroom. Work there, commit during the weekend, and make sure judges can access the final code.",
  },
  {
    number: "04",
    title: "AI is allowed",
    text: "You can use AI tools, but disclose meaningful use and be ready to explain what you built and how it works.",
  },
];

const writtenFields = [
  { title: "Problem and target user", limit: "400 words" },
  { title: "Solution and user experience", limit: "600 words" },
  { title: "Technical architecture", limit: "600 words" },
  { title: "Innovation and future scope", limit: "400 words" },
];

const HackShogun = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "HackShogun 2027 | Saint John's Shogun";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="min-h-[100dvh] bg-background">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation />
      <main id="main-content">
        <section className="hack-hero overflow-hidden border-b border-border">
          <div className="page-width grid gap-12 pb-16 pt-12 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:gap-16 lg:pb-20 lg:pt-20">
            <div>
              <p className="section-label"><span>2027</span> A weekend hackathon by FTC Team 27598</p>
              <h1 className="hack-title mt-8">HACK<br /><span className="text-primary">SHOGUN</span></h1>
              <p className="hack-theme mt-8">#Tech4Tomorrow</p>
              <p className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.02em]">January 15-17, 2027 / Starts 5:00 PM EST</p>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">Pick a real problem, build a tech project over the weekend, and show what you made. It's free, online, and open to students ages 13-18. Beginners are welcome.</p>
              <p className="mt-4 text-sm text-foreground/80">Solo projects only. The opening ceremony is required.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="action-button">Join the Discord <Arrow /></a>
                <a href={submissionUrl} target="_blank" rel="noopener noreferrer" className="hack-outline-button">Submission form <Arrow /></a>
              </div>
              <p className="mt-4 max-w-lg text-xs leading-6 text-muted-foreground">Discord is where organizers will post announcements, workshop times, and any schedule changes. Official registration is required to compete.</p>
            </div>
            <div className="hack-poster relative hidden aspect-[4/5] min-h-[440px] flex-col justify-between overflow-hidden border border-border p-8 lg:flex" aria-hidden="true">
              <div className="relative z-10 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em]"><span>Online / Discord</span><span>01.15 - 01.17</span></div>
              <div className="relative z-10"><span className="hack-poster-number">27</span><p className="font-display text-5xl font-semibold uppercase leading-none">TECH FOR<br />TOMORROW</p></div>
              <div className="relative z-10 flex justify-between border-t border-foreground/30 pt-4 font-mono text-[10px] uppercase tracking-[0.2em]"><span>Make something useful</span><span>27598</span></div>
            </div>
          </div>
          <div className="border-t border-border">
            <dl className="page-width grid grid-cols-2 lg:grid-cols-4">
              {quickFacts.map((fact) => <div key={fact.label} className="border-r border-border py-5 pr-4 last:border-r-0 lg:pl-6 lg:first:pl-0"><dt className="eyebrow text-primary">{fact.label}</dt><dd className="mt-2 text-sm font-semibold sm:text-base">{fact.value}</dd></div>)}
            </dl>
          </div>
        </section>

        <nav aria-label="HackShogun sections" className="border-b border-border bg-card">
          <div className="page-width flex flex-wrap gap-x-8 gap-y-3 py-4 text-xs font-semibold uppercase tracking-wider">
            <a href="#challenge" className="hack-section-link">The challenge</a>
            <a href="#schedule" className="hack-section-link">Schedule</a>
            <a href="#rules" className="hack-section-link">Rules</a>
            <a href="#submit" className="hack-section-link">How to submit</a>
          </div>
        </nav>

        <section id="challenge" className="section-space">
          <div className="page-width grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
            <p className="section-label"><span>01</span> The challenge</p>
            <div>
              <h2 className="section-title">Tech for tomorrow</h2>
              <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground">Find a problem that matters to someone, then make a tech project that helps. It can be a website, app, game with a real-world purpose, AI tool, robot, hardware prototype, or something else you can demonstrate.</p>
              <div className="mt-10 grid gap-0 border-t border-border sm:grid-cols-3">
                <div className="border-b border-border py-6 sm:pr-6"><span className="eyebrow text-primary">Find</span><p className="mt-3 text-sm leading-7">Who has the problem, and why does it matter?</p></div>
                <div className="border-b border-border py-6 sm:border-l sm:px-6"><span className="eyebrow text-primary">Build</span><p className="mt-3 text-sm leading-7">Make a working project during HackShogun.</p></div>
                <div className="border-b border-border py-6 sm:border-l sm:pl-6"><span className="eyebrow text-primary">Show</span><p className="mt-3 text-sm leading-7">Explain what it does and what you personally made.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="section-space bg-card">
          <div className="page-width">
            <div className="max-w-3xl"><p className="section-label"><span>02</span> January 15-17</p><h2 className="section-title mt-6">The weekend schedule</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">All times are Eastern Standard Time. Watch Discord for workshop details and official updates.</p></div>
            <div className="mt-12 border-t border-border">
              {schedule.map((item) => <div key={item.day} className="grid gap-4 border-b border-border py-7 md:grid-cols-[0.35fr_0.22fr_1fr] md:gap-8"><div><h3 className="font-display text-3xl font-semibold uppercase">{item.day}</h3><p className="mt-1 text-sm text-muted-foreground">{item.date}</p></div><p className="font-mono text-xs text-primary">{item.time}</p><div><h4 className="text-xl font-semibold">{item.title}</h4><p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{item.description}</p></div></div>)}
            </div>
            <p className="mt-6 border-l-2 border-primary pl-4 text-sm leading-7 text-muted-foreground">The Sunday 5:00 PM EST deadline is firm. Leave time to upload and test your video before filling out the form.</p>
          </div>
        </section>

        <section id="rules" className="section-space">
          <div className="page-width">
            <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:gap-20"><div><p className="section-label"><span>03</span> The basics</p><h2 className="section-title mt-6">Know the rules</h2></div><div className="border-t border-border">{rules.map((rule) => <article key={rule.number} className="grid gap-4 border-b border-border py-6 sm:grid-cols-[2rem_0.6fr_1fr] sm:gap-6"><span className="font-mono text-xs text-primary">{rule.number}</span><h3 className="text-lg font-semibold">{rule.title}</h3><p className="text-sm leading-7 text-muted-foreground">{rule.text}</p></article>)}</div></div>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-primary pt-6"><p className="max-w-2xl text-sm leading-7 text-muted-foreground">Participants must be 13-18, register officially, join Discord, attend the opening ceremony, and follow the code of conduct. The full guide has the complete eligibility, judging, and conduct rules.</p><a href="/hackshogun-2027-guide.txt" target="_blank" rel="noopener noreferrer" className="text-link">Read the full 2027 guide <Arrow /></a></div>
          </div>
        </section>

        <section id="submit" className="section-space bg-card">
          <div className="page-width">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-20"><div><p className="section-label"><span>04</span> Before 5 PM Sunday</p><h2 className="section-title mt-6">Submit your project</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Use the official Google Form. You can prepare your written answers in a separate document and paste them in when they're ready.</p><a href={submissionUrl} target="_blank" rel="noopener noreferrer" className="action-button mt-8">Open submission form <Arrow /></a></div>
              <div className="border-t border-border">
                <div className="border-b border-border py-6"><h3 className="text-xl font-semibold">1. Your details</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Your registered name, email address, and project name.</p></div>
                <div className="border-b border-border py-6"><h3 className="text-xl font-semibold">2. A 3-5 minute video</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Show the working project, the problem, and its main features. Upload the video to a Google Drive folder set to "Anyone with the link can view." Test the link while signed out before you submit.</p></div>
                <div className="border-b border-border py-6"><h3 className="text-xl font-semibold">3. Your code</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Include a link to your latest GitHub Classroom repository. Push your final code first, make the repository accessible to judges, and include a README. Keep private keys and passwords out of the repo.</p></div>
                <div className="border-b border-border py-6"><h3 className="text-xl font-semibold">4. Four short writeups</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Explain the problem, what you built, how it works, and what you'd improve. Disclose significant AI use and major outside resources.</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{writtenFields.map((field) => <li key={field.title} className="flex justify-between gap-3 border-l-2 border-primary pl-3 text-sm"><span>{field.title}</span><span className="shrink-0 text-xs text-muted-foreground">Max {field.limit}</span></li>)}</ul></div>
              </div>
            </div>
          </div>
        </section>

        <section className="hack-final border-t border-primary bg-primary py-12 text-white">
          <div className="page-width grid gap-8 md:grid-cols-[1fr_auto] md:items-center"><div><p className="font-mono text-xs uppercase tracking-[0.2em]">HackShogun 2027</p><h2 className="mt-3 font-display text-5xl font-semibold uppercase leading-none sm:text-6xl">See you on Discord</h2><p className="mt-4 text-sm text-white/80">Friday, January 15 at 5:00 PM EST. The opening ceremony is required.</p></div><a href={discordUrl} target="_blank" rel="noopener noreferrer" className="hack-light-button">Join the Discord <Arrow /></a></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HackShogun;
