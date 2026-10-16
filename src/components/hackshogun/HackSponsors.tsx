import { useState } from "react";
import { hackShogunSponsors, showHackShogunSponsors } from "@/lib/hackshogun";

export const HackSponsorCarousel = () => {
  const [paused, setPaused] = useState(false);
  if (!showHackShogunSponsors || hackShogunSponsors.length === 0) return null;

  return (
    <section className="hs-sponsor-strip hs-width" aria-label="Confirmed HackShogun sponsors">
      <div className="hs-sponsor-strip-heading"><p className="hs-eyebrow">Supported by</p><button type="button" className="hs-carousel-control" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>{paused ? "Play carousel" : "Pause carousel"}</button></div>
      <div className="hs-sponsor-window">
        <div className={"hs-sponsor-track" + (paused ? " is-paused" : "")}>
          {[false, true].map((duplicate) => <div className="hs-sponsor-group" key={String(duplicate)} aria-hidden={duplicate || undefined}>
            {hackShogunSponsors.map((sponsor) => <a key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer" tabIndex={duplicate ? -1 : undefined} aria-label={"Visit " + sponsor.name}><img src={sponsor.logo} alt={duplicate ? "" : sponsor.name} /></a>)}
          </div>)}
        </div>
      </div>
    </section>
  );
};

export const HackSponsorSection = () => {
  if (!showHackShogunSponsors || hackShogunSponsors.length === 0) return null;

  return (
    <section id="event-sponsors" className="hs-section hs-width">
      <p className="hs-eyebrow">The people behind the possibilities</p>
      <h2 className="hs-heading">Our sponsors <span>and partners.</span></h2>
      <div className="hs-sponsor-grid">
        {hackShogunSponsors.map((sponsor) => <a key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="hs-card"><img src={sponsor.logo} alt={sponsor.name} loading="lazy" /><h3>{sponsor.name}</h3>{sponsor.description && <p>{sponsor.description}</p>}</a>)}
      </div>
    </section>
  );
};
