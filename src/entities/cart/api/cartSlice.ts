import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductItem } from '@shared/api';
import { RootState } from '../../../app/redux/store';


export type CartItem = ProductItem & {quantity: number}

interface CartState {
  items: CartItem[];
  totalPrice: number;
};

const initialState: CartState = {
  items: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductItem>) => {
      state.items.push({...action.payload, quantity: 1})
      state.totalPrice = +(state.totalPrice+action.payload.price).toFixed(2)
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(item=>item.id !== action.payload.id)
      state.totalPrice = +(state.totalPrice -action.payload.price*action.payload.quantity).toFixed(2)
    },
    updateQuantity: (state, action: PayloadAction<CartItem & { value: number }>) => {
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.value };
        }
        return item;
      });
    
      state.totalPrice = +state.items
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2);
    }
  },
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions

export const selectCart = createSelector([(state: RootState) => state.cart], (cart)=>cart)

export default cartSlice.reducer