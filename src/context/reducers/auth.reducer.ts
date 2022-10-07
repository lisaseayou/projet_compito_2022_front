import { createReducer } from '@reduxjs/toolkit';
import { IUser } from '../../types/User';
import { LOGIN } from '../actions';

const initialState = {
    user: {
        id: '',
        name: '',
        email: '',
        url: '',
        description: '',
        github: '',
        linkedin: '',
        twitter: '',
    },
};

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(LOGIN, (state: { user: IUser }, action: any) => {
        return { ...state, user: action.payload };
    });
});

export default authReducer;
