import React, { Component } from 'react'

class RefsComp extends Component {
    constructor(props) {
        super(props)
        this.refInput=React.createRef();
        this.cbRef=null;
        this.setcbRef=element=>{
            this.cbRef=element;
        }
    }
    componentDidMount(){
        if(this.cbRef){
this.cbRef.focus();
        }
    }
    handleClick=()=>{
        alert(this.refInput.current.value);
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.refInput} />
                <input type="text" ref={this.setcbRef} />
                <input type="text" ref={this.setcbRef} />

                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default RefsComp
