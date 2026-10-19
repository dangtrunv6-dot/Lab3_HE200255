import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="header-logo">ProductStore</Link>
      <nav className="header-nav">
        <Link
          to="/"
          className={`nav-btn ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`nav-btn ${location.pathname === '/products' ? 'active' : ''}`}
        >
          Products
        </Link>
      </nav>
    </header>
  );
}

export default Header;
