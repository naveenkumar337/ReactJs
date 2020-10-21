import React from 'react'

export default function ListRendering() {
    const names=['naveen','ajay','raju'];
    const Persons=[{id:1,name:'naveen',age:23},{id:2,name:'ranga',age:25},{id:3,name:'ajay',age:18}];
    return (
        
        <div>
            {names.map((name,index)=><h2 key={index}>{index} {name}</h2>)}
            {
                Persons.map((person,index)=><Person key={index} id={person.id} person={person}/>)
            }
        </div>
    )
    
    function Person({id,person}) {
        console.log(id);
        return (
            <div>
                <p key={id}> Id:{person.id} Name:<strong>{person.name}</strong> Age:{person.age} </p>
            </div>
        )
    }
    
}
