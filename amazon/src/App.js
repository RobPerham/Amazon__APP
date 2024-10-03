import React, { useEffect } from "react";
import "./App.css";
import Headers from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Q5xG8Rv501n4pW1Cod6lswu7tamJrGsVpXMU16Qle8TqulJHw9gJpVMXBqbPdBg5u7UrCGmJJuzAbGu411TOPwZ00dIFWseYm"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER is >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/Login"
            element={
              <>
                <Login />
              </>
            }
          />

          {/* checkout page */}
          <Route
            path="/checkout"
            element={
              <>
                <Headers />
                <Checkout />
              </>
            }
          />

          {/* Payment */}
          <Route
            path="/payment"
            element={
              <>
                <Headers />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />

          {/* default pages */}
          <Route
            path="/"
            element={
              <>
                <Headers />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
