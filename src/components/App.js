import { useState } from "react";

import Navtop from "./Navtop";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import About from "./About";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import ScrollToTop from "./ScrollToTop";

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

const sentences = [
  "TOP QUALITY MUSICAL INSTRUMENT STORE",
  "AFFORDABLE SHIPPING FEES",
  "WIDE VARIETY OF INSTRUMENTS",
];

const defaultProps = {
  center: {
    lat: -3.4651371014864703,
    lng: 102.52496986899469,
  },
  zoom: 150,
};

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toastProduct, setToastProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    // Show toast
    setToastProduct(product.name);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ height: "fit-content", overflowX: "hidden" }}>
      <ScrollToTop />
      <Navtop
        sentence={sentences}
        colorDark="rgb(37, 21, 4)"
        colorBright="white"
        cartCount={cartCount}
        openCart={() => setCartOpen(true)}
      />
      <Routes>
        <Route path="/react-instrument-store/" element={<Home addToCart={addToCart} />} />
        <Route path="/react-instrument-store/About" element={<About />} />
        <Route
          path="/react-instrument-store/Contacts"
          element={<Contact center={defaultProps.center} zoom={defaultProps.zoom} />}
        />
        <Route
          path="/react-instrument-store/Products"
          element={<Products addToCart={addToCart} />}
        />
      </Routes>
      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />

      {/* Add-to-cart toast notification */}
      <div
        style={{
          position: "fixed",
          bottom: "1.5em",
          left: "50%",
          transform: `translateX(-50%) translateY(${showToast ? "0" : "4em"})`,
          background: "rgb(37, 134, 66)",
          color: "#fff",
          padding: "0.7em 1.4em",
          borderRadius: "99px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.88em",
          fontWeight: "600",
          zIndex: 300,
          opacity: showToast ? 1 : 0,
          pointerEvents: "none",
          transition: "opacity 0.25s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}
      >
        ✓ {toastProduct} added to cart
      </div>
    </div>
  );
}

export default App;
