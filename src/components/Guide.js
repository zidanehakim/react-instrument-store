import { Cart, Planet, CheckmarkCircle, LogOut, LogoWhatsapp, MusicalNotes } from "react-ionicons";
import "./../Guide.css";

import arrowright from "./../img/arrowright.png";

import React from "react";
import { Link } from "react-router-dom";

function Guide() {
  return (
    <section className="outerSection pb-5">
      <div className="innerSection m-auto">
        <div className="guideChart">
          <div className="guideText">
            <h1 className="text-start">How to order using WhatsApp!</h1>
          </div>
          <div className="locate locate1">
            <div className="circle m-auto">
              <Planet color="White" className="m-auto icon" />
            </div>
            <div className="locateText">
              <h1>Browse Website</h1>
              <h4>Chrome, Firefox, Opera &amp; more</h4>
            </div>
          </div>
          <img className="m-auto arrow arrow1" src={arrowright} alt="next" />
          <div className="locate locate2">
            <div className="circle m-auto">
              <MusicalNotes color="White" className="m-auto icon" />
            </div>
            <div className="locateText">
              <h1>Pick an Instrument</h1>
              <h4>Wide variety to choose from</h4>
            </div>
          </div>
          <img className="m-auto arrow arrow2" src={arrowright} alt="next" />
          <div className="locate locate3">
            <div className="circle m-auto">
              <Cart color="White" className="m-auto icon" />
            </div>
            <div className="locateText">
              <h1>Add to Cart</h1>
              <h4>Or buy it directly</h4>
            </div>
          </div>
          <img className="m-auto arrow arrow3" src={arrowright} alt="next" />
          <div className="locate locate4">
            <div className="circle m-auto">
              <LogOut color="White" className="m-auto icon" />
            </div>
            <div className="locateText">
              <h1>Checkout</h1>
              <h4>Confirm items and total price</h4>
            </div>
          </div>
          <img className="m-auto arrow arrow4" src={arrowright} alt="next" />
          <div className="locate locate5">
            <div className="circle m-auto">
              <LogoWhatsapp color="White" className="m-auto icon" />
            </div>
            <div className="locateText">
              <h1>Go to WhatsApp</h1>
              <h4>Provide your delivery address</h4>
            </div>
          </div>
          <img className="m-auto arrow arrow5" src={arrowright} alt="next" />
          <div className="locate locate6">
            <div className="circle m-auto">
              <CheckmarkCircle color="White" className="m-auto icon" />
            </div>
            <div className="locateText">
              <h1>Done!</h1>
              <h4>Wait for your package to arrive</h4>
            </div>
          </div>
          <Link className="shopNow" to="/react-instrument-store/Products">
            <h4 className="m-auto">Shop Now!</h4>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Guide;
