import './styles/main.css';
import './styles/tables.css';
import 'materialize-css/dist/css/materialize.min.css';
import logo from './bca-logo-transparent.png';

function events() {
    return(
        <><header>
            <nav>
                <div class="nav-wrapper">
                    <img class="hide-on-small-and-down" src={logo} alt="logo"></img>
                </div>
            </nav>
            <ul id="mobile-nav" class="sidenav">
                <li><a href="/events.html"><i class="material-icons left">event</i>Events</a></li>
                <li><a href="/attendees.html"><i class="material-icons left">people</i>Attendees</a></li>
                <li><a href="/projects.html"><i class="material-icons left">build</i>Projects</a></li>
                <li><a href="/login.html" class="btn">Login / Register</a></li>
            </ul>
        </header><div class="container">
                <h1>Event Schedule</h1>

                <blockquote>
                    Click on the event name for more details!
                    Click on <i class="material-icons tiny">sort</i> to sort by that column, or items in <i
                        class="material-icons tiny">filter_list</i> columns to filter by that item.
                </blockquote>
                <div class="row">
                    <div class="col l3 s12 "> <i class="left material-icons">sort</i>Sorted by: Date / Time</div>
                    <div class="col l3 offset-l6 ">
                        <div class="right hide-on-small-only"><i class="left material-icons">filter_list</i>Filter: None</div>
                        <div class="left hide-on-med-and-up"><i class="left material-icons">filter_list</i>Filter: None</div>
                    </div>
                </div>
                <table class="highlight centered responsive-table">
                    <thead>
                        <tr>
                            <th><i class="material-icons">star</i>
                                <a href="?sort=starred"><i class="material-icons">sort</i></a>
                            </th>
                            <th>Event</th>
                            <th>Location <a href="?sort=location">
                                <i class="material-icons">sort</i></a>
                                <i class="material-icons">filter_list</i>
                            </th>
                            <th>Date / Time
                                <a href="?sort=datetime"><i class="material-icons">sort</i></a>
                            </th>
                            <th>Duration</th>
                            <th>Type
                                <a href="?sort=type"><i class="material-icons">sort</i></a>
                                <i class="material-icons">filter_list</i>
                            </th>
                            <th>Interest<i class="material-icons">sort</i></th>
                        </tr>
                        <th>Admin Op</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <a onclick='toggleInterest(this, "{{ event_id }}")'
                                    class="btn-floating btn-small waves-effect waves-light scale-transition scale-in blue"><i
                                        class="material-icons">star_border</i></a>
                            </td>
                            <td class="blue-text clickable" onclick="location.href='/events/1.html'">Opening Ceremony</td>
                            <td> <a href='?filter=location:Auditorium'>Auditorium </a></td>
                            <td><a href='?filter=date:05-01-2022'>May 1 (Sat)</a> 10:30 AM</td>
                            <td>30m</td>
                            <td> <a href='?filter=type:Main'>Main</a></td>
                            <td>100<i class material-icons>people</i></td>
                            <td nowrap>
                                <a class="btn-floating btn-small waves-effect waves-light green lighten-1" href="/eventform.html"><i
                                    class="material-icons">edit</i></a>
                                <a class="btn-floating waves-effect waves-light red"
                                    onclick='confirmDelete("Opening Ceremony","{{ event_id}}", ".")'><i
                                        class="material-icons">delete</i></a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a onclick='toggleInterest(this, "{{ event_id }}")'
                                    class="btn-floating btn-small waves-effect waves-light scale-transition scale-in blue"><i
                                        class="material-icons">star_border</i></a>
                            </td>
                            <td class="blue-text clickable" onclick="location.href='/events/2.html'">Closing Awards Ceremony</td>
                            <td> <a href='?filter=location:Auditorium'>Auditorium </a></td>
                            <td><a href='?filter=date:05-02-2021'>May 2 (Sun)</a> 11:00 AM</td>
                            <td>30m</td>
                            <td> <a href='?filter=type:Main'>Main</a></td>
                            <td>99<i class='material-icons'>people</i></td>
                            <td nowrap>
                                <a class="btn-floating btn-small waves-effect waves-light green lighten-1" href="./eventform.html"><i
                                    class="material-icons">edit</i></a>
                                <a class="btn-floating waves-effect waves-light red"
                                    onclick='confirmDelete("Opening Ceremony","{{ event_id}}")'><i class="material-icons">delete</i></a>

                            </td>

                        </tr>

                    </tbody>
                </table>
            </div><a href="/eventform.html" class="btn-floating btn-large orange fixed-action-btn">
                <i class="large material-icons">create</i>
            </a><><><footer class="page-footer">
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
            </footer><script src="/js/event_utils.js"></script></><>
                    <script src="/js/materialize.min.js"></script></><script> M.AutoInit();</script></></>
    );
}

export default events;