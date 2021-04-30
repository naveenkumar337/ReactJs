import React from 'react'
import {useEffect,useState} from 'react'
function InitialRenderHook() {
   const [X, setX] = useState(0);
   const [Y, setY] = useState(0);
   const logMouseValues=(e)=>{
       console.log("updating")
       setX(e.clientX);
       setY(e.clientY)
   }
   useEffect((e) => {
       console.log("Updating UseState")
       window.addEventListener('mousemove',logMouseValues)
   }, [])
    return (
        <div>
            X:{X} and Y:{Y}
        </div>
    )
}

export default InitialRenderHook
