import { createSlice } from "@reduxjs/toolkit";

const initialState: any = { items: [] }

export const productsCartSlice: any = createSlice({
    name: 'productsCart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            state.items.push(newItem);
        },
        deleteItem: (state, action) => {
            const item = action.payload;
            const newArray = state.items.filter((i: any) => i.product.id !== item.product.id);
            state.items = newArray;
        },
        deleteAll: (state, action) => {
            state.items.splice(0, state.items.length);
        },
    }
})

export const { addItem, deleteItem, deleteAll } = productsCartSlice.actions
export default productsCartSlice.reducer