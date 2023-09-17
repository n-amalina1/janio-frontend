import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <b className="ps-5 pe-3 text-primary h2">JANIO</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item text-center ms-5">
                <NavLink
                  className={({ isActive }) => (isActive ? "fw-bold" : "")}
                  to="/v"
                >
                  Create New
                </NavLink>
              </li>
              <li className="nav-item text-center ms-5">
                <NavLink
                  className={({ isActive }) => (isActive ? "fw-bold" : "")}
                  to="/"
                >
                  Orders
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
