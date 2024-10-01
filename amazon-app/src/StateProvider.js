// This file is used to create a data layer for the application. It is used to store the user information and the basket information. It is used to pass the information to the components. It is used to pull the information from the data layer. It is used to wrap the app and provide the data layer.
import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
