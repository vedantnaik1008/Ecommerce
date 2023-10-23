import { configureStore } from "@reduxjs/toolkit";
import addItems from '@/components/reducers/addItems'
import formClick from "./components/reducers/formClick";

export const store = configureStore({
    reducer: {
        addToCart: addItems,
        form: formClick,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch