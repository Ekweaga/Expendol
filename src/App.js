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
      <BrowserRouter>
      
           
            
       
     
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
       
        </Switch>
       
      
     
  
  
   </BrowserRouter>
   {/*<div className='footer'><footer><span>@Expendol | 2022</span></footer></div>*/}
    </div> 

  
   
   
    </>
  );
}

export default App;
