import "./styles/main.css";
import "./styles/newevent.css";
import "materialize-css/dist/css/materialize.min.css";



<><header>
    <nav>
        <div class="nav-wrapper">
            <img class="hide-on-small-and-down" src="/images/bca-logo-transparent.png"></img>
        </div>
    </nav>
    <ul id="mobile-nav" class="sidenav">
        <li><a href="/events.html"><i class="material-icons left">event</i>Events</a></li>
        <li><a href="/attendees.html"><i class="material-icons left">people</i>Attendees</a></li>
        <li><a href="/projects.html"><i class="material-icons left">build</i>Projects</a></li>
        <li><a href="/login.html" class="btn">Login / Register</a></li>
    </ul>
</header><main>

        <form id="create_update_event" method="post" action="/event">
            <input type="hidden" name="event_id" id="event_id" value="0"></input>

        </form>
    </main>
    {/* <script>
        document.addEventListener('DOMContentLoaded', function () { }
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems, {format}: 'mm-dd-yyyy',
        autoClose: true
        });
        });

        document.addEventListener('DOMContentLoaded', function () { }
        var elems = document.querySelectorAll('.timepicker');
        var instances = M.Timepicker.init(elems, {defaultTime}: 'now',
        twelveHour: true,
        autoClose: false,
        });
        });

    </script> */}
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
