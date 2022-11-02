import ProductList from '../components/ProductList';

function Products() {
    return (
        <div className="content-body">
            <h1>Todos los productos</h1><br></br>
           <ProductList quantity={30}/>
        </div>
    )
}

export default Products;