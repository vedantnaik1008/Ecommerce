import { configureStore } from "@reduxjs/toolkit";
import addItems from '@/components/reducers/addItems'

export const store = configureStore({
    reducer: {
        addToCart: addItems
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch