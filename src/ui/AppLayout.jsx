import { Outlet, useNavigation } from "react-router-dom"
import Header from "./Header"
import CartOverview from '../features/cart/CartOverview';
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation()
  console.log(navigation)
  const loading = navigation.state === "loading";
  return (
    <>
      {loading && <Loader />}

      <Header />
      <Outlet />
      <main>
        <CartOverview />
      </main>

    </>
  )
}

export default AppLayout