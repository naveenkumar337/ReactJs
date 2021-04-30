import React, { lazy,Suspense } from 'react'
//import OtherComponent from './OtherForLazyCompo'

const OtherComponent=React.lazy(()=>import('./OtherForLazyCompo'))
class LazyComponent extends React.Component{
    render(){
        return(
            <div>
                <Suspense fallback={<h2>Loading..</h2>}>
                   
                <OtherComponent/>
                </Suspense>
            </div>
        )
    }
}
export default LazyComponent