function sum(a,b){
    return a +b
}
console.log(sum(2,3))

const newsum = (a,b) => a + b
console.log(newsum(2,3))

const teest2 = [3,4,5].map(function(a){
    return a*2
})

const teest = [3,4,5].map((a)=> a*2)
const res = ['Ford', 'BMW', 'Audi'].map((item)=>`<div>${item}</div>`)
console.log('res: ', res);
console.log('teest: ', teest);

// Hook Rules
// There are 3 rules for hooks:

// Hooks can only be called inside React function components.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional




// https://jsonplaceholder.typicode.com/todos



// REST api

// GET POST PUT DELETE