import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carItems: [],
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