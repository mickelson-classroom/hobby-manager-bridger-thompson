import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-secondary-subtle d-md-block d-none">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page">
            <i className='bi-house me-1' />Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/toasts" className="nav-link" aria-current="page">
            <i className='bi-bell me-1' />Toasts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/animation" className="nav-link" aria-current="page">
            <i className='bi-currency-dollar me-1' />Animation
          </Link>
        </li>
      </ul>
    </nav>
  );
};
