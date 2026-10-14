import { Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useStore } from '../context/StoreContext'
import { money } from '../data/products'

export default function Cart() {
  const { lines, subtotal, changeQty, removeFromCart } = useStore()
  const nav = useNavigate()
  if (!lines.length) return <div className="container section center"><h1>Your cart is empty</h1><p className="empty">Looks like you haven't added anything yet.</p><Link to="/products" className="btn">Continue Shopping</Link></div>
  return (
    <div className="container section">
      <h1>Shopping Cart</h1>
      <div className="cart-layout">
        <div>{lines.map((l) => (
          <div className="cart-item" key={l.id}>
            <img src={l.image} alt={l.name} />
            <div className="grow"><h3>{l.name}</h3><p>{money(l.price)}</p>
              <div className="qty"><button onClick={() => changeQty(l.id, -1)}><Minus size={14} /></button><span>{l.qty}</span><button onClick={() => changeQty(l.id, 1)}><Plus size={14} /></button></div></div>
            <div className="right"><strong>{money(l.price * l.qty)}</strong><button className="icon-btn" onClick={() => removeFromCart(l.id)} aria-label="Remove"><Trash2 size={18} /></button></div>
          </div>))}</div>
        <aside className="summary"><h3>Order Summary</h3>
          <p><span>Subtotal</span><span>{money(subtotal)}</span></p>
          <p><span>Shipping</span><span>{subtotal >= 999 ? 'Free' : money(99)}</span></p>
          <p className="total"><span>Total</span><span>{money(subtotal + (subtotal >= 999 ? 0 : 99))}</span></p>
          <button className="btn btn-lg full" onClick={() => nav('/checkout')}>Checkout</button>
          <Link to="/products" className="btn btn-outline full">Continue Shopping</Link></aside>
      </div>
    </div>
  )
}
