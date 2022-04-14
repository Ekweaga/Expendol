import logo from './logo.svg';
import './App.css';
import  Expense from './expense';
import Home from './home'

import { Route, Switch, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';


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
        <Route path="/" component={Home} exact/>
        <Route path="/expense" component={Expense} />
        </Switch>
       
      
     
  
  
   </BrowserRouter>
   {<div className='footer'><footer><span>@Expendol | 2022</span></footer></div>}
    </div> 

  
   
   
    </>
  );
}

export default App;
