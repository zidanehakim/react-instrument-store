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
            <h1 className="text-start">Cara order disini menggunakan Whatsapp!</h1>
          </div>
          <div class="locate locate1">
            <div class="circle m-auto">
              <Planet width="2.5em" height="2.5em" color="White" className="m-auto" />
            </div>
            <div class="locateText">
              <h1>Browse website</h1>
              <h4>Chrome, firefox, opera dan lainnya</h4>
            </div>
          </div>
          <img className="m-auto arrow arrow1" src={arrowright} alt="a"></img>
          <div class="locate locate2">
            <div class="circle m-auto">
              <MusicalNotes width="2.5em" height="2.5em" color="White" className="m-auto" />
            </div>
            <div class="locateText">
              <h1>Pilih alat musik</h1>
              <h4>Beragam jenis alat musik untuk dipilih</h4>
            </div>
          </div>
          <img className="m-auto arrow arrow2" src={arrowright} alt="a"></img>
          <div class="locate locate3">
            <div class="circle m-auto">
              <Cart width="2.5em" height="2.5em" color="White" className="m-auto" />
            </div>
            <div class="locateText">
              <h1>Masukkan ke dalam keranjang</h1>
              <h4>Atau beli langsung</h4>
            </div>
          </div>
          <img className="m-auto arrow arrow3" src={arrowright} alt="a"></img>
          <div class="locate locate4">
            <div class="circle m-auto">
              <LogOut width="2.5em" height="2.5em" color="White" className="m-auto" />
            </div>
            <div class="locateText">
              <h1>Checkout</h1>
              <h4>Pastikan harga dan barang sudah sesuai</h4>
            </div>
          </div>
          <img className="m-auto arrow arrow4" src={arrowright} alt="a"></img>
          <div class="locate locate5">
            <div class="circle m-auto">
              <LogoWhatsapp width="2.5em" height="2.5em" color="White" className="m-auto" />
            </div>
            <div class="locateText">
              <h1>Diarahkan ke Whatsapp</h1>
              <h4>Berikan alamat tujuan pengiriman</h4>
            </div>
          </div>
          <img className="m-auto arrow arrow5" src={arrowright} alt="a"></img>
          <div class="locate locate6">
            <div class="circle m-auto">
              <CheckmarkCircle width="2.5em" height="2.5em" color="White" className="m-auto" />
            </div>
            <div class="locateText">
              <h1>Selesai</h1>
              <h4>Tunggu paket sampai ke alamat tujuan</h4>
            </div>
          </div>
          <Link className="shopNow" to="/Products">
            <h4 className="m-auto">Shop Now!</h4>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Guide;
