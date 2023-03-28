import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = []

export const productsCartSlice: any = createSlice({
    name: 'productsCart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            state.push(newItem);
        }
    }
})

export const { addItem } = productsCartSlice.actions
export default productsCartSlice.reducer