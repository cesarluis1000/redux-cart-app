import React from 'react'
import { useNavigate  } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";

const Impresion = () => {

    const carts = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clearProducts = () => {
        if (window.confirm("Finalizar compra?")) {
            navigate('/Products');
            dispatch(clearCart())
        }else{
            return;
        }
        
    }

    return (
        <div className="row justify-content-center">

            <div className="col-7">
                <p className="lead fs-5 mt-3 fw-bold text-end">Boleta Nro: B001-11021983</p>
                <p className="lead fs-5 fw-bold text-end">Fecha: {new Date().toLocaleDateString()}</p>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col" className="text-end">Precio</th>
                            <th scope="col" className="text-end" >Cantidad</th>
                            <th scope="col" className="text-end">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((cart) => (
                            <tr key={cart.id}>
                                <td>
                                    {cart.title}
                                </td>
                                <td className="text-end">S/ {(cart.price).toFixed(2)}</td>
                                <td className="text-end">{cart.quantity}</td>
                                <td className="text-end">S/ {(cart.subtotal).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" className="text-end fw-bold">Total</td>
                            <td className="text-end fw-bold">S/ {(carts.reduce((total, cart) => total + cart.subtotal, 0)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan="3" className="text-end fw-bold">IGV</td>
                            <td className="text-end fw-bold">S/ {(carts.reduce((total, cart) => total + cart.subtotal, 0) * 0.18).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan="3" className="text-end fw-bold">Total con IGV</td>
                            <td className="text-end fw-bold">S/ {(carts.reduce((total, cart) => total + cart.subtotal, 0) * 1.18).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="text-end fw-bold">
                                <button className="btn btn-sm btn-secondary" onClick={() => clearProducts()}>Imprimir</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Impresion