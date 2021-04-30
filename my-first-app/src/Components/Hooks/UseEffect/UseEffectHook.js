import React,{useState,useEffect} from 'react'

function UseEffectHook() {
    const [Text, setText] = useState('naveen');
useEffect(()=>{
    console.log(Text)
    document.title =Text;
})
    return (
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
        </div>
    )
}

export default UseEffectHook
