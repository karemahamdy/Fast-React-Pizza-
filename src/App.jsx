import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from "./ui/AppLayout"
import Home from './ui/Home';
import Menu, { Loader as menuDataLoader} from  "./features/menu/Menu"
import Cart from './features/cart/Cart';
import Order , {Loader as orderLoader} from "./features/order/Order"
import CreateOrder , {action as createOrderAction} from './features/order/CreateOrder';
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
    action: createOrderAction
  },
  {
    
    path: '/order/:orderId',
    element: <Order />,
    errorElement: <Error />,
    loader: orderLoader,
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
