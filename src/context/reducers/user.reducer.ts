import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ConnectedUser } from '../../types/User';
import { LOGIN, LOGOUT } from '../actions';

const initialState: ConnectedUser = {
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
        .addCase(LOGIN, (state: ConnectedUser, action: PayloadAction<object>) => {
            return { ...state, ...action.payload };
        })
        .addCase(LOGOUT, (state: ConnectedUser) => {
            return { ...state, ...initialState };
        })
        .addDefaultCase((state: ConnectedUser) => {
            state = initialState;
        });
});

export default userReducer;
