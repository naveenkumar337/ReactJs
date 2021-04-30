import React,{useState} from 'react'

function UsingPrevState() {
    const initialState=0
    const [Count,SetCount]=useState(initialState)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            //SetCount(Count+1);//this will update only once the value
     SetCount(prevCount=>prevCount+1);
        }
    }
    return (
        <div>
            <h5>Count {Count}</h5>
            <div>
                <button onClick={()=>SetCount(initialState)} >Reset</button>
                <button onClick={()=>SetCount(Count+1)}>Increment</button>
                <button onClick={()=>SetCount(Count-1)}>Decrement</button>

<button onClick={incrementFive}>Increment 5</button>
            </div>
        </div>
    )
}

export default UsingPrevState