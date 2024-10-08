import React, { createContext, useContext, useReducer } from "react";

// prepare the data layer
export const StateContext = createContext();

// wrap our app and provide the Data layer
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);
