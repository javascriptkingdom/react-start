
function Input() {

    // async function apicall(){
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //       .then(response => response.json())
    //       .then(json => console.log(json))
    // }

    const debounce = function( func, wait){
        console.log("master fn")
        let debounceTimer;
        return function(){
            const context = this
            const args = arguments
            console.log("calling from debounce")
            console.log('debounceTimer: ', debounceTimer);
            if(debounceTimer){
                clearTimeout(debounceTimer)
            }
            debounceTimer = setTimeout(() => func.apply(context, args),wait) 
        }
    }
    

    const handleChnage = (event)=>{
       console.log('val: ', event.target.value);
        console.log("Calling on change");
    }

    let debounce_fun = debounce(handleChnage,2000)
   
    return (
     <div>
        <input type="text" onChange={debounce_fun}/>
     </div>
    );
}

export default Input;


