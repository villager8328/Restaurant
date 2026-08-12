import { useState } from "react";
import "./index.css";

const menu = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Creamy tomato gravy with tender chicken.",
    price: 299,
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    description: "Smoky grilled paneer with Indian spices.",
    price: 249,
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice with aromatic spices.",
    price: 279,
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Masala Dosa",
    description: "Crispy dosa served with masala and chutney.",
    price: 149,
    category: "South Indian",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Veg Hakka Noodles",
    description: "Wok-tossed noodles with fresh vegetables.",
    price: 179,
    category: "Chinese",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Gulab Jamun",
    description: "Soft warm dumplings soaked in sweet syrup.",
    price: 99,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1666190094762-5a7c0b7d0f72?auto=format&fit=crop&w=900&q=80",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);

  const categories = [
    "All",
    "Starters",
    "Main Course",
    "South Indian",
    "Chinese",
    "Desserts",
  ];

  const filteredMenu =
    category === "All"
      ? menu
      : menu.filter((item) => item.category === category);

  const addToCart = (item) => {
    setCart((current) => {
      const existing = current.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...current, { ...item, quantity: 1 }];
    });
  };

  const changeQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 49 : 0;
  const total = subtotal + delivery;

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="brand">
          <span className="brand-icon">W</span>
          <div>
            <strong>WEBNEST</strong>
            <small>RESTAURANT</small>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="cart-button" onClick={() => setCartOpen(true)}>
          🛒 Cart
          {cartCount > 0 && <span>{cartCount}</span>}
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO WEBNEST</p>

          <h1>
            Great food.
            <br />
            <span>Great moments.</span>
          </h1>

          <p className="hero-text">
            Fresh ingredients, bold flavours and delicious food made with
            passion. Order your favourites and enjoy them at home.
          </p>

          <div className="hero-actions">
            <a href="#menu" className="primary-btn">
              Explore Menu →
            </a>

            <a href="#about" className="secondary-btn">
              Our Story
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-food">🍛</div>
          <div>
            <strong>Chef's Special</strong>
            <p>Freshly prepared every day</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div>
          <span>🔥</span>
          <strong>Fresh & Hot</strong>
          <p>Made to order</p>
        </div>

        <div>
          <span>🥘</span>
          <strong>Authentic Taste</strong>
          <p>Rich Indian flavours</p>
        </div>

        <div>
          <span>🚴</span>
          <strong>Fast Delivery</strong>
          <p>At your doorstep</p>
        </div>

        <div>
          <span>⭐</span>
          <strong>Quality First</strong>
          <p>Only the best</p>
        </div>
      </section>

      {/* MENU */}
      <section className="menu-section" id="menu">
        <div className="section-heading">
          <p className="eyebrow">OUR MENU</p>
          <h2>Made with love, served with flavour.</h2>
          <p>Choose something delicious from our kitchen.</p>
        </div>

        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredMenu.map((item) => (
            <article className="food-card" key={item.id}>
              <div className="food-image">
                <img src={item.image} alt={item.name} />
                <span>{item.category}</span>
              </div>

              <div className="food-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>

                <div className="food-bottom">
                  <strong>₹{item.price}</strong>

                  <button onClick={() => addToCart(item)}>
                    + Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div>
          <p className="eyebrow">ABOUT US</p>
          <h2>Good food brings people together.</h2>
          <p>
            At WEBNEST RESTAURANT, we believe every meal should feel special.
            From carefully selected ingredients to the final plate, we focus
            on flavour, freshness and quality.
          </p>
          <p>
            Whether you're having a quick meal or celebrating with family,
            we're here to make it memorable.
          </p>
        </div>

        <div className="about-box">
          <span>🍽️</span>
          <h3>Made fresh</h3>
          <p>Every order is prepared with care.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div>
          <div className="brand footer-brand">
            <span className="brand-icon">W</span>
            <div>
              <strong>WEBNEST</strong>
              <small>RESTAURANT</small>
            </div>
          </div>

          <p>
            Tandoor fire, slow spice, fast delivery. Fresh food made for good
            moments.
          </p>
        </div>

        <div>
          <h3>Visit & Contact</h3>
          <p>📍 14 Residency Road, Bengaluru</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@webnestrestaurant.com</p>
        </div>

        <div>
          <h3>Opening Hours</h3>
          <p>Mon – Sun</p>
          <p>11:00 AM – 11:00 PM</p>
        </div>
      </footer>

      {/* CART OVERLAY */}
      {cartOpen && (
        <div className="overlay" onClick={() => setCartOpen(false)}>
          <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <div>
                <p className="eyebrow">YOUR ORDER</p>
                <h2>Shopping Cart</h2>
              </div>

              <button
                className="close-btn"
                onClick={() => setCartOpen(false)}
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div>🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add something delicious from our menu.</p>
                <button
                  className="primary-btn"
                  onClick={() => {
                    setCartOpen(false);
                    document
                      .getElementById("menu")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <strong>₹{item.price * item.quantity}</strong>

                        <div className="quantity">
                          <button onClick={() => changeQuantity(item.id, -1)}>
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button onClick={() => changeQuantity(item.id, 1)}>
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        className="remove"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>₹{subtotal}</strong>
                  </div>

                  <div>
                    <span>Delivery</span>
                    <strong>₹{delivery}</strong>
                  </div>

                  <div className="grand-total">
                    <span>Total</span>
                    <strong>₹{total}</strong>
                  </div>

                  <button
                    className="checkout-btn"
                    onClick={() =>
                      alert("Thank you! Checkout is ready to connect.")
                    }
                  >
                    Proceed to Checkout →
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
