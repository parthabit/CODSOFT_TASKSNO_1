import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, ShoppingCart, Heart } from 'lucide-react'
import { products, money } from '../data/products'
import { useStore } from '../context/StoreContext'

export default function ProductDetails() {
  const { id } = useParams()
  const p = products.find((x) => x.id === Number(id))
  const [qty, setQty] = useState(1)
  const { addToCart, toggleWish, wish } = useStore()
  if (!p) return <div className="container section center"><p className="empty">Product not found.</p><Link to="/products" className="btn">Back to Products</Link></div>
  return (
    <div className="container section details">
      <img src={p.image} alt={p.name} />
      <div>
        <small>{p.category}</small><h1>{p.name}</h1>
        <p className="price">{money(p.price)}</p><p>{p.description}</p>
        <div className="qty"><button onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={16} /></button><span>{qty}</span><button onClick={() => setQty(qty + 1)}><Plus size={16} /></button></div>
        <div className="row">
          <button className="btn btn-lg" onClick={() => addToCart(p, qty)}><ShoppingCart size={18} /> Add to Cart</button>
          <button className="btn btn-outline btn-lg" onClick={() => toggleWish(p)}><Heart size={18} fill={wish.includes(p.id) ? 'currentColor' : 'none'} /> Wishlist</button>
        </div>
      </div>
    </div>
  )
}
