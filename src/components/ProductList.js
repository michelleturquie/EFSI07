import React, {useContext} from "react";
import Product from "./Product";
import '../App.css';
import {productsContext} from '../App.js'
import {Box, Grid} from '@mui/material';

function ProductList(quantity) {
    let {products, setProducts} = useContext(productsContext);

    if(products) {
        return (
            <Box sx={{ flexGrow: 4 }}>
            <Grid container spacing={1} rowSpacing={3.5}>
                { products.map((product) => {
                    if(product.id <= quantity.quantity) {
                        return <Grid item xs={4}> <Product key={product.id} product={product} products={products} setProducts={setProducts}/></Grid>
                    }
                }) }
            </Grid>
            </Box>
        ); 
    } else {
        return "Cargando...";
    }

}

export default ProductList;