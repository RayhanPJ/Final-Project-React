import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
import {
  LandingPage,
  Login,
  PesanTiket,
  Register,
  PemilihanTiket,
  Wishlist,
  Profile,
  LogOut,
  Protected,
  BayarTiket,
  Filter,
  ListBooking,
  ConfirmPay,
  InputAirport,
  InputFlight,
  InputPlane,
  ListFlight,
  UpdateFlight,
  ListAirport,
  UpdateAirport,
  ListPlane,
  UpdatePlane
} from "./components";
import reducers from "./reducers";
import PersonList from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
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
      <Route
        path="/pilih"
        element={
          <Protected>
            <PemilihanTiket />
          </Protected>
        }
      />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/listbooking" element={<ListBooking />} />
      <Route path="/listflight" element={<ListFlight />} />
      <Route path="/updateflight" element={<UpdateFlight />} />
      <Route path="/listbooking" element={<ListBooking />} />
      <Route path="/listairport" element={<ListAirport />} />
      <Route path="/updateairport" element={<UpdateAirport />} />
      <Route path="/listplane" element={<ListPlane />} />
      <Route path="/updateplane" element={<UpdatePlane />} />
      <Route path="/confirmpay" element={<ConfirmPay />} />
      <Route path="/try" element={<PersonList />} />
      <Route path="/inputplane" element={<InputPlane />} />
      <Route path="/inputflight" element={<InputFlight />} />
      <Route path="/inputairport" element={<InputAirport />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
