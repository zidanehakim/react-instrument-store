import "./../Slideshow.css";

import React from "react";

function Slideshow(props) {
  return (
    <section className="outerSections">
      <div class="blackMask"></div>
      <div className="text-center bg-image heroImage">
        <div className="heroContent">
          <h1 className="">Where words fail</h1>
          <h1 className="">music speaks</h1>
          <h4 className="">wise man once said.</h4>
        </div>
      </div>
    </section>
  );
}

export default Slideshow;
