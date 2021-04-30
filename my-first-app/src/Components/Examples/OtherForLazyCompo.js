import React, { Fragment } from 'react'

class  OtherComponent extends React.Component{
    componentDidMount(){
        clearInterval(0); 
    }
    render(){
    return (
        <Fragment>
            <h1>
                {setInterval(()=><h1>this is timer</h1>,5000)}
                WelCome to OtherComponent
            </h1>
        </Fragment>
    )
}
}
export default OtherComponent;