import React from "react"
import {Link , useLocation} from "react-router-dom"
import "./Header.css"

const Header = () => {
  let location = useLocation()
  const isAuthenticate = localStorage.getItem(`token`);
    return(
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Navbar</Link>
          {isAuthenticate ? <div className="collapse navbar-collapse RightNavbar" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}` }aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}` } to="/about">About</Link>
              </li>
            </ul>
            <ul>
              <li>
              <Link className="btn btn-primary mx-2" role="button" to="#">LogOut</Link>
              </li>
            </ul>
          </div> :   <div className="collapse navbar-collapse RightNavbar" id="navbarSupportedContent">
            <form className="d-flex" role="search">
                <Link className="btn btn-primary mx-2" role="button" to="/">Login</Link>
              <Link className="btn btn-primary mx-2" role="button" to="/signup">Signup</Link>
            </form>
            </div>}
         
        </div>
      </nav>
    )
}

export default Header