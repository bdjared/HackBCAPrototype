import ReactDOM from 'react-dom';
import React from 'react';
import './styles/main.css';
import './styles/tables.css';
import 'materialize-css/dist/css/materialize.min.css';
import logo from './images/bca-logo-transparent.png';
import Attendees from './Attendees.js';
import Projects from './Projects.js';
import Login from './Login.js';
import Eventform from './Eventform.js';
import Event from '@material-ui/icons/Event';
import People from '@material-ui/icons/People';
import Build from '@material-ui/icons/Build';
import Menu from '@material-ui/icons/Menu';
import Sort from '@material-ui/icons/Sort';
import FilterList from '@material-ui/icons/FilterList';
import Star from '@material-ui/icons/Star';
import Create from '@material-ui/icons/Create';
import Delete from '@material-ui/icons/Delete';
import StarBorder from '@material-ui/icons/StarBorder';
import Edit from '@material-ui/icons/Edit';

function Events() {

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

    function eventform(){
        ReactDOM.render(
            <Eventform/>,
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
        <div class="container">
            <h1>Event Schedule</h1>

            <blockquote>
                Click on the event name for more details!
                Click on <Sort/> to sort by that column, or items in 
                <FilterList/> columns to filter by that item.
            </blockquote>
            <div class="row">
                <div class="col l3 s12 "> <Sort/>Sorted by: Date / Time</div>
                <div class="col l3 offset-l6 ">
                    <div class="right hide-on-small-only"><FilterList/>Filter: None</div>
                    <div class="left hide-on-med-and-up"><FilterList/>Filter: None</div>
                </div>
            </div>
            <table class="highlight centered responsive-table">
                <thead>
                    <tr>
                        <th><Star/>
                            <a href="?sort=starred"><Sort/></a>
                        </th>
                        <th>Event</th>
                        <th>Location <a href="?sort=location">
                            <Sort/></a>
                            <FilterList/>
                        </th>
                        <th>Date / Time
                            <a href="?sort=datetime"><Sort/></a>
                        </th>
                        <th>Duration</th>
                        <th>Type
                            <a href="?sort=type"><Sort/></a>
                            <FilterList/>
                        </th>
                        <th>Interest<Sort/></th>
                    </tr>
                    <th>Admin Op</th>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <a href='/' onClick='toggleInterest(this, "{{ event_id }}")'
                                class="btn-floating btn-small waves-effect waves-light scale-transition scale-in blue"><StarBorder/></a>
                        </td>
                        <td class="blue-text clickable" onClick="location.href='/events/1.html'">Opening Ceremony</td>
                        <td> <a href='?filter=location:Auditorium'>Auditorium </a></td>
                        <td><a href='?filter=date:05-01-2022'>May 1 (Sat)</a> 10:30 AM</td>
                        <td>30m</td>
                        <td> <a href='?filter=type:Main'>Main</a></td>
                        <td>100<People/></td>
                        <td nowrap>
                            <a class="btn-floating btn-small waves-effect waves-light green lighten-1" href="/eventform.html"><Edit/></a>
                            <a href='/' class="btn-floating waves-effect waves-light red"
                                onClick='confirmDelete("Opening Ceremony","{{ event_id}}", ".")'>
                                    <Delete/></a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <a href='/' onClick='toggleInterest(this, "{{ event_id }}")'
                                class="btn-floating btn-small waves-effect waves-light scale-transition scale-in blue"><StarBorder/></a>
                        </td>
                        <td class="blue-text clickable" onClick="location.href='/events/2.html'">Closing Awards Ceremony</td>
                        <td> <a href='?filter=location:Auditorium'>Auditorium </a></td>
                        <td><a href='?filter=date:05-02-2021'>May 2 (Sun)</a> 11:00 AM</td>
                        <td>30m</td>
                        <td> <a href='?filter=type:Main'>Main</a></td>
                        <td>99<People/></td>
                        <td nowrap>
                            <a class="btn-floating btn-small waves-effect waves-light green lighten-1" href="./eventform.html"><Edit/></a>
                            <a href='/' class="btn-floating waves-effect waves-light red"
                                onClick='confirmDelete("Opening Ceremony","{{ event_id}}")'><Delete/></a>

                        </td>

                    </tr>

                </tbody>
            </table>
        </div><a href="/" onClick={eventform} class="btn-floating btn-large orange fixed-action-btn">
            <Create/>
        </a><footer class="page-footer">
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
                    © 2021 Copyright Text
                    <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer></>
    );
}

export default Events;
