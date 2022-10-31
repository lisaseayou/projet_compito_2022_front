import { createReducer } from '@reduxjs/toolkit';
import { LOGIN, LOGOUT } from '../actions';

const initialState = {
    id: '',
    name: '',
    email: '',
    url: '',
    description: '',
    github: '',
    linkedin: '',
    twitter: '',
};

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(LOGIN, (state: any, action: any) => {
            return { ...state, ...action.payload };
        })
        .addCase(LOGOUT, (state: any) => {
            return { ...state, ...initialState };
        })
        .addDefaultCase((state) => {
            state = initialState;
        });
});

export default userReducer;
