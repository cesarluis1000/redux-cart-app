import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link, NavLink, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const cart = useSelector((state) => state.cart);
  const [categories, setCategories] = useState([])

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");


  const url = 'https://fakestoreapi.com/products/categories'

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setCategories(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
      <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><FontAwesomeIcon icon={faStore} /> Redux</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link className={splitLocation[1] === "" ? "nav-link active" : "nav-link"} to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className={splitLocation[1] === "Products" ? "nav-link active" : "nav-link"} to="/Products">Productos</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link active dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                  </Link>
                  <ul className="dropdown-menu">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link className="dropdown-item" to={`/Products/${category}`}>{category}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <div className="d-flex" role="search">
                 <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/Cart"><FontAwesomeIcon icon={faShoppingCart} /> items: {cart.length}</Link>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
  )
}

export default Navbar