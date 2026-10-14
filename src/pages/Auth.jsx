import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../context/StoreContext'

export default function Auth({ mode }) {
  const isReg = mode === 'register'
  const { register, login, demoLogin } = useStore()
  const nav = useNavigate()
  const [f, setF] = useState({ name: '', email: '', password: '' })
  const [err, setErr] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    if (isReg && !f.name.trim()) return setErr('Name is required.')
    if (!/\S+@\S+\.\S+/.test(f.email)) return setErr('Enter a valid email.')
    if (f.password.length < 6) return setErr('Password must be at least 6 characters.')
    const error = isReg ? register(f) : login(f)
    if (error) return setErr(error)
    nav('/products')
  }
  return (
    <div className="container section"><form className="form-card" onSubmit={submit}>
      <h1>{isReg ? 'Create Account' : 'Welcome Back'}</h1>
      {err && <p className="error">{err}</p>}
      {isReg && <input placeholder="Full name" value={f.name} onChange={set('name')} />}
      <input type="email" placeholder="Email" value={f.email} onChange={set('email')} />
      <input type="password" placeholder="Password (min 6 characters)" value={f.password} onChange={set('password')} />
      <button className="btn btn-lg full">{isReg ? 'Register' : 'Login'}</button>
      {!isReg && <button type="button" className="btn btn-outline full" onClick={() => { demoLogin(); nav('/products') }}>Use Demo Login</button>}
      <p className="muted">{isReg ? 'Already registered?' : 'New here?'} <Link to={isReg ? '/login' : '/register'}>{isReg ? 'Login' : 'Create an account'}</Link></p>
      <p className="muted small">Demo only: accounts live in your browser's localStorage and are not secure.</p>
    </form></div>
  )
}
