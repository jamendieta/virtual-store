import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false } 

export const authenticationSlice:any = createSlice({
    name: 'isAuthenticated',
    initialState,
    reducers: {
        updateAuthentication: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { updateAuthentication } = authenticationSlice.actions
export default authenticationSlice.reducer