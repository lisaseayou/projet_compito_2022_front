import { OperationVariables, QueryResult } from '@apollo/client';
import { LOGIN, LOGOUT } from './index';

export const logoutUser = {
    type: LOGOUT,
};

export const loginUser = (
    payload: Promise<QueryResult<any, OperationVariables>>
) => ({
    type: LOGIN,
    payload,
});
