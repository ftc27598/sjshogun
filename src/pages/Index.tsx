import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Robots from "@/components/Robots";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="shogun-site" id="top">
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Robots />
        <Team />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
