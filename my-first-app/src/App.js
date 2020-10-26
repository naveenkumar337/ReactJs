import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wel from './Components/Function';
import {welcome,ClassProps} from './Components/Class';
import {WelcomeState,FState} from './Components/About-State'
import ParentComponent from './Components/Call-ParentComponent/Parent'
import List from './Components/ListRendering'
import ListExample  from './Components/Examples/ListRendering_Ex'
import MyStyle from './Components/MyStyle'
import Form from './Components/Form_Component.js/Form'
import LifeCycle from './Components/Life_Cycles/LifeCycle_Of_React_Mounting'
import UpdateLifeCycle from './Components/Life_Cycles/LifeCycle_Of_Updating'
import Fragment from './Components/Fragment'
import PureComp from './Components/PureComponent'
import Refs from './Components/Refs/RefsComp'
import ClassRef from './Components/Refs/ClassRefsComp'
import FRRef from './Components/Refs/ForwordingRef'
function App() {
  return (
    <div className="App">
     {/* <Wel/>
      <welcome/>
      <ClassProps name="max" age="25"/>
<WelcomeState />
     <FState/>*/}

    {/*Access One method props in another App */} 
{/* {<ParentComponent/>} */}

{/* List Rendering 
<List/>*/}

{/**List Rendering Example 
<ListExample/>*/}
{/*Style Components
<MyStyle name="primary"/>
*/}
{/* Form Component 
<Form/>*/}
{/* LifeCycle of Mounting
<LifeCycle/>*/}
{/* LifeCycle of Updating
<UpdateLifeCycle/>*/}

{/* FragMent Application 
<Fragment/>*/}
{/* Working With Pure Component 
<PureComp/>*/}

{/* Using Refs 
<h2>Basic Ref Concept</h2>
<Refs>
  </Refs> 
  <h3>Refs With Class Component</h3>
  <ClassRef/>
  <h3>Forwording Ref</h3>
  <FRRef/>*/}
    </div>
  );
}

export default App;
