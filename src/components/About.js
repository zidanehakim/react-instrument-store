import { MusicalNotes } from "react-ionicons";
import "./../About.css";

import aboutImg from "./../img/aboutImg.jpg";
import missionDecorate from "./../img/missionDecorate.png";
import missionDecorate2 from "./../img/missionDecorate2.png";

import React from "react";

function About() {
  return (
    <section>
      <div className="outerAbout outerAbout1">
        <div class="blackMasks"></div>
        <div className="innerAbout m-auto">
          <div className="gridAbout">
            <img src={aboutImg} alt="About us illustration" className="aboutImg" />
            <div className="aboutText">
              <h1>About us-</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum pariatur minus animi architecto laboriosam eligendi fugit aspernatur consectetur distinctio a ut, et dolores iste quas, ea incidunt natus ipsa quidem?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="outerAbout outerAbout2">
        <div className="innerAbout m-auto">
          <div className="gridAbout">
            <div className="aboutText">
              <img className="md1" src={missionDecorate} alt="asd" />
              <img className="md2" src={missionDecorate2} alt="asd" />
              <h1 className="text-start md3">OUR MISSION</h1>
            </div>
            <div className="mission1">
              <MusicalNotes width="2.3em" height="2.3em" />
              <h2>Quality instrument</h2>
            </div>
            <div className="mission2">
              <MusicalNotes width="2.3em" height="2.3em" />
              <h2>More Partnerships</h2>
            </div>
            <div className="mission3">
              <MusicalNotes width="2.3em" height="2.3em" />
              <h2>Exceptional service</h2>
            </div>
            <div className="mission4">
              <MusicalNotes width="2.3em" height="2.3em" />
              <h2>Innovative techs</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
