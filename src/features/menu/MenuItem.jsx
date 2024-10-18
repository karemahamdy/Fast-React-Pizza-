import { formatCurrency } from "../../utils/helpers";
import  Button  from "../../ui/Button"
import { useDispatch } from "react-redux";
import { addItem } from '../cart/CartSlice';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleItem() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice *1,
    }
    dispatch(addItem(newItem))
    
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}/>
      <div className="flex flex-col grow">
        <p className="font-semibold">{name}</p>
        <p>{ingredients.join(" , ")}</p>
        <div className="mt-4 flex justify-between flex-end">
          {!soldOut ? (
            <>
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
            <Button type="round" onClick={handleItem}>add to cart</Button>
            </>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
        
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
