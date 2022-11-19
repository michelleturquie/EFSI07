import React, {useContext, useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from 'react-bootstrap/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams} from "react-router-dom";
import { Badge } from '@mui/material';
import { ProductShape } from '../shapes/product';
import '../App.js';

Product.propTypes = {
  product: ProductShape.isRequired
}


function addToCarrito(products, setProducts, id) {
  let aux = products
  aux[id].quantity++
  console.log(aux)
  setProducts(aux)

}


function removeFromCarrito(products, setProducts, id) {
  let aux = products
  aux[id].quantity--
  setProducts(aux)
}

function Product({product, products, setProducts}) {
  let { id } = useParams();
  const [contador, setContador] = useState(product.quantity)
  if(id) {
    return (
      <Badge badgeContent={"EN CARRITO"} color="primary" invisible={contador == 0}>
        <Card sx={{ minWidth: 350, maxWidth:350, minHeight: 350, textAlign: 'center', width: "50%", top: "25%", margin: "0 auto" }}>
          <CardMedia
            component="img"
            height="200"
            image={product.thumbnail}
          />
          <br></br>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                ${product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Marca: {product.brand}
                Descripción: {product.description}
            </Typography>
            <Button id="orden" onClick={() => {addToCarrito(products, setProducts, product.id-1); let aux = contador+1; setContador(aux)}} variant="dark">Agregar al carrito ({contador})</Button>
        </Card>
      </Badge>
    );
  } else {
    return (
      <Badge badgeContent={"EN CARRITO"} color="primary" invisible={contador == 0}>
        <Card sx={{ minWidth: 350, maxWidth:350, minHeight: 350, maxHeight:350, textAlign: 'center', width: "50%", top: "25%", margin: "0 auto" }}>
          <CardMedia
            component="img"
            height="140"
            image={product.thumbnail}
          />
          <br></br>
            <Typography bold gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                ${product.price}
            </Typography>
            <Link id="detalles" to={'/DetalleProducto/' + product.id}>Ver detalles</Link>
            <br></br>
            <Button id="orden" onClick={() => {addToCarrito(products, setProducts, product.id-1); let aux = contador+1; setContador(aux)}} variant="dark">Agregar al carrito ({contador})</Button>
        </Card>
      </Badge>
    );
  }
}



export default Product;