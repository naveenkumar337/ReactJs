import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wel from './Components/Function';
import {welcome,ClassProps} from './Components/Class';
import {WelcomeState,FState} from './Components/About-State'
import ParentComponent from './Components/Call-ParentComponent/Parent'
function App() {
  return (
    <div className="App">
     {/* <Wel/>
      <welcome/>
      <ClassProps name="max" age="25"/>
<WelcomeState />
     <FState/>*/}
<ParentComponent/>
    </div>
  );
}

export default App;
