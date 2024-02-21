import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type comments = {
    productId: number;
    id: number;
    comments: string;
    ratings: number;
};

const formReducer = createSlice({
    name: 'form',
    initialState: {
        isOpen: false,
        comment: [{productId: 0,
    id: 0,
    comments: '',
    ratings: 0}]
    },
    reducers: {
        openForm: (state) => {
            state.isOpen = true;
        },
        closeForm: (state) => {
            state.isOpen = false;
        },
        comment: (state, action: PayloadAction<comments>) => {
            state.comment.push(action.payload)
        }
    },
});

export const { openForm, closeForm, comment } = formReducer.actions;
export default formReducer.reducer;
