import { Link, useParams } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { money } from '../data/products'

export default function Confirmation() {
  const { id } = useParams()
  let o = null
  try { o = JSON.parse(localStorage.getItem('shopora_last_order')) } catch {}
  return (
    <div className="container section center">
      <CheckCircle size={64} color="var(--accent)" /><h1>Order Confirmed!</h1>
      <p>Thank you{o?.name ? `, ${o.name}` : ''}. Your order number is</p>
      <p className="order-no">{id}</p>
      {o?.id === id && <p>{o.items} item(s) · Total {money(o.total)}</p>}
      <p className="muted small">Demo order - no payment was processed.</p>
      <Link to="/products" className="btn btn-lg">Continue Shopping</Link>
    </div>
  )
}
