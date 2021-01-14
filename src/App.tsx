import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './Components/Navbar';
import { TodosPage } from './pages/TodosPage'
import { TodosAbout } from './pages/TodosAbout';

const App: React.FC = () => {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route component={TodosPage} path='/' exact />
          <Route component={TodosAbout} path='/about' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
