import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import store from "./context/store";
import { Provider } from "react-redux";

import "./index.css";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  credentials: "include",
  cache: new InMemoryCache({ addTypename: false }),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
