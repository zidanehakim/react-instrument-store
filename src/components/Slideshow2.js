import "./../Slideshow2.css";

import React, { Component } from "react";

import guitar from "./../img/guitar.jpg";
import piano from "./../img/piano.jpg";
import violin from "./../img/violin.jpg";

import guitaricon from "./../img/guitaricon.png";
import pianoicon from "./../img/pianoicon.png";
import violinicon from "./../img/violinicon.png";
import bassicon from "./../img/bassicon.png";

class Slideshow2 extends Component {
  state = {};
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          filter: "blur(0)",
          position: "sticky",
          width: "100vw",
          height: "fit-content",
        }}
      >
        {/* SLIDESHOW START */}
        <div className="mainbg absolute" />
        <div className="row">
          <div className="mt-5 m-auto col-sm-7 text-white">
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" style={{ borderRadius: "2em", boxShadow: "0 0 0 2px #ababab" }} data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner" style={{ borderRadius: "2em" }}>
                <div className="carousel-item active">
                  <img src={guitar} className="d-block w-100" alt="../img/guitar.jpg" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Guitar</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={piano} className="d-block w-100" alt="../img/guitar.jpg" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Piano</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={violin} className="d-block w-100" alt="../img/guitar.jpg" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Violin</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* SLIDESHOW END */}

        {/* ALL CATEGORIES START */}
        <div className="row">
          <div
            className="m-auto col-sm-8 text-white my-5 categories"
            style={{
              boxShadow: "0 0 5px .5px rgb(181, 181, 181)",
              borderRadius: "3em",
              zIndex: 10,
              backgroundImage: "linear-gradient(#151515,#2c2c2c)",
            }}
          >
            <h3 className="text-center my-4">All Categories</h3>
            <div className="d-flex justify-content-center flex-wrap">
              <a href="#a" className="card box1" style={{ width: "9em", height: "9em" }}>
                <div className="card-img-top m-auto d-flex" style={{ width: "70%" }}>
                  <img className="m-auto my-2" src={guitaricon} alt="Guitar Icon" style={{ width: "4.4em" }} />
                </div>
                <div className="card-body">
                  <p className="card-text text-center fs-6">Guitar</p>
                </div>
              </a>
              <a href="#a" className="card box2" style={{ width: "9em", height: "9em" }}>
                <div className="card-img-top m-auto d-flex" style={{ width: "70%" }}>
                  <img className="m-auto my-2" src={bassicon} alt="Bass Icon" style={{ width: "4.4em" }} />
                </div>
                <div className="card-body">
                  <p className="card-text text-center fs-6">Bass</p>
                </div>
              </a>
              <a href="#a" className="card box3" style={{ width: "9em", height: "9em" }}>
                <div className="card-img-top m-auto d-flex" style={{ width: "70%" }}>
                  <img className="m-auto my-2" src={pianoicon} alt="Piano Icon" style={{ width: "4.4em" }} />
                </div>
                <div className="card-body">
                  <p className="card-text text-center fs-6">Piano</p>
                </div>
              </a>
              <a href="#a" className="card box4" style={{ width: "9em", height: "9em" }}>
                <div className="card-img-top m-auto d-flex" style={{ width: "70%" }}>
                  <img className="m-auto my-2" src={violinicon} alt="Violin Icon" style={{ width: "4.4em" }} />
                </div>
                <div className="card-body">
                  <p className="card-text text-center fs-6">Violin</p>
                </div>
              </a>
              <a href="#a" className="card box5" style={{ width: "9em", height: "9em" }}>
                <div className="card-img-top m-auto d-flex" style={{ width: "70%" }}>
                  <img className="m-auto my-2" src={guitaricon} alt="Guitar Icon" style={{ width: "4.4em" }} />
                </div>
                <div className="card-body">
                  <p className="card-text text-center fs-6">Guitar</p>
                </div>
              </a>
              <a href="#a" className="card box6" style={{ width: "9em", height: "9em" }}>
                <div className="card-img-top m-auto d-flex" style={{ width: "70%" }}>
                  <img className="m-auto my-2" src={guitaricon} alt="Guitar Icon" style={{ width: "4.4em" }} />
                </div>
                <div className="card-body">
                  <p className="card-text text-center fs-6">Guitar</p>
                </div>
              </a>
              <a href="#a" className="card box4" style={{ width: "9em", height: "9em" }}>
                <div className="card-img-top m-auto d-flex" style={{ width: "70%" }}>
                  <img className="m-auto my-2" src={guitaricon} alt="Violin Icon" style={{ width: "4.4em" }} />
                </div>
                <div className="card-body">
                  <p className="card-text text-center fs-6">Violin</p>
                </div>
              </a>
              <a href="#a" className="card box5" style={{ width: "9em", height: "9em" }}>
                <div className="card-img-top m-auto d-flex" style={{ width: "70%" }}>
                  <img className="m-auto my-2" src={guitaricon} alt="Guitar Icon" style={{ width: "4.4em" }} />
                </div>
                <div className="card-body">
                  <p className="card-text text-center fs-6">Guitar</p>
                </div>
              </a>
              <a href="#a" className="card box6" style={{ width: "9em", height: "9em" }}>
                <div className="card-img-top m-auto d-flex" style={{ width: "70%" }}>
                  <img className="m-auto my-2" src={guitaricon} alt="Guitar Icon" style={{ width: "4.4em" }} />
                </div>
                <div className="card-body">
                  <p className="card-text text-center fs-6">Guitar</p>
                </div>
              </a>
              <a href="#a" className="card box4" style={{ width: "9em", height: "9em" }}>
                <div className="card-img-top m-auto d-flex" style={{ width: "70%" }}>
                  <img className="m-auto my-2" src={violinicon} alt="Violin Icon" style={{ width: "4.4em" }} />
                </div>
                <div className="card-body">
                  <p className="card-text text-center fs-6">Violin</p>
                </div>
              </a>
              <a href="#a" className="card box5" style={{ width: "9em", height: "9em" }}>
                <div className="card-img-top m-auto d-flex" style={{ width: "70%" }}>
                  <img className="m-auto my-2" src={guitaricon} alt="Guitar Icon" style={{ width: "4.4em" }} />
                </div>
                <div className="card-body">
                  <p className="card-text text-center fs-6">Guitar</p>
                </div>
              </a>
              <a href="#a" className="card box6 mb-5" style={{ width: "9em", height: "9em" }}>
                <div className="card-img-top m-auto d-flex" style={{ width: "70%" }}>
                  <img className="m-auto my-2" src={guitaricon} alt="Guitar Icon" style={{ width: "4.4em" }} />
                </div>
                <div className="card-body">
                  <p className="card-text text-center fs-6">Guitar</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* ALL CATEGORIES END */}
      </div>
    );
  }
}

export default Slideshow2;
