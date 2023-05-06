import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -200 },
    { id: 2, text: "Salary", amount: 300000 },
    { id: 3, text: "Book", amount: -300 },
    { id: 4, text: "Camera", amount: 10000 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return <GlobalContext.Provider value={{
    transactions: state.transactions
  }}>{children}</GlobalContext.Provider>;
};
