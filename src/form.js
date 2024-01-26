import { useEffect, useState } from "react";

import MyButton  from './components/Button/Button.js'

function Form(props){
   let [firstName, setMyfirstnsm] = useState('') //['',function(){}]
   const [lastName, setLastName] = useState('')
   const [email, setemail] = useState('')

   let [todo, setTodo] = useState([55,66,77,88])
//    console.log('todo: ', todo);

   let msg = "please fill the form"
   
//    setTimeout(function(){
//     // setMyfirstnsm("murli")
  
//     msg = "thanks for filling the form"
//     console.log(msg)
//    },6000)

    // C R U D
  
    const handleFirstName = function(event){
        const val = event.target.value;
        console.log('val: ', val);
        setMyfirstnsm(val)
    }

    const handlelastName = function(event){
        setLastName(event.target.value)
    }
    const handleemail = function(event){
        setemail(event.target.value)
    }

 
     




    const handleSave = function(){
        console.log(firstName, lastName)

        if(firstName.length === 0){
            console.error("please fill your name")
        }

        if(firstName.length < 2){
            console.log("firstname is less then 2 character")
        }
        if(!email.includes('@')){
            console.log("this is not a valid email")
        }
    }
    return(
       <div>
 {/* null and undefined  */}

        <div>{msg}</div>
           <div >{props.form_title}</div>
            <div> first Name</div>
            <input type="text" onChange={handleFirstName} value={firstName} />


            <div>last Name</div>
            <input type="text" onChange={handlelastName} value={lastName} />


            <div>Email</div>
            <input type="email" onChange={handleemail} value={email}/>


            <div>Password</div>
            <input type="password" />

            <div>
            <button onClick={handleSave}> sign up</button>
            {/* <Button  title="sign up"/> */}
            </div>
            <MyButton/>
       </div>
      
    )
}

export default Form;



const myjson = {
    "name" : 'Belgian Waffles',
    "price" : '$5.95'
}

