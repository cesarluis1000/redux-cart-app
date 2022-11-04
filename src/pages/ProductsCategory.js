import React from 'react'
import { Outlet, useParams } from "react-router-dom";

const ProductsCategory = () => {
    const { category } = useParams();
    
  return (
    <div>
        <h1 className="text-center text-primary mt-3">Categoria {category}</h1>
        <Outlet />
    </div>
  )
}

export default ProductsCategory