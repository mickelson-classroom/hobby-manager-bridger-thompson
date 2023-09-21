import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-secondary-subtle">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/toasts" className="nav-link active" aria-current="page">
                Toasts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
