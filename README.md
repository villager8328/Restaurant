# Ember & Spice — Restaurant Ordering Website

A mobile-first restaurant ordering site built with React, Vite and Tailwind CSS.
Customers browse the menu, build a cart, check out, and the order is sent to the
restaurant as a pre-filled WhatsApp message — no payment gateway required.

## ✏️ Where to edit things

| What you want to change | File |
|---|---|
| **WhatsApp number**, restaurant name, logo, phone, address, hours, delivery charge, minimum order | `src/config/restaurantConfig.js` |
| **Menu items & categories** (name, price, description, image, veg/non-veg, featured) | `src/data/menuData.js` |

You will almost never need to touch anything else to rebrand this for a
different restaurant.

### Setting the WhatsApp number

Open `src/config/restaurantConfig.js` and edit:

```js
whatsappNumber: '919876543210', // country code + number, digits only, no + or spaces
```

That's the **only** place the number is set — every "Send Order on WhatsApp"
link in the app reads from this one constant.

## 🗂 Project structure

```
restaurant-ordering-website/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── netlify.toml              # Netlify build + SPA redirect config
├── public/
│   └── _redirects            # SPA fallback (backup for netlify.toml)
└── src/
    ├── main.jsx               # App entry point
    ├── App.jsx                # Routes
    ├── index.css              # Tailwind + global styles
    ├── config/
    │   └── restaurantConfig.js   # ⭐ single source of truth for restaurant info
    ├── data/
    │   └── menuData.js           # ⭐ menu categories & items
    ├── context/
    │   └── CartContext.jsx       # Cart state, totals, localStorage persistence
    ├── hooks/
    │   └── useLocalStorage.js
    ├── utils/
    │   ├── format.js             # Currency formatting
    │   ├── orderNumber.js        # Order number generator
    │   └── whatsapp.js           # Builds the WhatsApp order message/link
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── FeaturedDishes.jsx
    │   ├── CategoryTabs.jsx
    │   ├── MenuItemCard.jsx
    │   ├── QuantityControl.jsx
    │   ├── StickyCartButton.jsx  # Mobile sticky "view cart" bar
    │   └── EmberTrail.jsx        # Signature decorative divider
    └── pages/
        ├── Home.jsx
        ├── Menu.jsx
        ├── Cart.jsx
        ├── Checkout.jsx
        └── OrderConfirmation.jsx
```

## 🚀 Getting started locally

Requires Node.js 18+.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

```bash
# Build a production bundle (outputs to /dist)
npm run build

# Preview the production build locally
npm run preview
```

## ☁️ Deploying to Netlify

**Option A — Netlify CLI**

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

**Option B — Netlify dashboard (drag & drop)**

1. Run `npm run build` locally.
2. Drag the generated `dist/` folder into [app.netlify.com/drop](https://app.netlify.com/drop).

**Option C — Git-connected deploy (recommended)**

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Netlify: **Add new site → Import an existing project**.
3. Build settings are already provided by `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy — Netlify will rebuild automatically on every push.

The included `netlify.toml` and `public/_redirects` already handle client-side
routing, so refreshing `/menu`, `/cart`, etc. won't 404 on Netlify.

## 🛒 How ordering works

1. Customer adds items to the cart (persisted in `localStorage`, so it survives
   a page refresh).
2. On **Checkout**, they enter name, phone, delivery address and optional
   instructions — validated before submission.
3. Placing the order generates an order number and moves to **Order
   Confirmation**, showing a full summary.
4. Tapping **Send Order on WhatsApp** opens `wa.me/<restaurant number>` with a
   pre-filled message containing the order number, customer details, every
   item with quantity and price, and the grand total. The restaurant receives
   it as a normal WhatsApp message and confirms manually — no payment
   integration needed.

## 🎨 Design notes

- Dark charcoal base with an ember-orange / turmeric-gold accent palette,
  built around a "live tandoor" feel.
- Type pairing: **Fraunces** (display), **Work Sans** (body), **Space
  Grotesk** (prices/data).
- Signature element: the "ember trail" — a scattered dot divider used between
  major sections, echoing spice and glowing coals.
- Fully responsive, with a sticky mobile cart bar, accessible focus states,
  and `prefers-reduced-motion` support.
