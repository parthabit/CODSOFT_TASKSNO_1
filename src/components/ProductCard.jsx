import { Link } from 'react-router-dom'
import { Heart, ShoppingCart } from 'lucide-react'
import { useStore } from '../context/StoreContext'
import { money } from '../data/products'

export default function ProductCard({ product: p }) {
  const { addToCart, toggleWish, wish } = useStore()
  const liked = wish.includes(p.id)
  return (
    <div className="card">
      <button className={`heart ${liked ? 'liked' : ''}`} onClick={() => toggleWish(p)} aria-label="Wishlist"><Heart size={18} fill={liked ? 'currentColor' : 'none'} /></button>
      <Link to={`/products/${p.id}`} className="card-img"><img src={p.image} alt={p.name} loading="lazy" /></Link>
      <div className="card-body">
        <small>{p.category}</small>
        <Link to={`/products/${p.id}`}><h3>{p.name}</h3></Link>
        <div className="card-foot"><strong>{money(p.price)}</strong>
          <button className="btn btn-sm" onClick={() => addToCart(p)}><ShoppingCart size={16} /> Add</button></div>
      </div>
    </div>
  )
}
