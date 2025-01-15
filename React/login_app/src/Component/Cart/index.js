import './index.css'

const Header = () =>{
  return(
    <nav className="nav-header">
      <div className="nav-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
        <ul className="nav-menu">
          <li className="nav-list-items">Home</li>
          <li className="nav-list-items">Product</li>
          <li className="nav-list-items">Cart</li>

        </ul>
        <button type="button" className="logout-desktop-btn">
        Logout
      </button>
      <button type="button" className="logout-mobile-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="logout icon"
          className="logout-icon"
        />
      </button>
      </div>

    </nav>
  )
}

export default Header