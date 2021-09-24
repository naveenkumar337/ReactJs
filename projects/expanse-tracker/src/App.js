import "./App.css";
import Balance from "./Components/Balance";
import { TransactionHistory } from "./Components/TransactionHistory";
import { IncomeExpanse } from "./Components/IncomeExpanse";
import { GlobalProvider } from "./GobalState/GlobalContext";
import { AddTransaction } from "./Components/AddTransaction";
import { Header } from "./Components/Header";
export default function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Balance balance="123" />
        <IncomeExpanse />
        <TransactionHistory />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}
