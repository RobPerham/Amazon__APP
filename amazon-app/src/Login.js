import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button"; // Import the Button component
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue("");

  useEffect(() => {
    // If the user is already logged in, redirect to the home page
    auth.onAuthStateChanged((authUser) => {
      console.log("this is the user >>>", authUser);

      if (authUser) {
        // If the user is logged in / was logged in
        dispatch({
          type: "SET_USER", // Set the user
          user: authUser, // Set the user to the authenticated user
        });
      } else {
        // If the user is logged out
        dispatch({
          type: "SET_USER", // Set the user
          user: null, // Set the user to null
        });
      }
    });
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </Button>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <Button onClick={register} className="login__registerButton">
            Create your Amazon Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
