import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./../Contact.css";

import whatsapp from "./../img/whatsapp.png";
import telephone from "./../img/telephone.png";

import React from "react";

import Form from "./Form";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

function Contact(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAUsK6_4eKm_J1N58k_qzxwux3aJs3DhMw",
    libraries,
  });

  const gmap = (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={props.zoom} center={props.center}>
      <Marker position={props.center} />
    </GoogleMap>
  );

  return (
    <section className="outerContact pb-5">
      <div className="innerContact m-auto">
        <div className="gridBlock">
          <div className="guideText guideText1">
            <h1 className="text-start">Hubungi kontak kami siap membantu!</h1>
          </div>
          <div className="gMap">{isLoaded ? gmap : <div>Error loading maps</div>}</div>
          <div class="contactGallery">
            <div class="card cardContact text-center me-4">
              <img class="card-img-top m-auto pt-4 pb-3" src={whatsapp} alt="Card cap" />
              <div class="card-body">
                <h5 class="card-title">Whatsapp</h5>
                <p class="card-text mb-3">Contact our whatsapp +6285264104038</p>
                <a href="#a" class="btn btn-primary">
                  Chat now!
                </a>
              </div>
            </div>
            <div class="card cardContact text-center">
              <img class="card-img-top m-auto pt-4 pb-3" src={telephone} alt="Card cap" />
              <div class="card-body">
                <h5 class="card-title">Mobile Phone</h5>
                <p class="card-text mb-3">Call us through phone 085264104038</p>
                <a href="#a" class="btn btn-primary">
                  Call now!
                </a>
              </div>
            </div>
          </div>
          <div className="guideText guideText2">
            <h1 className="text-center">atau email form dengan dibawah..</h1>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
