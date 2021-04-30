import axios from 'axios'
import React from 'react'
import axios from 'axios'

class HttpPost extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             name='',
             id=0,
             Desc:'done by usage'
        }
    }
    

    componentDidMount(){

        axios.put('https://jsonplaceholder.typicode.com/posts/1',data={tittle:'lanaka',body:'ruled by rawana'}).then(
            function success(response){
console.log(response.data.tittle);
            }
        ).catch(
            function error(error){

            }
        )
    }
    render(){
        return(
            <div></div>
        )
    }
}
export default HttpPost;