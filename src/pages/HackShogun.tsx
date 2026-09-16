import { Link } from "react-router-dom";

const HackShogun = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-foreground"
      role="main"
    >
      <span className="mb-6 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/20">
        Team 27598
      </span>
      <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">
        Hack<span className="text-primary red-glow">Shogun</span>
      </h1>
      <p className="mb-2 text-xl text-muted-foreground md:text-2xl">Coming soon.</p>
      <p className="mb-10 max-w-xl text-muted-foreground">
        Our first hackathon is in the works. Details on dates, registration, and challenges will land here soon.
      </p>
      <Link
        to="/"
        className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Back to Shogun Home
      </Link>
    </main>
  );
};

export default HackShogun;
