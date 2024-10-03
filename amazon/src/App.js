import React from "react";
import "./App.css";
import Headers from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Headers />
                <Checkout />
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
