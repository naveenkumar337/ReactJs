import React,{Component} from 'react';
class ClassProps extends React.Component{
    /*constructor(){
        super()
        this.name=prompt("Name","");
        this.age=prompt("Age","");
    }*/
    constructor(props){
        super();
        this.name=props.name.toUpperCase();
        this.age=props.age;
     
    }
    render(){
    return (
    <div><p>Welcome to ClassProps,,<br/> Name:-{this.name} his age: {this.age}</p>
      </div>  );
    }
}

class Welcome extends React.Component{   
render(){
    return<div>
        <h4>Welcome to React,this is <strong>Class</strong> Component.</h4>
    </div>
}
}
//Props

export {Welcome,ClassProps};