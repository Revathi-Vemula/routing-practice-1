import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-header">
    <div className="logo-name-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
        className="wave-logo"
      />
      <p className="wave-name">Wave</p>
    </div>
    <ul className="header-items">
      <li>
        <Link className="item-name" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="item-name" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="item-name" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
