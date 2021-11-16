import ReactDOM from 'react-dom';
import React from 'react';
import './styles/main.css';
import './styles/newevent.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Container, DatePicker, TimePicker} from "react-materialize";
import logo from './images/bca-logo-transparent.png';
import Events from './Events.js';
import Attendees from './Attendees.js';
import Projects from './Projects.js';
import Login from './Login.js';
import Event from '@material-ui/icons/Event';
import People from '@material-ui/icons/People';
import Build from '@material-ui/icons/Build';
import Menu from '@material-ui/icons/Menu';

function Eventform() {

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

    return(
        <><header>
        <nav>
          <div class="nav-wrapper">
            <img class="hide-on-small-and-down" src={logo} alt="logo"></img>
            <a href="/" class="brand-logo">HackBCA 20XX</a>
            <a href="/" data-target="mobile-nav" class="sidenav-trigger"><Menu/></a>
            <ul id="desktop-nav" class="right hide-on-med-and-down">
                <li><a href='/' onClick={events}><Event/>Events</a></li>
                <li><a href='/' onClick={attendees}><People/>Attendees</a></li>
                <li><a href='/' onClick={projects}><Build/>Projects</a></li>
                <li><a href='/' onClick={login} class="btn">Login / Register</a></li>
            </ul>
          </div>
        </nav>
        <ul id="mobile-nav" class="sidenav">
            <li><a href='/' onClick={events}><Event/>Events</a></li>
            <li><a href='/' onClick={attendees}><People/>Attendees</a></li>
            <li><a href='/' onClick={projects}><Build/>Projects</a></li>
            <li><a href='/' onClick={login} class="btn">Login / Register</a></li>
        </ul>
        </header>
        <main>
        <form id="create_update_event" method="post" action="/event">
            <input type="hidden" name="event_id" id="event_id" value="0"></input>

        </form>
        </main>

        <Container>
            <DatePicker format='mm-dd-yyyy' autoClose={true}/>
        </Container>

        <Container>
            <TimePicker defaultTime='now' twelveHour={true} autoClose={false}/>
        </Container>

        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Sponsors</h5>
                        <p>hackBCA is brought to you by:</p>
                        <ul>
                            <li>BCA PPO</li>
                            <li>Tech-Pa</li>
                            <li>&lt;Corporate Sponsors&gt;</li>
                            <li>Wanna join this list? Sponsor us!</li>
                        </ul>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Contact Us</h5>
                        <ul>
                            <li>Twitter: @hackbca</li>
                            <li>Instagram: @hackbca</li>
                            <li>Facebook: @hackbca</li>
                            <li>Email: hackbca@_____</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer></>
    )
}
export default Eventform;
