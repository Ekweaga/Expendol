import logo from './logo.svg';
import './App.css';
import  Expense from './expense';
import Home from './home'

import { Route, Switch, Link,BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useState } from 'react';
import Login from './login';
import Register from './register';


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
      <BrowserRouter>
      
           
            
       
     
        <Switch>
        <Route path="/" exact>
             <Home />
          </Route>
          <Route path="/expense" exact>
             <Expense />
          </Route>
          
          <Route path="/login" exact>
             <Login />
          </Route>
          <Route path="/register" exact>
             <Register />
          </Route>
        </Switch>
       
      
     
  
  
   </BrowserRouter>
   {/*<div className='footer'><footer><span>@Expendol | 2022</span></footer></div>*/}
    </div> 

  
   
   
    </>
  );
}

export default App;
