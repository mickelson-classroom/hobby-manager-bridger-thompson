import { Link } from "react-router-dom"

export const MobileNavBar = () => {
  return (
    <nav className="navbar fixed-bottom bg-secondary-subtle d-md-none d-block">
      <ul className="nav text-center justify-content-evenly">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className='bi-house fs-3' />
            <div>
              Home
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/toasts" className="nav-link">
            <i className='bi-bell fs-3' />
            <div>
              Toasts
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/other" className="nav-link">
            <i className='bi-currency-dollar fs-3' />
            <div>
              Other
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
