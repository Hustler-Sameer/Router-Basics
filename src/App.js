import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './components/Home';
import Product from './components/Product';
import RootLayout from './components/RootLayout';
import Error from './components/Error';
import ProductDetailPage from './components/ProductDetail';
const routes = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
     errorElement:<Error/>, // this error page will be shown if we have error here 
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/product', element: <Product /> },
      {path: '/product/:id', element: <ProductDetailPage/> /* here we are passing dynamic id after semicolon */} 

    ]

  },

])

function App() {

  return <RouterProvider router={routes}><div>
  </div> </RouterProvider>;
}

export default App;
