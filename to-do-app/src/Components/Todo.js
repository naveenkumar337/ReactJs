import React, { Component } from 'react'

export default class WelComePage extends Component {

    constructor() {
        super();
        this.state = {
            textValue: '',
            inputArray:[],
            id:1

        }
        this.clickHanle = this.clickHanle.bind(this);
        this.chnageText = this.chnageText.bind(this);
        this.DeleteItem=this.DeleteItem.bind(this);
    }
    clickHanle(e) {
        e.preventDefault();
        //alert(this.state.textValue);
        const list=[...this.state.inputArray];
        const listvalue={
            id:this.state.id,
            name:this.state.textValue
        }
        list.push(listvalue);
        //alert(listvalue);
        this.setState(
            { textValue: this.state.textValue,
                inputArray:list,
            id:this.state.id+1}
            );
    }
    chnageText(ev) {
        console.log(ev.target.value);
        this.setState(
            { textValue:ev.target.value})
    }
    DeleteItem(ev){
        ev.preventDefault();
let id =ev.target.name;
console.log(id);
const array=this.state.inputArray;
console.log(array);
let arr=array.filter(ar=>ar.id!=id);
this.setState({ textValue: this.state.textValue,
    inputArray:arr,
id:this.state.id}
);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.clickHanle}>
                    <input type="text" name="title" onChange={this.chnageText} />
                    <input type="submit" name="Submit" />
                </form>
        <div> {this.state.inputArray.map(x=><li>{x.name} <button name={x.id} value="submit" onClick={this.DeleteItem}>Delete</button> </li>)}
                </div>
            </div>
        )
    }
}

