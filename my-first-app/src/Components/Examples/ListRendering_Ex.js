import React,{Component} from 'react'

class ListRendering_Ex extends React.Component{
    constructor(){
        super();
        this.state={
            id:1,
            list:[{
                id:1,
                name:"1"
            }]
        }
        this.addToTop=this.addToTop.bind(this);
         this.addToEnd=this.addToEnd.bind(this);
         this.bindValue=this.bindValue.bind(this);
    }
    addToTop(ev){
        var li=[...this.state.list]
        let incid=this.state.id+1;
let obj={
    id:incid,
    item:''
}
li.unshift(obj);
this.setState({
    id:incid,
    list:li
})
    }
    bindValue(ev){
        console.log('gt');
        
let telugu=this.state.list.forEach((item,index)=>{
   
    if(item.id==ev.target.id){
        item.name=ev.target.value//ev.target.value;
    }
});
console.log(telugu);
 }
    addToEnd(ev){
        
        var li=[...this.state.list]
        let incid=this.state.id+1;
let obj={
    id:incid,
    item:''
}
li.push(obj);
this.setState({
    id:incid,
    list:li
})
    }
render(){
return (
    <div>
        <button onClick={this.addToTop}>AddToTop</button>
        <button onClick={this.addToEnd}>AddToEnd</button>
        <div>
{this.state.list.map((item,index)=><li key={index}>{index} {item.id} <input  type="text" id={item.id} onClick={this.bindValue} /> {Date.now}</li>)}
        </div>
    </div>
);
}
}

export default ListRendering_Ex;