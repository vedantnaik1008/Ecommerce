import { createSlice } from '@reduxjs/toolkit';

const formReducer = createSlice({
    name: 'form',
    initialState: {
        isOpen: false
    },
    reducers: {
        openForm: (state) => {
            state.isOpen = true;
        },
        closeForm: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openForm, closeForm } = formReducer.actions;
export default formReducer.reducer;
