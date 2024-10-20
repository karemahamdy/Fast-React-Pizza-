import { formatCurrency } from "../../utils/helpers";
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/CartSlice";
import store from '../../store';

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const username = useSelector((state) => state.user.username)

  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const cart = useSelector(getCart)

  const totalPrice = useSelector(getTotalCartPrice)

  return (
    <div className="mx-4 my-8 flex flex-col gap-7">
      <h2 className="font-bold tracking-widest text-xl">Ready to order? Lets go!</h2>

      <Form method="POST" action="/order/new">
    
        <div className="form-div ">
          <label className="sm:basis-40"> First Name</label>
          <input type="text" name="customer" className="input grow  w-full" defaultValue={username} required />
        </div>

        <div className="form-div">
          <label className="sm:basis-40">Phone number</label>
          <div className="w-full">
            <input type="tel" name="phone"  className="input w-full"  required />
          </div>
          {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
        </div>

        <div className="form-div ">
          <label className="sm:basis-40">Address</label>
          <div className="w-full">
            <input type="text" name="address" className="input w-full" required />
          </div>
        </div>

        <div >
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="sm:basis-40 px-1" htmlFor="priority">Want to yo give your order priority?</label>
        </div>
             <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div className="mt-4">
          <Button type="small" disabled={isSubmitting}>Order now from {formatCurrency(totalPrice)} </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);


  const order = {
    ...data,
    cart : JSON.parse(data.cart),
    priority: data.priority === 'true',
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);

}

export default CreateOrder;
