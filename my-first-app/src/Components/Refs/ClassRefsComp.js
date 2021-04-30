import React, { Component } from 'react'
import RefsComp from './RefsComp';

class ParentRefComp extends Component {
    constructor(props) {
        super(props)
    
        this.parentComp=React.createRef();
    }
    clickHandler=()=>{
        this.parentComp.current.focusChildInput();
    }
    render() {
        return (
            <div>
                <ChildRefComp ref={this.parentComp}></ChildRefComp>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ParentRefComp

//Child component to focus input field
class ChildRefComp extends Component {
constructor(props) {
    super(props)

    this.InputRef=React.createRef();
}
focusChildInput(){
    this.InputRef.current.focus();
}
    render() {
        return (
            <div>
                <input  type="text" ref={this.InputRef} placeholder="ChildRefComp" />
            </div>
        )
    }
}
