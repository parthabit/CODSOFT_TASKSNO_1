import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useStore } from '../context/StoreContext'

export default function Wishlist() {
  const { wish } = useStore()
  const list = products.filter((p) => wish.includes(p.id))
  return (
    <div className="container section"><h1>My Wishlist</h1>
      {list.length ? <div className="grid">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        : <div className="center"><p className="empty">Your wishlist is empty.</p><Link to="/products" className="btn">Browse Products</Link></div>}
    </div>
  )
}
