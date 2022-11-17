import React, {useContext, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from 'react-bootstrap/Button';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import './Product'

function addToCarrito(products, setProducts, id) {
  let aux = products
  aux[id].quantity++
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
      <Card sx={{ minWidth: 350, maxWidth:350, minHeight: 350, textAlign: 'center', width: "50%", top: "25%", margin: "0 auto" }}>
        <CardMedia
          component="img"
          height="200"
          image={product.thumbnail}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Marca: {product.brand} <br></br>
              Descripción: {product.description}
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card sx={{ minWidth: 350, maxWidth:350, minHeight: 350, maxHeight:350, textAlign: 'center', width: "50%", top: "25%", margin: "0 auto" }}>
        <CardMedia
          component="img"
          height="140"
          image={product.thumbnail}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              ${product.price}
          </Typography>
        </CardContent>
        <CardActions>

        <Button href={'/DetalleProducto/' + product.id} variant="outline-info">Ver detalles</Button>
        <Button id="orden" onClick={() => {addToCarrito(products, setProducts, product.id-1); let aux = contador+1; setContador(aux)}} href={'/DetalleProducto/' + product.id} variant="dark">Agregar al carrito</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Product;