

import React, { Component } from 'react';

import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import BaseRouter from './Router/index';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route component={BaseRouter} />
          
        </Router>
      </div>
     
    
    );
  }
}

export default App;
