import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container-fluid px-5">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <nav className="nav navbar navbar-expand-lg me-lg-auto mb-2 justify-content-center">
          <div class="container-fluid">
            <button
              className="navbar-toggler mt-1 mx-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon pt-2">
                <i className="fa-solid fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "selected nav-link text-dark navItem text-muted "
                        : "nav-link text-dark navItem"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "selected nav-link text-dark navItem text-muted "
                        : "nav-link text-dark navItem"
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "selected nav-link text-dark navItem text-muted "
                        : "nav-link text-dark navItem"
                    }
                    to="/artists"
                  >
                    Artists
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "selected nav-link text-dark navItem text-muted "
                        : "nav-link text-dark navItem"
                    }
                    to="/newcardpage"
                  >
                    Add Artist
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "selected nav-link text-dark navItem text-muted "
                        : "nav-link text-dark navItem"
                    }
                    to="/search"
                  >
                    Search
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "selected nav-link text-dark navItem text-muted "
                        : "nav-link text-dark navItem"
                    }
                    to="/favourites"
                  >
                    Favourites
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-danger btn my-2 ms-4"
                    onClick={() => navigate(-1)}
                  >
                    Back
                  </button>
                </li>
              </ul>
            </div>
            </div>
          </nav>

          <div className="text-end">
            <button type="button" className="btn btn-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-success">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
