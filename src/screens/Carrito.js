import React, {useContext} from "react";
import { productsContext } from "../App";

function Carrito() {
    let {products, setProducts} = useContext(productsContext)
    products.map((element) => {
        if(element.quantity > 0) {
            return (
                <div>
                    asd
                </div>
            );
        }
    })
}
  
export default Carrito;