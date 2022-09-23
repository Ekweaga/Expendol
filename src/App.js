import logo from './logo.svg';
import './App.css';
import  Expense from './expense';
import Home from './home'

import { Route, Switch, Link,BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useState } from 'react';
import Login from './login';
import Register from './register';
import Navbar from './navbar';
import Footer from './Footer';


function App() {
  const [show ,setshow] = useState(true);
  const visible = ()=>{
    setshow(false)
  }
  const ok = ()=>{
    setshow(true)
  }
  
  return (
    <><div className="App">
      <Navbar/>
    
      
           
            
       
     
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/signup" exact>
            <Register/>
          </Route>
          <Route path="/expense" exact>
            <Expense/>
          </Route>
         
       
        </Switch>
       
      
     
  
  
  
   <Footer/>
   {/*<div className='footer'><footer><span>@Expendol | 2022</span></footer></div>*/}
    </div> 

  
   
   
    </>
  );
}

export default App;
