import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { money } from '../data/products'

export default function Checkout() {
  const { lines, subtotal, user, clearCart } = useStore()
  const nav = useNavigate()
  const [f, setF] = useState({ name: user?.name || '', email: user?.email || '', address: '' })
  const [err, setErr] = useState('')
  const shipping = subtotal >= 999 ? 0 : 99
  const total = subtotal + shipping
  if (!lines.length) return <div className="container section center"><h1>Nothing to check out</h1><Link to="/products" className="btn">Continue Shopping</Link></div>
  const place = (e) => {
    e.preventDefault()
    if (!f.name.trim() || !f.address.trim()) return setErr('Name and address are required.')
    if (!/\S+@\S+\.\S+/.test(f.email)) return setErr('Enter a valid email.')
    const id = 'SH-' + Math.floor(100000 + Math.random() * 900000)
    localStorage.setItem('shopora_last_order', JSON.stringify({ id, ...f, total, items: lines.length }))
    clearCart(); nav(`/order/${id}`)
  }
  return (
    <div className="container section"><h1>Checkout</h1>
      <div className="cart-layout">
        <form className="form-card flat" onSubmit={place}>
          {err && <p className="error">{err}</p>}
          <input placeholder="Full name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          <input type="email" placeholder="Email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
          <textarea rows="4" placeholder="Delivery address" value={f.address} onChange={(e) => setF({ ...f, address: e.target.value })} />
          <p className="muted small">This is a simulated checkout. No payment details are collected or processed.</p>
          <button className="btn btn-lg full">Place Order</button>
        </form>
        <aside className="summary"><h3>Order Summary</h3>
          {lines.map((l) => <p key={l.id}><span>{l.name} × {l.qty}</span><span>{money(l.price * l.qty)}</span></p>)}
          <p><span>Shipping</span><span>{shipping ? money(shipping) : 'Free'}</span></p>
          <p className="total"><span>Total</span><span>{money(total)}</span></p></aside>
      </div></div>
  )
}
