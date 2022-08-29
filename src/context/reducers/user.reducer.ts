import { createReducer } from "@reduxjs/toolkit";
import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from "../actions";

const initialState = { value: 0 };

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(INCREMENT, (state) => {
        return { ...state, value: state.value + 1 }
    }).addCase(DECREMENT, (state) => {
        return { ...state, value: state.value - 1 }
    }).addCase(INCREMENT_BY_AMOUNT, (state: any, action: any) => {
        return { ...state, value: state.value + action.payload }
    }).addDefaultCase(() => {
        return initialState;
    })
 });

 export default userReducer;