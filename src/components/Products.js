import { useState, useMemo } from "react";
import { Cart, NavigateCircle } from "react-ionicons";
import "./../Products.css";

import { PRODUCTS, CATEGORIES } from "./../data/products";

function formatPrice(price) {
  return "Rp " + price.toLocaleString("id-ID");
}

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="starRating" aria-label={`Rating ${rating}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{
            color: i <= full || (i === full + 1 && half) ? "#e0a84b" : "rgba(37,21,4,0.2)",
            fontSize: "0.75em",
          }}
        >
          ★
        </span>
      ))}
      <span className="ratingNum">{rating}</span>
    </span>
  );
}

function Products({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, search]);

  const handleAddToCart = (product) => {
    if (!product.available) return;
    if (addToCart) addToCart(product);
  };

  return (
    <section>
      <div className="outerProducts">
        <div className="innerProducts m-auto">
          {/* Page header */}
          <div className="productsHeader">
            <h1 className="productsPageTitle">Our Instruments</h1>
            <p className="productsPageSub">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}{" "}
              {activeCategory !== "All" ? `in ${activeCategory}` : "available"}
            </p>
          </div>

          {/* Controls: search + category filter */}
          <div className="productsControls">
            <div className="productsSearchWrap">
              <svg className="searchIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                className="productsSearchInput"
                type="text"
                placeholder="Search instruments..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button className="searchClear" onClick={() => setSearch("")} aria-label="Clear search">×</button>
              )}
            </div>

            <div className="categoryPills">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`categoryPill${activeCategory === cat ? " active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          {filtered.length === 0 ? (
            <div className="productsEmpty">
              <p>No instruments found</p>
              <button
                className="resetFiltersBtn"
                onClick={() => { setActiveCategory("All"); setSearch(""); }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="productsGallery">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className={`productCard${!product.available ? " unavailable" : ""}`}
                >
                  <div
                    className="productCardImg"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    {!product.available && (
                      <span className="soldOutBadge">Sold Out</span>
                    )}
                  </div>
                  <div className="productCardBody">
                    <span className="productCardCategory">{product.category}</span>
                    <h4 className="productCardName">{product.name}</h4>
                    <StarRating rating={product.rating} />
                    <p className="productCardDesc">{product.description}</p>
                    <div className="productCardFooter">
                      <span className="productCardPrice">{formatPrice(product.price)}</span>
                      <div className="productCardBtns">
                        <a
                          href={`https://wa.me/6285264104038?text=Halo%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}`}
                          className="btnDetail"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Inquire via WhatsApp"
                        >
                          <NavigateCircle color="white" width="1em" height="1em" />
                        </a>
                        <button
                          className={`btnCart${!product.available ? " disabled" : ""}`}
                          onClick={() => handleAddToCart(product)}
                          disabled={!product.available}
                          title={product.available ? "Add to cart" : "Out of stock"}
                        >
                          <Cart color="white" width="1em" height="1em" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
