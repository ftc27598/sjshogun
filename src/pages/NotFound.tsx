import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";

const NotFound = () => (
  <div className="min-h-[100dvh] bg-background"><Navigation /><main className="page-width flex min-h-[65dvh] flex-col justify-center py-20"><p className="section-label"><span>404</span> Page not found</p><h1 className="section-title mt-8">Page not found</h1><p className="mt-5 max-w-lg text-muted-foreground">The page you requested does not exist.</p><Link to="/" className="action-button mt-8 w-fit">Return home <Arrow direction="right" /></Link></main><Footer /></div>
);
export default NotFound;
