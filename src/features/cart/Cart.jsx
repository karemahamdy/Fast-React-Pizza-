import { Link } from 'react-router-dom';
import Button from "../../ui/Button"
import { useSelector } from 'react-redux';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const username = useSelector((state) => state.user.username)
  const cart = fakeCart;

  return (
    <div className="py-2 px-">

      <Link to="/menu" className="text-blue-500 hover:underline">&larr; Back to menu</Link>

      <h2 className="font-bold text-[18px] my-4">Your cart, {username}</h2>

        <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <li key={item.pizzaId} >{item.name}</li>
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
