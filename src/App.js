import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './components/Home';
import Product from './components/Product';
import RootLayout from './components/RootLayout';
const routes = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/product', element: <Product /> },

    ]

  },

])

function App() {

  return <RouterProvider router={routes}><div>
  </div> </RouterProvider>;
}

export default App;
