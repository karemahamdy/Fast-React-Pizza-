import { Link } from 'react-router-dom';
import Button from "../../ui/Button"
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { getCart, clearCart } from './CartSlice';
import EmptyCart from './EmptyCart ';


function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

   if(!cart.length) return <EmptyCart/>
  return (
    <div className="py-2 px-">

      <Link to="/menu" className="text-blue-500 hover:underline">&larr; Back to menu</Link>

      <h2 className="font-bold text-[18px] my-4">Your cart, {username}</h2>

        <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
