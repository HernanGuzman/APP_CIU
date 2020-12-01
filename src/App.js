import {useState} from 'react';
import './App.css';
import Layouts from './components/layouts';
import MarcasPage from './pages/MarcasPage';
import ProvinciasPage from './pages/ProvinciasPage';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => (
  <Layouts>
    <Router >
      
      <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/marcas' exact component={MarcasPage} />
          <Route path='/provincias' exact component={ProvinciasPage} />
          
      </Switch>
  
    </Router>
  </Layouts>
  
);


export default App;
