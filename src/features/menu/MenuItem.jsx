import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}/>
      <div className="flex flex-col grow">
        <p className="font-semibold">{name}</p>
        <p>{ingredients.join(" , ")}</p>
        <div className="mt-4 flex justify-between flex-end">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <button className="bg-yellow-400 px-4 py-1 rounded-full">add to cart</button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
