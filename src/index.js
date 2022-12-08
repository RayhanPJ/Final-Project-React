import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import thunk from "redux-thunk";
import reportWebVitals from './reportWebVitals';
import { LandingPage, Login, PesanTiket, Register, PemilihanTiket, Wishlist, Profile, LogOut, Protected, BayarTiket } from './components';
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/pilih"
        element={
          <Protected>
            <PemilihanTiket />
          </Protected>
        }
      />
      <Route
        path="/profile"
        element={
          <Protected>
            <Profile />
          </Protected>
        }
      />
      <Route
        path="/wishlist"
        element={
          <Protected>
            <Wishlist />
          </Protected>
        }
      />
      <Route
        path="/pesan"
        element={
          <Protected>
            <PesanTiket />
          </Protected>
        }
      />
      <Route
        path="/bayar"
        element={
          <Protected>
            <BayarTiket />
          </Protected>
        }
      />
      <Route
        path="/"
        element={
          <Provider store={store}>
            <LandingPage />
          </Provider>
        }
      />
      <Route path="/logout" element={<LogOut />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
