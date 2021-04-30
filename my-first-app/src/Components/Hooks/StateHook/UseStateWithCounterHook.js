import React,{useState} from 'react'

function CounterHook(){
    const [Count,setCount]=useState(0);
    return(
        <div>
           <p>This is Hook Counter Section
           </p>
           
           <button onClick={()=>setCount(Count+1)} >Count {Count}</button>
        </div>
    )
}
export default CounterHook;