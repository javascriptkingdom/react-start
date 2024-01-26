import logo from './logo.svg';
import './App.css';


import Form from './form.js';
import Header from './components/Header/Header.js'
import Profile from './components/Profile/index.js';
import Counter from './components/Counter/index.js';
import Input from './Input.js';
import Comments from './components/comments/index.js';
//Conditional rendering

function App() {
  let showProfile = true
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
          <div className="App">
            {/* <Input/> */}
            <Header/>
            <Counter/>
            <Comments/>
            
            {
              cars.map(function(item, index){
                return (
                  <div key={index}>{item}
                    <span>666</span>
                  </div>
                )
              })
            }


            
            
            <Profile alt = "yyyy" height={80}  name="jsk" imageUrl={'https://i.imgur.com/yXOvdOSs.jpg'}/>
            <Profile alt = "bread" height={100}  name="bread" imageUrl={'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_448096.jpg?ts=1685981872'}/>
            <span className='Hello'>Form</span>
            <Form form_title="new form"/>
          </div>
  );
}

export default App;



