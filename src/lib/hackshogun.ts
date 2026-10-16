export const registrationUrl = "https://forms.gle/WjugiYJ5iDEmZHy38";
export const discordUrl = "https://discord.gg/pMh7hK8eAm";
export const openingTime = new Date("2027-01-15T17:00:00-05:00").getTime();
export const deadlineTime = new Date("2027-01-17T17:00:00-05:00").getTime();

export function getEventClock(now: number) {
  const phase = now < openingTime ? "upcoming" : now < deadlineTime ? "building" : "finished";
  const remaining = Math.max(0, Math.floor(((phase === "upcoming" ? openingTime : deadlineTime) - now) / 1000));
  return {
    phase,
    days: Math.floor(remaining / 86400),
    hours: Math.floor((remaining % 86400) / 3600),
    minutes: Math.floor((remaining % 3600) / 60),
    seconds: remaining % 60,
  };
}

export interface HackShogunSponsor {
  name: string;
  logo: string;
  url: string;
  description?: string;
}

// Event sponsors are separate from the robotics team's partners.
// Add confirmed sponsors here, then enable both event sponsor sections.
export const showHackShogunSponsors = false;
export const hackShogunSponsors: HackShogunSponsor[] = [];
