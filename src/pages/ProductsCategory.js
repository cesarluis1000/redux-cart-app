import React from 'react'
import { useParams } from "react-router-dom";
import Products from './Products';

const ProductsCategory = () => {
    const { category } = useParams();
    
  return (
    <div>
        <h1 className="text-center text-primary mt-3">Categoria {category}</h1>
        <Products />
    </div>
  )
}

export default ProductsCategory