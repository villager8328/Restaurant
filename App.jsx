import { Routes, Route } from 'react-router-dom'
import Navbar from "./Navbar.jsx";
import Footer from './Footer.jsx'
import StickyCartButton from './StickyCartButton.jsx'
import Home from './Home.jsx'
import Menu from './Menu.jsx'
import Cart from './Cart.jsx'
import Checkout from './Checkout.jsx'
import OrderConfirmation from './OrderConfirmation.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </main>
      <Footer />
      <StickyCartButton />
    </div>
  )
}
