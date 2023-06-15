import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../cartItems';

const initialState = {
  carItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  }
})

console.log(cartSlice)

export default cartSlice.reducer;