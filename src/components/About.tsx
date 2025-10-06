const About = () => {
  return <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-foreground">
          Our <span className="text-primary red-glow">Story</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">Our mission at Rojo Robo Dojo is to innovate, inspire, and excel in the field of robotics by building a collaborative and inclusive environment where creativity and technical skills come together to solve real-world challenges. Through self-learning, engineering, and community engagement, we shape the future of technology while empowering our team members to grow as leaders and innovators.</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">To be recognized as a leading team in FTC, setting new standards for first robotics, collaborative problem-solving, and inspiring future generations to pursue careers in science, technology, engineering, and mathematics.</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Values</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Innovation through continuous learning and experimentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Collaboration with the engineering community and community</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Excellence in design, execution, and competition</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Impact</h3>
            <p className="text-muted-foreground leading-relaxed">With multiple community outreach programs, and countless hours of innovation, SJ Shogun has established itself as a beacon of excellence in the robotics community, inspiring students and communities worldwide.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;