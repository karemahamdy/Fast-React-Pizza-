import { Outlet, useNavigation } from "react-router-dom"
import Header from "./Header"
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation()
  console.log(navigation)
  const loading = navigation.state === "loading";
  return (
    <>
      {loading && <Loader />}

      <Header />
      <main className="mx-auto max-w-3xl">
      <Outlet />

      </main>
      <CartOverview/>
    </>
  )
}

export default AppLayout