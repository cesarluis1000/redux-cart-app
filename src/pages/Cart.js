import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../features/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Cart = () => {
    
    const carts = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addToCart(product))
    } 

    const deleteProduct = (id) => {
        dispatch(removeFromCart(id))
    }

    const clearProducts = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <p className="lead fs-5 text-primary mt-3 fw-bold">Carrito de compras</p>                
            <table className="table table-striped table-hover">
                <thead className='bg-secondary text-white text-center'>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col"></th>
                        <th scope="col" className="text-end">Precio</th>
                        <th scope="col" className="text-end">Cantidad</th>
                        <th scope="col" className="text-end">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart) => (
                        <tr key={cart.id}>
                            <td scope="row">
                                <img src={cart.image} alt={cart.title} height={50} />
                            </td>
                            <td>{cart.title}<br />Categoria: {cart.category}</td>
                            <td className="text-end">S/ {(cart.price).toFixed(2)}</td>
                            <td className="text-end">
                                <button className="btn btn-sm btn-danger m-1" onClick={() => deleteProduct(cart.id)}><FontAwesomeIcon icon={faMinus} /></button>
                                {cart.quantity}
                                <button className="btn btn-sm btn-success m-1" onClick={() => addProduct(cart)}><FontAwesomeIcon icon={faPlus} /></button>
                            </td>
                            <td className="text-end">S/ {(cart.subtotal).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="text-end fw-bold">Total</td> 
                        <td className="text-end fw-bold">S/ {(carts.reduce((total, cart) => total + cart.subtotal, 0)).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td colSpan="4" className="text-end fw-bold">IGV</td>
                        <td className="text-end fw-bold">S/ {(carts.reduce((total, cart) => total + cart.subtotal, 0) * 0.18).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td colSpan="4" className="text-end fw-bold">Total con IGV</td>
                        <td className="text-end fw-bold">S/ {(carts.reduce((total, cart) => total + cart.subtotal, 0) * 1.18).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td colSpan="5" className="text-end">
                            <button className="btn btn-sm btn-danger m-1" onClick={() => clearProducts()}>Vaciar carrito</button>
                            <Link className="btn btn-sm btn-success m-1" to="/Checkout">Comprar</Link>
                        </td>
                    </tr>
                </tfoot>
            </table>
            
        </div>
    )
}

export default Cart