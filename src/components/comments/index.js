
import {useState, useEffect} from 'react'

import axios from 'axios'
// Hooks allow us to "hook" into React features such as state and lifecycle methods.

// mount
//update
//unmount


// hooks 
// - useState
// - useEffect

function Comments(props) {
    const [name, setName] = useState('jsk')
    const [comments, setComments] = useState([])
   
    // mount application
    useEffect(function(){
      console.log("mount application")
    //   const data = [5,6,7]
    //   setTodo(data)
    //   setName("javascript kingdom")
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(function (response) {
      // handle success
      console.log(response.data);
      setComments(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   

    },[])

    // update

    
    useEffect(function(){
        console.log("update component")
    },[comments])

    useEffect(function(){
        console.log("update everytime")
    })

 


    return (
     <div>
        {name}
        {
            comments.map((item)=>{
               return ( <div>{item.email}</div>)
            })
        }
     </div>
    
    );
}

export default Comments