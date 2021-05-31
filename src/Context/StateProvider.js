import React, { createContext, useContext, useReducer } from "react";
//preapre data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//this is how we  can use it inside of the component
export const useStateValue = () => useContext(StateContext);
