import { React, useContext } from "react";
import { GlobalContext } from "../GobalState/GlobalContext";
export function IncomeExpanse() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  const amounts = transactions.map((e) => +e.price);
  console.log(amounts);
  const expanse = amounts.filter((e) => +e < 0).reduce((p, c) => (p += c), 0);
  const income = amounts.filter((e) => +e > 0).reduce((p, c) => (p += c), 0);
  console.log(expanse);
  return (
    <div className="income-expanse">
      <div className="income">
        <p>Income</p>
        <span>${income}</span>
      </div>
      <div className="expanse">
        <p>Expanse</p>
        <span>${Math.abs(expanse)}</span>
      </div>
    </div>
  );
}
