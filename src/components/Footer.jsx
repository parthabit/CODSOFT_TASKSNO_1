import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
export default function Footer() {
  return (
    <footer className="footer"><div className="container footer-grid">
      <div><div className="logo light">Shopora<span>.</span></div><p>Quality products, simple shopping. A CODSOFT internship demo project.</p></div>
      <div><h4>Quick Links</h4><Link to="/products">Products</Link><Link to="/cart">Cart</Link><Link to="/wishlist">Wishlist</Link><Link to="/login">Login</Link></div>
      <div><h4>Contact</h4><p><Mail size={14} /> support@shopora.demo</p><p><Phone size={14} /> +91 98765 43210</p><p><MapPin size={14} /> India</p></div>
    </div><p className="copy">© {new Date().getFullYear()} Shopora. Demo store - no real payments.</p></footer>
  )
}
