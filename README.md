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

## Project Pollinate

The page lives at `/project-pollinate`. Printable parts, source CAD, drawings, and the complete download bundle live in `public/project-pollinate/`.

To regenerate the files, install `scripts/requirements-cad.txt` with pip, then run `python scripts/generate-pollinate-cad.py`. The generator checks each delivered STL for a closed, connected solid, correct print orientation, printer-envelope fit, and nonempty 0.2 mm layers. It also checks the assembly for collisions and exports the same geometry for the 3D viewer.

Physical print, fit and field testing are pending. The impact calculator uses an adjustable build-rate assumption and 48 nesting tubes per build; it does not measure installations or bee occupancy.
