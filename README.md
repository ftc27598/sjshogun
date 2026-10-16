# SJ Shogun Website

Official website for SJ Shogun Team 27598.

## Getting Started

Requirements:
- Node.js 18+
- npm

Install and run:

```sh
npm install
npm run dev
```

Build for production:

```sh
npm run build
npm run preview
```

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
## HackShogun

The event page is at `/hackshogun`. Event links and sponsor settings live in `src/lib/hackshogun.ts`; the public hacker guide is `public/hackshogun-2027-guide.txt`. The submission form is distributed through Discord and must not be published on the site or in the downloadable guide.

The sponsor carousel beneath the event navigation and the sponsor section near the bottom are disabled. To publish sponsors, add only confirmed HackShogun sponsors to `hackShogunSponsors` with a name, logo path, and website URL, then set `showHackShogunSponsors` to `true`. Both sections remain absent when the list is empty. Event sponsors are separate from SJ Shogun robotics team partners.
