import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground" role="main">
      <div className="w-full max-w-lg rounded-xl border border-border bg-card p-10 text-center shadow-xl">
        <p className="mb-2 text-sm tracking-wide text-muted-foreground">Route not found: {location.pathname}</p>
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">The page you requested does not exist.</p>
        <Link
          to="/"
          className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
