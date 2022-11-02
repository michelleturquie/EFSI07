import Gallery from "../components/Carousel";
import ProductList from '../components/ProductList';
import config from '../config'

function Home() {
    return (
        <div className="content-body">
           <Gallery />
           <h1 style={{paddingTop: 30}}>Productos Destacados</h1> <br></br>
           <ProductList quantity={config.featuredQuantity}/>
        </div>
    )
}

export default Home;