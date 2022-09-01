import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './redux/features/shop/cartSlice' 

export const store = configureStore({
    reducer:{
        cartReducer,
    }
}) 