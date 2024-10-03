import React from "react";
import "./App.css";
import Headers from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
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
                {/* <Footer />*/}
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
                {/* <Footer />*/}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
