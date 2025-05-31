import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My Blog
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/chi-siamo" className="nav-link">
                Chi siamo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/posts" className="nav-link">
                Post
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
