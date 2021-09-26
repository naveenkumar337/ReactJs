// import logo from './logo.svg';
// import './App.css';
// import RegisterForm from './Components/Registration and Login/Registration/RegisterForm';
import "bootstrap/dist/css/bootstrap.css";
import ErrorBoundary from './Components/ErrorBoundary'

import Index from "./Components/Registration and Login/Index";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Index />
      </ErrorBoundary>
    </div>
  );
}

export default App;
