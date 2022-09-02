import { createReducer } from "@reduxjs/toolkit";
import { LOGIN } from "../actions";

const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    url: "",
    description: "",
    github: "",
    linkedin: "",
    twitter: "",
  },
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(LOGIN, (state: any, action: any) => {
    return { ...state, user: action.payload };
  });
});

export default authReducer;
