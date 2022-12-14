import './App.css';
import React, {useState, useEffect} from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import Products from "./screens/Products";
import QuienesSomos from './screens/QuienesSomos';
import Contacto from './screens/Contacto';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Product from "./components/Product.js";
import DetalleProducto from './screens/DetalleProducto';
import ContactoEnviado from './screens/ContactoEnviado';
import Carrito from './screens/Carrito';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>

export const productsContext = React.createContext();

function App() {
  
  const [products, setProducts] = useState([])

  //Trae los productos de la API:
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
    .then(res => res.json())
    .then(res => {
      setProducts(res.products)
    })
    .catch(err => console.error(err));
  }, []);
  if(!products) return <div>Cargando datos...</div>;
  let aux = products
  aux.map(obj => {
    aux[obj.id-1].quantity = 0
  })
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <productsContext.Provider value={{products}}>
          <Routes>
              <Route index path="/" element={<Home />}/>
              <Route path="/DetalleProducto" element={<DetalleProducto />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/QuienesSomos" element={<QuienesSomos />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/ContactoEnviado" element={<ContactoEnviado />} />
              <Route path="/Carrito" element={<Carrito />} />

          </Routes>
        </productsContext.Provider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

