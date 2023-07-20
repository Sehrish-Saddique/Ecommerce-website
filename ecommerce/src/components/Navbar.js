import React from 'react'
import cart from "./image/cart.png"
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <>
        <div className="Nav mb-5">
        <nav className="navbar  navbar-expand-lg">
            <div className="container-fluid">
            <Link className="Nav navbar-brand" to="./index.html">
                <img src={cart} alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/>
                <Link className="navbar-brand" to="./index.html">E-Commerce Store</Link>
            </Link>
            

         
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 b-lg-0">
              <li className="nav-item">
                <Link className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./product.html">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./cart.html">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./contact.html">Contact us</Link>
              </li>
            </ul>
            <Link className="nav-link" to="./registration.html"><button type="button" className="btn btn-outline-light">Register</button></Link>
            <Link className="nav-link current " aria-current="page"  to="./login.html"><button type="button" className="btn btn-outline-light">Login</button></Link>

          </div> 
        </div> 
          </nav>

    </div>
    </>
  )
}
