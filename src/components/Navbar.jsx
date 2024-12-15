import 'components/navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [token, setToken] = useState(false)

  const total = 25

  const handleClick = () => {
    setToken(!token)
  }

  return (
    <nav className='navBar'>
      <div className='containerNav'>
        <h2 className='hidden sm:block'>Mamma Mía Pizzería</h2>
        <button className='border border-slate-100 py-1 px-2 rounded-xl'>
          🍕 Home
        </button>
        <button
          onClick={handleClick}
          className='border border-slate-100 py-1 px-2 rounded-xl'
        >
          {token ? '🔓 Profile' : '🔐 Login'}
        </button>
        <button
          onClick={handleClick}
          className='border border-slate-100 py-1 px-2 rounded-xl'
        >
          {token ? '🔒 Logout' : '🔐 Register'}
        </button>
      </div>
      <button className='border border-blue-500 text-blue-800 py-1 px-2 rounded-xl'>
        🛒 Total: {total.toFixed(3)}
      </button>
    </nav>
  )
}

export default Navbar
