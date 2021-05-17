import React,{useEffect,useState,useReducer,} from 'react'
import api from 'axios'
import Prototype from 'prop-types'

const initialState={
    ID:Prototype.number=1,
    Title:Prototype.string="",
    Error:Prototype.string="",
    Loading:Prototype.bool=true
}
// const [state, setState] = useState(initialState)
const reducer=(object,action)=>{
    switch(action.Type){
        case 'FETCH_SUCESS':
            return {...object,ID:action.payload.id,Title:action.payload.title,Loading:false}
        case 'FETCH_FAIL':
            return {...object,Error:"Something Went Wrong",Loading:false}
        default:
            return object;
    }
}


function DataFetchingwithUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        api.get(`https://jsonplaceholder.typicode.com/posts/${state.ID}`)
        .then((res)=>{
            console.log(res)
            dispatch({Type:'FETCH_SUCESS',payload:res.data})
        })
        .catch((err)=>{
            dispatch({Type:'FETCH_FAIL',payload:err})
        })
        return () => {
        }
    }, [state.ID])
    console.log(initialState);
    console.log(state);
    return (
        <div>
            {state.Loading?"Loading":state.Title}
            {state.Error?state.Error:''}
        </div>
    )
}

export default DataFetchingwithUseReducer
