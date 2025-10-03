const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground mb-2">
          Reach us at{" "}
          <a
            href="mailto:rojodojorobotics@gmail.com"
            className="text-primary hover:text-primary/80 transition-colors red-glow-hover"
          >
            rojodojorobotics@gmail.com
          </a>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SJ Shogun Robotics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
