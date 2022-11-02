import { useContext } from "react";
import { useParams } from "react-router-dom";
import {productsContext} from '../App.js'
import Product from "../components/Product.js";

function Detalle() {
    let { id } = useParams();
    let products = useContext(productsContext);

    if(products) {
        let product = products.find(product => {
            return product.id == id
        })
        if(product) {
            return (
                <div className="content-body">
                    <Product key={product.id} product={product} /> <br></br><br></br><br></br>
                </div>
            );
        }
    } else {
        return "Cargando...";
    }
}

export default Detalle;