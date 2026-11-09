import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowDownToLine, ArrowUpRight, ChevronDown, Flower2, Rotate3D, Sun, RefreshCw } from "lucide-react";
import Navigation from "@/components/Navigation";
import PollinateModel from "@/components/pollinate/PollinateModel";
import "./ProjectPollinate.css";

const folder = "/project-pollinate/";
const downloads = 617;
const files = [
  { name: "Housing", detail: "Back-down print orientation", format: "STL", file: "housing.stl" },
  { name: "Removable roof", detail: "Front-edge print orientation", format: "STL", file: "roof.stl" },
  { name: "Editable design", detail: "Assembly and individual parts", format: "SCAD", file: "bee-hotel.scad" },
  { name: "Blueprints", detail: "Dimensions and assembly details", format: "SVG", file: "blueprints.svg" },
];

function ImpactEstimate() {
  const [buildRate, setBuildRate] = useState(25);
  const hotels = Math.floor(downloads * buildRate / 100);
  const format = (value: number) => value.toLocaleString("en-US");
  return <section className="pp-impact pp-width" aria-labelledby="pp-impact-title">
    <div className="pp-impact-heading" data-pp-reveal><div><p className="pp-eyebrow">The potential so far</p><h2 id="pp-impact-title">617 downloads.<br /><span>What could they become?</span></h2></div><p>Every build could add a nesting place.<br />Explore what that might look like.</p></div>
    <div className="pp-impact-numbers" aria-live="polite" aria-atomic="true"><div><strong>{format(hotels)}</strong><span>Possible bee hotels</span></div><div><strong>{format(hotels * 48)}</strong><span>Potential nesting spaces</span></div></div>
    <div className="pp-assumptions"><div><label htmlFor="pp-build-rate">If <strong>{buildRate}%</strong> of downloads become builds</label><input id="pp-build-rate" type="range" min="5" max="100" step="5" value={buildRate} onChange={event => setBuildRate(Number(event.target.value))} aria-valuetext={buildRate + " percent of downloads become builds"} /><div className="pp-range-labels"><span>5%</span><span>100%</span></div></div><p>An estimate, not confirmed installations. Assumes one hotel per build and 48 natural nesting tubes per hotel. Builds and bee occupancy have not been measured.</p></div>
    <p className="pp-project-reach">19,351 page views <span>·</span> 617 downloads <span>·</span> Free and open source</p>
  </section>;
}

export default function ProjectPollinate() {
  const heroRef = useRef<HTMLElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [frontView, setFrontView] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");
    document.title = "Project Pollinate — A bee hotel by SJ Shogun";
    description?.setAttribute("content", "Print a bee hotel with Project Pollinate. Free STL parts, editable CAD, blueprints, and assembly notes from SJ Shogun.");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("pp-is-visible"); observer.unobserve(entry.target); } });
    }, { threshold: 0.12 });
    pageRef.current?.querySelectorAll("[data-pp-reveal]").forEach(element => observer.observe(element));
    return () => { observer.disconnect(); document.title = previousTitle; if (previousDescription != null) description?.setAttribute("content", previousDescription); };
  }, []);

  return <div className="pollinate-page" ref={pageRef}>
    <a href="#pollinate-main" className="skip-link">Skip to main content</a>
    <Navigation />
    <main id="pollinate-main">
      <section className="pp-hero" ref={heroRef} aria-labelledby="pp-title"><div className="pp-hero-frame">
        <div className="pp-hero-heading"><p>Made by SJ Shogun. Made for your garden.</p><h1 id="pp-title">Project Pollinate.</h1><p className="pp-hero-subtitle">A bee hotel. Made by you.</p></div>
        <div className="pp-product-stage"><div className="pp-stage-light" /><PollinateModel frontView={frontView} sectionRef={heroRef} /></div>
        <div className="pp-view-switch" role="group" aria-label="Product view"><button type="button" aria-pressed={!frontView} onClick={() => setFrontView(false)}><Rotate3D size={14} /> Explore</button><button type="button" aria-pressed={frontView} onClick={() => setFrontView(true)}>Front view</button></div>
        <div className="pp-hero-download"><a href="#downloads" className="pp-download-button">Get the files <ArrowDown size={16} /></a><span>Free to download. Open to everyone.</span></div>
        <a href="#downloads" className="pp-scroll-cue">Print your own <ArrowDown size={14} /></a><p className="pp-render-caption">The printable housing, with natural nesting reeds added. Colours are illustrative.</p>
      </div></section>

      <section className="pp-download-section pp-width" id="downloads" aria-labelledby="pp-files-title">
        <div className="pp-files-heading" data-pp-reveal><div><p className="pp-eyebrow">Free downloads · Version 1.0</p><h2 id="pp-files-title">Print the housing.<br /><span>Add natural reeds.</span></h2><p>Free files for the housing and roof.<br />Natural nesting reeds are added separately.</p></div><div className="pp-all-files"><a href={folder + "project-pollinate-v1.zip"} download className="pp-download-button">Download all files <ArrowDownToLine size={17} /></a><span>STL parts, CAD, blueprints &amp; build notes</span></div></div>
        <div className="pp-file-grid" data-pp-reveal>{files.map(file => <a href={folder + file.file} download key={file.file} className="pp-file"><span className="pp-file-format">{file.format}</span><span><strong>{file.name}</strong><span>{file.detail}</span></span><ArrowDownToLine size={17} /></a>)}</div>
        <details className="pp-print-notes"><summary>Before you print <ChevronDown size={15} /></summary><div><p><strong>Printer:</strong> 220 × 220 × 250 mm build volume or larger. STL files are already oriented for printing. Use a 5 mm brim on the roof.</p><p><strong>Assembly:</strong> Four M3 × 16 mm bolts, washers and nuts. Add removable natural reeds; the printed parts form the outer shelter.</p><p><strong>Validation:</strong> Closed, connected meshes; no assembly collisions. Physical print, fit and field testing are still pending.</p><a href={folder + "README.txt"} download>Read the full build notes <ArrowDownToLine size={13} /></a><a href={folder + "validation.json"} download>Mesh validation report <ArrowDownToLine size={13} /></a></div></details>
      </section>

      <ImpactEstimate />

      <section className="pp-design pp-width" id="design" aria-labelledby="pp-design-title"><div className="pp-section-top" data-pp-reveal><div><p className="pp-eyebrow">The design, in detail</p><h2 id="pp-design-title">Two parts.<br /><span>Designed to fit.</span></h2></div><a href={folder + "blueprints.svg"} download className="pp-inline-link">Download blueprints <ArrowDownToLine size={15} /></a></div>
        <a href={folder + "blueprints.svg"} target="_blank" rel="noopener noreferrer" className="pp-engineering pp-blueprint-link" data-pp-reveal><img src={folder + "blueprints-dark.svg"} alt="Project Pollinate v1.0 blueprints: front and side projections, housing 180 by 150 by 160 millimetres, roof 200 by 200 millimetres, fastener locations and print orientations" width="1200" height="820" loading="lazy" /><div className="pp-engineering-note"><span>Projected from the delivered CAD · Dimensions in mm</span><span>Open full drawing <ArrowUpRight size={12} /></span></div></a>
        <div className="pp-features" data-pp-reveal><article><span>01</span><h3>A removable roof.</h3><p>Guide channels align the roof with the housing. Four M3 bolts secure it, and let you remove it for maintenance.</p></article><article><span>02</span><h3>A closed back. Room to drain.</h3><p>A solid back shelters the reeds. Two mounting holes secure the hotel, and two floor holes let water drain.</p></article><article><span>03</span><h3>Natural nesting materials.</h3><p>Add closed-back reeds with smooth entrances. Keep them removable, and choose sizes for the solitary bees in your area.</p></article></div>
      </section>

      <section className="pp-habitat" aria-labelledby="pp-habitat-title"><div className="pp-width"><div data-pp-reveal><p className="pp-eyebrow">Once it’s built</p><h2 id="pp-habitat-title">A place to nest.<br /><span>Flowers to feed on.</span></h2><p className="pp-habitat-intro">Some solitary bees nest in hollow stems and small cavities.<br />Help them pollinate your garden with a sheltered nesting place.</p></div><div className="pp-care-grid" data-pp-reveal><article><Sun /><h3>Find a sheltered spot.</h3><p>Mount it securely where it gets morning sun, protected from heavy rain and overheating.</p></article><article><Flower2 /><h3>Plant native flowers.</h3><p>Nearby flowers provide pollen and nectar. Choose plants that bloom at different times of year.</p></article><article><RefreshCw /><h3>Keep it healthy.</h3><p>Inspect and replace nesting materials. Follow local guidance for cleaning and seasonal care.</p></article></div><a className="pp-source-link" href="https://extension.usu.edu/planthealth/research/making-and-managing-wild-bee-hotels" target="_blank" rel="noopener noreferrer">Bee hotel care guide · Utah State University <ArrowUpRight size={13} /></a></div></section>
    </main>
    <footer className="pp-footer pp-width"><div><Link to="/project-pollinate">Project Pollinate<span>.</span></Link><p>By Saint John’s Shogun · Free under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a></p></div><Link to="/">Back to Shogun <ArrowUpRight size={15} /></Link></footer>
  </div>;
}
