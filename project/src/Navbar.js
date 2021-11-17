import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import './styles/index.css';
import 'materialize-css/dist/css/materialize.min.css';
import logo from './images/bca-logo-transparent.png';
import bird from './images/phoenix.png';
import Events from './Events.js';
import Attendees from './Attendees.js';
import Projects from './Projects.js';
import Login from './Login.js';
import Event from '@material-ui/icons/Event';
import People from '@material-ui/icons/People';
import Build from '@material-ui/icons/Build';
import Menu from '@material-ui/icons/Menu';



const Navbar = () => {
    
    function events(){
        ReactDOM.render(
          <Events/>,
          document.getElementById('root')
        );
      }
    
      function attendees(){
        ReactDOM.render(
          <Attendees/>,
          document.getElementById('root')
        );
      }
    
      function projects(){
        ReactDOM.render(
          <Projects/>,
          document.getElementById('root')
        );
      }
    
      function login(){
        ReactDOM.render(
          <Login/>,
          document.getElementById('root')
        );
      }

    return (
        <header>
        <nav>
          <div class="nav-wrapper">
            <img class="hide-on-small-and-down" src={logo} alt="logo"></img>
            <a href="/" class="brand-logo">HackBCA 20XX</a>
            <a href="/" data-target="mobile-nav" class="sidenav-trigger"><Menu/></a>
            <ul id="desktop-nav" class="right hide-on-med-and-down">
              <li onClick={events}><Event/>Events</li>
              <li onClick={attendees}><People/>Attendees</li>
              <li onClick={projects}><Build/>Projects</li>
              <li><a href='/' onClick={login} class="btn">Login / Register</a></li>
            </ul>
          </div>
        </nav>
        <ul id="mobile-nav" class="sidenav">
          <li onClick={events}><Event/>Events</li>
          <li onClick={attendees}><People/>Attendees</li>
          <li onClick={projects}><Build/>Projects</li>
          <li><a href='/' onClick={login} class="btn">Login / Register</a></li>
        </ul>
      </header>

      );
}
 
export default Navbar;