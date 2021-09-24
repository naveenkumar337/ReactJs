import 'bootstrap/dist/css/bootstrap.css'
import './../src/App.css'
import Step1View from './Components/Step1/Step1View'
import Step2View from './Components/Step2/Step2View'
import Step3View from './Components/Step3/Step3View'
import Step4View from './Components/Step4/Step4View'
import Step5View from './Components/Step5/Step5View'
import FlageCases from './Components/Flag/FlagCase'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import {} from ''
import HomePage from './Components/CommonComponents/HomePage'
import { Step0View } from './Components/Step0/Step0View'
function App() {
  return (
    <Router>
    <div className="App">
<Switch>
     
     <Route path="/step1view"><Step0View/></Route>
      <Route path="/step2list"><Step1View/></Route>
            <Route path="/step3list"><Step2View/></Route>
            <Route path="/step4list"><Step3View/></Route>
            <Route path="/step5list"><Step4View/></Route>
            <Route path="/step6list"><Step5View/></Route>
            <Route path="/flagcases"><FlageCases/></Route>
            <Route to="/"> <HomePage/></Route>
</Switch>
     </div>
  </Router>
  );
}

export default App;
