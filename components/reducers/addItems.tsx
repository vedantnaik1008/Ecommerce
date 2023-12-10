import { Product } from "../../hooks/useFetch";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AllItems{
    product: Product[];
    totalPrice: number;
    orderData: Product[];
    totalOrderPrice: number;
}

const initialState: AllItems = {
    product: [] ,
    totalPrice: 0,
    orderData: [],
    totalOrderPrice: 0
   };


   const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

const addItems = createSlice({
    name: "addToCart",  
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Product>) => {
            const itemExists = state.product.some(item => item._id === action.payload._id)
            if (!itemExists) {
            state.product.push(action.payload) 
            }
            state.totalPrice = calculateTotalPrice(state.product);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.product = state.product.filter(item => item._id !== action.payload)
            state.totalPrice = calculateTotalPrice(state.product);
        },
        clearItems: (state) => {
            state.product = []
            state.totalPrice = calculateTotalPrice(state.product);
        },
        increaseQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            const item = state.product.find(item => item._id === action.payload.id)
            if (!item) {
                return; 
              } 
            item.quantity += action.payload.quantity
            state.totalPrice = calculateTotalPrice(state.product);
        },
        decreaseQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            const item = state.product.find(item => item._id === action.payload.id)
            if (!item) {
                return; 
              } 
            if(item.quantity <= 1) {
                return; 
              }
            item.quantity -= action.payload.quantity
            state.totalPrice = calculateTotalPrice(state.product);
        },
        saveOrder: (state, action: PayloadAction<Product[]>) => {
          action.payload.forEach((item) => {
            const existingItem = state.orderData.find((orderItem) => orderItem._id === item._id);
            if (existingItem) {
              existingItem.quantity += item.quantity;
            } else {
              state.orderData.push(item);
            }
          })
          state.totalOrderPrice = calculateTotalPrice(state.orderData);
        },
        resetOrder: (state) => {
          state.orderData = []
          state.totalPrice = calculateTotalPrice(state.orderData);
      },
        
      } 
})

export const {addItem, removeItem, clearItems, increaseQuantity, decreaseQuantity, saveOrder, resetOrder} = addItems.actions

export default addItems.reducer;