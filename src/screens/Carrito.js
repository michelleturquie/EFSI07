import React, {useContext} from "react";
import { productsContext } from "../App";
import Button from '@mui/material/Button';
import { useEffect } from "react";
import { useState } from "react";

function deleteFromCarrito(products, setProducts, id) {
    let aux = products
    aux[id].quantity = 0
    setProducts(aux)///
}

function Carrito() {
    let {products, setProducts} = useContext(productsContext)
    const carrito = [];
    const [updatedCarrito, setUpdatedCarrito] = useState(carrito)
    let total = 0
    products.forEach((element) => {
        if(element.quantity > 0) {
            total += element.quantity * element.price
            carrito.push(
                <div>
                    <h2>Producto: {element.title}</h2>
                    <h3>Precio: ${element.price}</h3>
                    <h3>Cantidad: {element.quantity}</h3>
                    <Button onClick={() => {
                        deleteFromCarrito(products, setProducts, element.id-1)
                        setUpdatedCarrito(updatedCarrito.slice(1,1))
                    }} size="small">ELIMINAR</Button>
                    <hr />
                </div>,
            );
        }
    })

    useEffect(() => {
        setUpdatedCarrito(carrito)
    }, [carrito])

    if(carrito.length > 0) {
        return (
            <div>
                <h1>Carrito:</h1>
                <h2>Total: ${total}</h2>
                <hr />
                {updatedCarrito}
            </div> 
        )
    } else {
        return (
            <div>
                <h1>El carrito está vacío</h1>
                <hr />
            </div> 
        )
    }
}
  
export default Carrito;