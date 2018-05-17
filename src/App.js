

import React, { Component } from 'react';

import Button from 'antd/lib/button';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';

import BaseRouter from './Router/index';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route component={BaseRouter} />
          
        </Router>
        <Button type="primary">Button</Button>
      </div>
     
    
    );
  }
}

export default App;
