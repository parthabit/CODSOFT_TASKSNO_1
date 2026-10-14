import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('default')
  const [loading, setLoading] = useState(true)
  const category = params.get('category') || 'All'
  useEffect(() => { const t = setTimeout(() => setLoading(false), 400); return () => clearTimeout(t) }, [])

  let list = products.filter((p) => (category === 'All' || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase()))
  if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price)
  if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price)

  return (
    <div className="container section">
      <h1>All Products</h1>
      <div className="filters">
        <div className="search"><Search size={18} /><input placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} /></div>
        <select value={category} onChange={(e) => e.target.value === 'All' ? setParams({}) : setParams({ category: e.target.value })}>
          <option>All</option>{categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort by</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option>
        </select>
      </div>
      {loading ? <div className="center"><div className="spinner" /></div>
        : list.length === 0 ? <p className="empty">No products match your search.</p>
        : <div className="grid">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>}
    </div>
  )
}
