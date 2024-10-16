import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
function Header() {
  return (
    <>
    <header className="flex justify-between h-16 bg-yellow-400 items-center border-b-2 border-gray-100 px-4 py-3 uppercase sm:px-6">
    <Link to="/">
     <h1 className="tracking-widest">Fast   React   Pizza   Co.</h1>
     <SearchOrder/>
    </Link>
    </header>
    </>
  )
}
export default Header