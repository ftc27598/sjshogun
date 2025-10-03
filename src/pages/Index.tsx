import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import About from "@/components/About";
import Robots from "@/components/Robots";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhoWeAre />
      <About />
      <Robots />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
