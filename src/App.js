import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Impresion from './pages/Impresion';
import ProductsCategory from './pages/ProductsCategory';

function App() {
  return (
    <div className="container">
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Checkout" element={<Impresion />} />
          <Route path="/Products" element={<ProductsCategory />} >
              <Route path=":category" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
