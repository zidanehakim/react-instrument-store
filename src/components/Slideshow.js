import "./../Slideshow.css";
import { Link } from "react-router-dom";
import React from "react";

function Slideshow() {
  return (
    <section className="outerSections">
      <div className="blackMask"></div>
      <div className="text-center bg-image heroImage">
        <div className="heroContent">
          <span className="heroEyebrow">Transesa Music</span>
          <h1 className="heroLine1">Where words fail,</h1>
          <h1 className="heroLine2">music speaks.</h1>
          <p className="heroSub">Discover premium instruments — guitars, keyboards, drums &amp; more.</p>
          <div className="heroCta">
            <Link to="/react-instrument-store/Products" className="heroBtn heroBtn--primary">
              Shop Now
            </Link>
            <Link to="/react-instrument-store/About" className="heroBtn heroBtn--ghost">
              Our Story
            </Link>
          </div>
        </div>
        <div className="heroScroll">
          <span className="heroScrollLine"></span>
          <span className="heroScrollLabel">Scroll</span>
        </div>
      </div>
    </section>
  );
}

export default Slideshow;
