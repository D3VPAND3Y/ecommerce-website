import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./contexts/users.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { Elements } from "@stripe/react-stripe-js";

import { CartProvider } from "./contexts/cart.context";

import { stripePromise } from "./utils/stripe/stripe.utils";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersProvider>
        <CategoriesProvider>
          <CartProvider>
            <Elements stripe={stripePromise}>
            <App />
            </Elements>
          </CartProvider>
        </CategoriesProvider>
      </UsersProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
