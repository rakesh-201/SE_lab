import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.auth.auth);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          CITY HOSPITAL
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            {loggedIn ? (
              <li className="nav-item mx-2">
                <NavLink to="/signup" className="nav-link">
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <NavLink to="/contact" className="nav-link">
                    Contact us
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink to="/signin" className="nav-link">
                    SignIn
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink to="/signup" className="nav-link">
                    SignUp
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
