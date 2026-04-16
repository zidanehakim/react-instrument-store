import { useEffect, useState } from "react";
import "./../CartDrawer.css";

function formatPrice(price) {
  return "Rp " + price.toLocaleString("id-ID");
}

function CartDrawer({ isOpen, onClose, cartItems, removeFromCart, updateQuantity }) {
  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const waMessage = cartItems
    .map((item) => `${item.quantity}x ${item.product.name} (${formatPrice(item.product.price)})`)
    .join("%0A");
  const waTotal = `%0ATotal: ${formatPrice(total)}`;
  const waUrl = `https://wa.me/6285264104038?text=Halo%2C%20saya%20ingin%20memesan%3A%0A${waMessage}${waTotal}`;

  const handleRemove = (product) => {
    removeFromCart(product.id);
    setToastMsg(`${product.name} removed`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
  };

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <div className={`cartOverlay${isOpen ? " open" : ""}`} onClick={onClose} />

      <div className={`cartDrawer${isOpen ? " open" : ""}`} role="dialog" aria-label="Shopping cart">
        {/* Header */}
        <div className="cartHeader">
          <h2>
            Cart
            {cartItems.length > 0 && (
              <span className="cartCount">{cartItems.reduce((s, i) => s + i.quantity, 0)}</span>
            )}
          </h2>
          <button className="cartCloseBtn" onClick={onClose} aria-label="Close cart">×</button>
        </div>

        {/* Body */}
        <div className="cartBody">
          {cartItems.length === 0 ? (
            <div className="cartEmpty">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map(({ product, quantity }) => (
              <div className="cartItem" key={product.id}>
                <div
                  className="cartItemImg"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="cartItemInfo">
                  <div className="cartItemName">{product.name}</div>
                  <div className="cartItemCat">{product.category}</div>
                  <div className="cartItemPrice">{formatPrice(product.price)}</div>
                </div>
                <div className="cartItemRight">
                  <div className="qtyControls">
                    <button className="qtyBtn" onClick={() => updateQuantity(product.id, quantity - 1)}>−</button>
                    <span className="qtyNum">{quantity}</span>
                    <button className="qtyBtn" onClick={() => updateQuantity(product.id, quantity + 1)}>+</button>
                  </div>
                  <button className="removeBtn" onClick={() => handleRemove(product)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cartFooter">
            <div className="cartTotal">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <a
              className="checkoutBtn"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Order via WhatsApp
            </a>
          </div>
        )}
      </div>

      {/* Toast */}
      <div className={`cartToast${showToast ? " show" : ""}`}>{toastMsg}</div>
    </>
  );
}

export default CartDrawer;
