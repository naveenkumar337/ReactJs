import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Wel from "./Components/Function";
import { welcome, ClassProps } from "./Components/Class";
import { WelcomeState, FState } from "./Components/About-State";
import ParentComponent from "./Components/Call-ParentComponent/Parent";
import List from "./Components/ListRendering";
import ListExample from "./Components/Examples/ListRendering_Ex";
import MyStyle from "./Components/MyStyle";
import Form from "./Components/Form_Component/Form";
import LifeCycle from "./Components/Life_Cycles/LifeCycle_Of_React_Mounting";
import UpdateLifeCycle from "./Components/Life_Cycles/LifeCycle_Of_Updating";
import Fragment from "./Components/Fragment";
import PureComp from "./Components/PureComponent";
import ClickCount from "./Components/HOC/clickCount";
import MouseHover from "./Components/HOC/mouseHoverCount";
import ComponentD from "./Components/Context/ComponentD";
import PersonContext from "./Components/Context/UserContext";
import CallApi from "./Components/axios-HTTP/httpGet";
import HttpPost from "./Components/axios-HTTP/Http-Post";
import MokeTest from './Components/Examples/MokeTestSample'
import OptionPopups from "./Components/Examples/OptionPopups";
import LogIn from "./Components/Form_Component/LogIn";
import OtherComponent from "./Components/Examples/OtherForLazyCompo";
import LazyComponent from "./Components/Examples/LazyComponent";
import Hooks from "./Components/Hooks/StateHook/ParentHook";
import BasicRouter from './Components/Routers/BasicRouter'
 import InitialRenderComponent from "./Components/Examples/InitialRenderComponent";
function App() {
  var obj = {
    name: "whitesmoke",
    size: 22,
  };

  useEffect(() => {
    console.log("Did Mount");

    // returned function will be called on component unmount
    return () => {
      console.log("Will Unmount OR On destroy");
    };
  }, []);

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
      {/* Form Component  */}
      {/* <Form /> */}
      {/* LifeCycle of Mounting
<LifeCycle/>*/}
      {/* LifeCycle of Updating
<UpdateLifeCycle/>*/}

      {/* FragMent Application 
<Fragment/>*/}
      {/* Working With Pure Component */}
      {/* <PureComp/> */}

      {/* HOC */}
      {/* <ClickCount/>
<MouseHover/> */}

      {/* Context */}
      {/* Adding the value to userContext */}

      {/* <ComponentD></ComponentD> */}
      {/* <UserContext.Provider value="Naveen">
      </UserContext.Provider> */}
      {/* <PersonContext.Provider value={obj}>
        <ComponentD></ComponentD>
      </PersonContext.Provider> */}

      {/* {Http Services} */}
      {/* <CallApi/> */}
      {/* <HttpPost></HttpPost> */}

      {/* <HttpPost/> */}
      {/* <MokeTest/> */}
      {/* <LogIn/>       */}
      {/* <OptionPopups/> */}
      {/* <LazyComponent/> */}
      {/* <InitialRenderComponent/> */}
      {/* <Hooks/> */}
      <BasicRouter/>
    </div>
  );
}

export default App;
