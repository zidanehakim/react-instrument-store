import Slideshow from "./Slideshow";
import Guide from "./Guide";
import { Link } from "react-router-dom";
import { Cart } from "react-ionicons";
import { FEATURED_PRODUCTS } from "./../data/products";
import "./../Home.css";

function formatPrice(price) {
  return "Rp " + price.toLocaleString("id-ID");
}

function Home({ addToCart }) {
  return (
    <div>
      <Slideshow />
      <Guide />

      {/* ── Featured Products ────────────────────────────────── */}
      <section className="featuredSection">
        <div className="featuredInner">
          <div className="featuredHeader">
            <div>
              <span className="featuredEyebrow">Hand-Picked</span>
              <h2 className="featuredTitle">Featured Instruments</h2>
            </div>
            <Link to="/react-instrument-store/Products" className="featuredViewAll">
              View all →
            </Link>
          </div>

          <div className="featuredGrid">
            {FEATURED_PRODUCTS.map((product) => (
              <div key={product.id} className="featuredCard">
                <div
                  className="featuredCardImg"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="featuredCardBody">
                  <span className="featuredCardCat">{product.category}</span>
                  <h4 className="featuredCardName">{product.name}</h4>
                  <div className="featuredCardBottom">
                    <span className="featuredCardPrice">{formatPrice(product.price)}</span>
                    <button
                      className="featuredCartBtn"
                      onClick={() => addToCart && addToCart(product)}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <Cart color="white" width="1em" height="1em" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
