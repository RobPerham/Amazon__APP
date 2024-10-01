import React from "react";
import "./App.css";
import Header from "./Header"; // Corrected import statement
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Login route  */}
          <Route
            path="/Login"
            element={
              <>
                <Login />
              </>
            }
          />
          {/* Checkout route */}
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          {/* Payment route */}
          <Route
            path="/Payment"
            element={
              <>
                <Header />
                <Payment />
              </>
            }
          />

          {/* Default route */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
