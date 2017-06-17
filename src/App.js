import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import ServicesPage from './ServicesPage'
import AboutPage from './AboutPage'
import BottomBar from './BottomBar'
import {
  BrowserRouter as Router,
  Route,
}from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App"> 
          <NavigationBar />
            <Route exact path='/services' component={ServicesPage} />
            <Route exact path='/about' component={AboutPage} />
          <BottomBar />
        </div>
      </Router>
    );
  }
}


export default App;
