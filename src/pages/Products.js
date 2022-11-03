import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Products = () => {

  const baseUrl = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([])
  const dispatch = useDispatch();
  const { category } = useParams();

  
  useEffect(() => {

    let url = '';
    if(category === undefined) {
      url = baseUrl
    } else {
      url = baseUrl + '/category/' + category
    }

    console.log(url);

    axios.get(url)
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const addProduct = (product) => {
    dispatch(addToCart(product))
  }

  const deleteProduct = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <div>
      <p className="lead fs-5 text-primary mt-3 fw-bold">Lista de productos: {products.length}</p>
      <div className="row mt-2">
        {products.map(product => (
          <div key={product.id} className="col col-3 mt-1">
            <div className="card shadow">
              <div className="card-header bg-secondary text-white text-center">
                {product.title}
              </div>
              <div className="card-body text-center">
                <img src={product.image} alt={product.title} height={80} />
                <div>{product.category}</div>
                <div>S/ {product.price}</div>
              </div>
                <div className="card-footer text-center">
                  <button className="btn btn-sm btn-success m-1" onClick={() => addProduct(product)}><FontAwesomeIcon icon={faCartPlus} /> Agregar</button>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(product.id)}><FontAwesomeIcon icon={faTrashAlt} /> Eliminar</button>
                </div>
            </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Products