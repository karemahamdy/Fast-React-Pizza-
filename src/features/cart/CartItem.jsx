import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { getCurrentQuantityById, deleteItem } from "./CartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";


function CartItem({ item }) {
  const dispatch = useDispatch()
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}
        {currentQuantity}
        </p>

        <UpdateItemQuantity
                pizzaId={pizzaId}
                currentQuantity={currentQuantity}
              />
              
        <Button  type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
        Delete
        </Button>
    
      </div>
    </li>
  );
}

export default CartItem;
