import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from "./ui/AppLayout"
import Home from './ui/Home';
import Menu, { Loader as menuDataLoader} from  "./features/menu/Menu"
import Cart from './features/cart/Cart';
import Order from "./features/order/Order"
import CreateOrder from './features/order/CreateOrder';
import Error  from "./ui/Error"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
    loader: menuDataLoader,
    errorElement: <Error />,
  },
  { path: '/cart', element: <Cart /> },
  {
    path: '/order/new',
    element: <CreateOrder />,
    
  },
  {
    path: '/order/:orderId',
    element: <Order />,
    errorElement: <Error />,
  },
    ],
  },
  ]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
