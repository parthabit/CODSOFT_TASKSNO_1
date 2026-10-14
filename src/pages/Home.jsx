import { Link } from 'react-router-dom'
import { Truck, ShieldCheck, RotateCcw } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function Home() {
  return (<>
    <section className="hero"><div className="container">
      <h1>Discover products you'll <em>love</em></h1>
      <p>Electronics, fashion, home and accessories - curated for everyday life.</p>
      <Link to="/products" className="btn btn-lg">Shop Now</Link>
    </div></section>
    <section className="container perks">
      <div><Truck /> Free delivery over ₹999</div><div><ShieldCheck /> Secure demo checkout</div><div><RotateCcw /> Easy 7-day returns</div>
    </section>
    <section className="container section"><h2>Shop by Category</h2>
      <div className="cat-grid">{categories.map((c) => <Link key={c} to={`/products?category=${encodeURIComponent(c)}`} className="cat">{c}</Link>)}</div></section>
    <section className="container section"><h2>Featured Products</h2>
      <div className="grid">{products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}</div></section>
    <section className="container"><div className="promo"><div><h2>Festive Sale - Up to 40% Off</h2><p>Limited-time deals on top picks. Don't miss out!</p></div>
      <Link to="/products" className="btn btn-light">Grab the Deal</Link></div></section>
    <section className="container section"><h2>Trending Now</h2>
      <div className="grid">{products.slice(4, 8).map((p) => <ProductCard key={p.id} product={p} />)}</div></section>
  </>)
}
