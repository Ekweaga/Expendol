import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Expense from './expense'


import React from 'react'

const Routers = () => {
    return (
      <BrowserRouter>
      <Switch>
          <Route path="/expense">
             <Expense />
          </Route>
      </Switch>
      </BrowserRouter>
    )
}

export default Routers;
