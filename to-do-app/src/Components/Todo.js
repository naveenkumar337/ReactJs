import React, { Component } from 'react'
import './ToDo-Css.css'

export default class WelComePage extends Component {

    constructor() {
        super();
        this.state = {
            textValue: '',
            inputArray: [],
            id: 1,
            classname: 'result-div'

        }
        this.clickHanle = this.clickHanle.bind(this);
        this.chnageText = this.chnageText.bind(this);
        this.DeleteItem = this.DeleteItem.bind(this);
        this.clearList = this.clearList.bind(this);
    }
    //Submit functionality
    clickHanle(e) {
        e.preventDefault();
        //Handling Null value
        if (this.state.textValue == "") {
            alert("Enter Valid TODO");
            return false;
        }
        
        //Adding to list
        const list = [...this.state.inputArray];
        const listvalue = {
            id: this.state.id,
            name: this.state.textValue
        }
        list.push(listvalue);

        //set values
        this.setState(
            {
                textValue: this.state.textValue,
                inputArray: list,
                id: this.state.id + 1
            }
        );
        if (list.length >= 10) {

            this.setState({
                classname: 'result-div scroll'
            })
        }
    }

    //read text box value
    chnageText(ev) {
        console.log(ev.target.value);
        this.setState(
            { textValue: ev.target.value });
    }
    //Clear List functionality
    clearList() {
        this.setState({ inputArray: [] });
        this.setState({
            classname: 'result-div'
        });
    }

    //Delete Item Functionality
    DeleteItem(ev) {
        ev.preventDefault();
        let id = ev.target.name;
        const array = this.state.inputArray;
        let arr = array.filter(ar => ar.id != id);
        this.setState({
            textValue: this.state.textValue,
            inputArray: arr,
            id: this.state.id
        });
        if (arr.length < 10) {
            this.setState({
                classname: 'result-div'
            })
        }
    }

    render() {
        return (

            <div>
                <div className="btn-Div">
                    <button className="btnClear" name="clear" onClick={this.clearList} >Clear</button>
                </div>
                <div className={this.state.classname}>
                    {this.state.inputArray.length > 0 ? this.state.inputArray.map(x => <li key={x.id}>{x.name} <button name={x.id} value="submit" onClick={this.DeleteItem}>X</button> </li>) : <li>Empty List</li>}
                </div>
                <form className="main-form" onSubmit={this.clickHanle}>
                    <input className="txtName" placeholder="Enter What ToDo?" type="text" defaultValue=""  name="title" onChange={this.chnageText} />
                    <input className="btnSubmit" type="submit" name="Submit" />
                </form>

            </div>
        )
    }
}

