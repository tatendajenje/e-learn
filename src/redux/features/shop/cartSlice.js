import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    shipping: null,
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        updateCart : (state, action)=>{
            state.cart = action.payload;
        },
    }

})

export const {updateCart} = cartSlice.actions

export default cartSlice.reducer