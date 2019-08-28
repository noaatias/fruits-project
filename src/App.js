import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import { Fragment, useEffect } from 'react';

//redux
import {Provider} from 'react-redux';
import store from './store';
 import Fruits from './components/Fruits';
 import FruitDetails from './components/FruitDetails'
 import Favorites from './components/Favorites'

const App=()=>(
  <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Fruits} />
          <div >
            <Switch>
              <Route exact path='/FruitDetails' component={FruitDetails} />
              <Route exact path='/Favorites' component={Favorites} />

            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
)

export default App;
