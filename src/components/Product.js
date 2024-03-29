import { Link } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const Product = () => {

    const PRODUCTS =[
        // getting this products from backend
        {id: 'p1' , title: 'Product 1'},
        {id:'p2' , title: 'Product 2'},
        {id:'p3' , title:'Product 3'}
    ]
    return <>
    

    <h1> Welcome to Product Page</h1>
    <ul>
       {PRODUCTS.map((prod) => <li key={prod.id}>
        <Link to={ `/product/${prod.id}`}> {prod.title}
        </Link>
       </li>)}
    </ul>
    </>
} 

export default Product;