import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/auth.reducer'
import userReducer from '../reducers/user.reducer'

//create store + all reducers
export default configureStore({
  reducer: { user: userReducer, auth: authReducer },
})

