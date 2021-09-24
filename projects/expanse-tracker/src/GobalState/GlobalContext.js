import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  trasanctions: [
    {
      id: 1,
      text: "Laptop",
      price: "-12"
    },
    {
      id: 2,
      text: "Mouse",
      price: "+2"
    },
    {
      id: 3,
      text: "Monitor",
      price: "-50"
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log(state);
  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "Delete_Transaction",
      payload: id
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "Add_Transaction",
      payload: transaction
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.trasanctions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
