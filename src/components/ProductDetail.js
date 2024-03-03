import { useParams } from "react-router-dom";


const ProductDetailPage =() =>{
const params = useParams();

 const id = params.id; // here taking out the id which is dynamic in route
return<>
<h1> Product Details Page</h1>
<p style={{
    color: 'red', 
}}>Product ID: {id}</p>
</>
}


export default ProductDetailPage;