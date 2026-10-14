import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShoppingBag, Heart, Menu, X, User, LogOut } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count, wish, user, logout } = useStore()
  const nav = useNavigate()
  const close = () => setOpen(false)
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={close}>Shopora<span>.</span></Link>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/products" onClick={close}>Products</NavLink>
          <NavLink to="/wishlist" onClick={close}><Heart size={18} /> Wishlist ({wish.length})</NavLink>
          <NavLink to="/cart" onClick={close}><ShoppingBag size={18} /> Cart <b className="badge">{count}</b></NavLink>
          {user ? (
            <button className="btn btn-outline btn-sm" onClick={() => { logout(); close(); nav('/') }}><LogOut size={16} /> Logout ({user.name.split(' ')[0]})</button>
          ) : (
            <NavLink to="/login" onClick={close}><User size={18} /> Login</NavLink>
          )}
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}
