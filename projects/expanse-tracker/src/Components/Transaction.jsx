import { React, useContext } from "react";
import { GlobalContext } from "../GobalState/GlobalContext";

function Transaction({ transaction }) {
  const context = useContext(GlobalContext);
  return (
    <li
      Key={transaction.id}
      className={"transaction " + (+transaction.price < 0 ? "minus" : "plus")}
    >
      {transaction.text} <span>{transaction.price}</span>
      <button
        className="del-tag"
        onClick={() => context.deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
}
export default Transaction;
