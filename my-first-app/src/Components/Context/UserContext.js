import React from "react";
//creating the context
const UserContext = React.createContext("light");
const PersonContext = React.createContext();
export default PersonContext;

/* 
Aim: Access the props in the Component 'F' without passing into the b/w components.
    the app.js component was going to assign props value. the F component was collecting the prop value without 
    accesing from imeadiate parent.
*/
