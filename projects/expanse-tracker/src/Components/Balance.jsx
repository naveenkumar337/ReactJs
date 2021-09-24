import { React, useContext } from "react";
import { GlobalContext } from "../GobalState/GlobalContext";
function Balance({ balance }) {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((e) => e.price);
  const total = amounts.reduce((acc, price) => (acc += +price), 0);
  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h3>${total ? total : 0}</h3>
    </div>
  );
}
export default Balance;
