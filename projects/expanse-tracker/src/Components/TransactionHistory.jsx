import React, { useContext } from "react";
import { GlobalContext } from "../GobalState/GlobalContext";
import Transaction from "../Components/Transaction";
export const TransactionHistory = () => {
  const context = useContext(GlobalContext);
  console.log("Hi");
  console.log(context.transactions);
  return (
    <div>
      <h3>History</h3>
      <hr />
      <ul
        className={
          "transactions " + (context.transactions.length > 5 ? "scrol" : "")
        }
      >
        {context.transactions.map((e) => (
          <Transaction transaction={e} />
        ))}
      </ul>
    </div>
  );
};
