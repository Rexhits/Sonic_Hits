import React, { Component } from 'react';
import './App.css';
import {
  Link
}from 'react-router-dom';
import logo from './img/fulllogo.png'

class NavigationBar extends Component {
  render() {
    return (
        
        <div className="LeftSideView">
          
          <ul className="LeftSideItems">
            <li> 
              <Link to='/'>
                <img className="LogoImg" src={logo} alt="logo" height="129.6" width="100"></img>
              </Link>
            </li>
            <li> <Link to='/services'>SERVICES</Link> </li>

            <li> <Link to='/demos'>DEMOS</Link> </li>

            <li> <Link to='/about'>ABOUT</Link> </li>

            <li> <Link to='/lab'>THE LAB</Link> </li>

            <li> <Link to='/lab'>CONTACT</Link> </li>
          </ul>
        </div>

    );
  }
}


export default NavigationBar;

