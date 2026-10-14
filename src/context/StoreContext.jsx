import { createContext, useContext, useEffect, useState } from 'react'
import { products } from '../data/products'

const Ctx = createContext()
export const useStore = () => useContext(Ctx)
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } }
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v))

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => load('shopora_cart', [])) // [{id, qty}]
  const [wish, setWish] = useState(() => load('shopora_wish', [])) // [id]
  const [user, setUser] = useState(() => load('shopora_session', null))
  const [toasts, setToasts] = useState([])

  useEffect(() => save('shopora_cart', cart), [cart])
  useEffect(() => save('shopora_wish', wish), [wish])
  useEffect(() => save('shopora_session', user), [user])

  const toast = (msg) => {
    const id = Date.now() + Math.random()
    setToasts((t) => [...t, { id, msg }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2500)
  }
  const addToCart = (p, qty = 1) => {
    setCart((c) => c.find((i) => i.id === p.id) ? c.map((i) => i.id === p.id ? { ...i, qty: i.qty + qty } : i) : [...c, { id: p.id, qty }])
    toast(`${p.name} added to cart`)
  }
  const changeQty = (id, d) => setCart((c) => c.map((i) => i.id === id ? { ...i, qty: Math.max(1, i.qty + d) } : i))
  const removeFromCart = (id) => { setCart((c) => c.filter((i) => i.id !== id)); toast('Removed from cart') }
  const clearCart = () => setCart([])
  const toggleWish = (p) => {
    setWish((w) => w.includes(p.id) ? w.filter((x) => x !== p.id) : [...w, p.id])
    toast(wish.includes(p.id) ? 'Removed from wishlist' : 'Saved to wishlist')
  }

  // Demo auth: users are stored in localStorage. NOT secure - demo only.
  const register = ({ name, email, password }) => {
    const users = load('shopora_users', [])
    if (users.find((u) => u.email === email)) return 'An account with this email already exists.'
    save('shopora_users', [...users, { name, email, password }])
    setUser({ name, email }); toast(`Welcome, ${name}!`)
  }
  const login = ({ email, password }) => {
    const u = load('shopora_users', []).find((x) => x.email === email && x.password === password)
    if (!u) return 'Invalid email or password.'
    setUser({ name: u.name, email: u.email }); toast(`Welcome back, ${u.name}!`)
  }
  const demoLogin = () => { setUser({ name: 'Demo User', email: 'demo@shopora.com' }); toast('Logged in as Demo User') }
  const logout = () => { setUser(null); toast('Logged out') }

  const lines = cart.map((i) => ({ ...products.find((p) => p.id === i.id), qty: i.qty }))
  const count = cart.reduce((s, i) => s + i.qty, 0)
  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0)

  return (
    <Ctx.Provider value={{ cart, lines, count, subtotal, wish, user, addToCart, changeQty, removeFromCart, clearCart, toggleWish, register, login, demoLogin, logout, toast }}>
      {children}
      <div className="toasts">{toasts.map((t) => <div key={t.id} className="toast">{t.msg}</div>)}</div>
    </Ctx.Provider>
  )
}
