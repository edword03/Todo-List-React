import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="light-blue darken-3">
        <div className="nav-wrapper p1">
          <span className="brand-logo">React + Typescript</span>
          <ul  className="right hide-on-med-and-down">
            <li><Link to="/">Список дел</Link></li>
            <li><Link to="/about">Информация</Link></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar
