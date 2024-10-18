import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./features/cart/CartSlice"
import  userReducer from "./features/user/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  }
})

export default store