import { useEffect, useState } from "react";
import { getEventClock, openingTime } from "@/lib/hackshogun";

const HackCountdown = () => {
  const [now, setNow] = useState(() => Date.now());
  const [localOpening] = useState(() => new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" }).format(openingTime));
  const clock = getEventClock(now);

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: clock.days },
    { label: "Hours", value: clock.hours },
    { label: "Minutes", value: clock.minutes },
    { label: "Seconds", value: clock.seconds },
  ];

  return (
    <section className="hs-countdown" aria-label="Event countdown">
      <div>
        <p className="hs-eyebrow">{clock.phase === "upcoming" ? "The countdown is on" : clock.phase === "building" ? "The build is on" : "That's a wrap"}</p>
        <h2>{clock.phase === "upcoming" ? "See you at kickoff." : clock.phase === "building" ? "Make every moment count." : "Thanks for building with us."}</h2>
        <p className="hs-muted">{clock.phase === "upcoming" ? "January 15 · 5:00 PM EST" : clock.phase === "building" ? "Projects due January 17 · 5:00 PM EST" : "Watch Discord for judging updates."}</p>
        {clock.phase === "upcoming" && <p className="hs-local-time">Your time: {localOpening}</p>}
      </div>
      {clock.phase !== "finished" && <dl className="hs-clock" role="timer" aria-live="off" aria-label={clock.phase === "upcoming" ? "Time until the opening ceremony" : "Time until the submission deadline"}>
        {units.map((unit) => <div key={unit.label}><dt>{unit.label}</dt><dd>{String(unit.value).padStart(2, "0")}</dd></div>)}
      </dl>}
    </section>
  );
};

export default HackCountdown;
