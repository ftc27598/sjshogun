import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import About from "@/components/About";
import Robots from "@/components/Robots";
import Team from "@/components/Team";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-[100dvh] bg-background">
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <WhoWeAre />
        <About />
        <Robots />
        <Team />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
