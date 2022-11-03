import React from 'react'
import Products from './Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div>
        <h1 className="text-center text-primary mt-3"><FontAwesomeIcon icon={faStore} /> Bienvenido a mi tienda</h1>
        <section>
            <Products />
        </section>
    </div>
  )
}

export default Home