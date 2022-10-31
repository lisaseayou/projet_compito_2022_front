// Redux
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// Redux persist
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

// reducers
import userReducer from '../reducers/user.reducer';

const persistConfig = {
    key: 'user',
    storage,
};

const reducers = combineReducers({ user: userReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

// create store
// Assign the persist reducer to the reducers and extra dispatch functions to the ignore list in the middleware
export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
