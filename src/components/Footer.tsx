import logoImage from "@/assets/sjs-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-6 py-10">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-4 flex justify-center">
          <img src={logoImage} alt="Saint John's Shogun Logo" className="h-14 w-14" loading="lazy" decoding="async" />
        </div>
        <p className="mb-2 font-sans text-muted-foreground">
          Reach us at{" "}
          <a
            href="mailto:dojorojorobotics@gmail.com"
            className="text-primary transition-colors red-glow-hover hover:text-primary/80"
          >
            dojorojorobotics@gmail.com
          </a>
        </p>
        <p className="font-sans text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SJ Shogun Robotics. All rights reserved.
        </p>
        <p className="mt-2 font-sans text-sm text-muted-foreground">
          We are using{" "}
          <a
            href="https://robodk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-colors red-glow-hover hover:text-primary/80"
          >
            RoboDK
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
