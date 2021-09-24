import React, { useContext, useState } from "react";
import { GlobalContext } from "../GobalState/GlobalContext";

export function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const clickSubmit = (e) => {
    e.preventDefault();
    const newTranasction = {
      id: Math.floor(Math.random() * 1000),
      text,
      price: +amount
    };
    addTransaction(newTranasction);
  };
  return (
    <>
      <h3>Add Transaction</h3>
      <hr />
      <form onSubmit={(e) => clickSubmit(e)}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            required
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="enter-text"
            className="text"
          />
        </div>
        <div>
          <label>
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            required
            type="number"
            value={amount}
            onChange={(e) => setAmmount(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
