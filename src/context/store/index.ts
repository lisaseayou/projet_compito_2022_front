import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user.reducer'

//create store + all reducers
export default configureStore({
  reducer: { user: userReducer },
})
