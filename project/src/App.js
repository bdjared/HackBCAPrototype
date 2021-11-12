import './App.css';

function App() {
  return (

  <><title>HackBCA 20XX</title><body>
      <header>
        <nav>
          <div class="nav-wrapper">
            <img class="hide-on-small-and-down" src="./images/bca-logo-transparent.png" alt="BCA Logo"></img>
          </div>
        </nav>
        <ul id="mobile-nav" class="sidenav">
          <li><a href="/events.html"><i class="material-icons left">event</i>Events</a></li>
          <li><a href="/attendees.html"><i class="material-icons left">people</i>Attendees</a></li>
          <li><a href="/projects.html"><i class="material-icons left">build</i>Projects</a></li>
          <li><a href="/login.html" class="btn">Login / Register</a></li>
        </ul>
      </header>

      <main>
        <div class="container">
          <h1>Get ready for HackBCA!</h1>

          <div class="row">
            <div class="col s5">
              <img class="responsive-img" src="./images/phoenix.png" alt="Blue and Red phoenix silhouette"></img>
            </div>
            <div class="col s7 ">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">MM DD-DD 20XX @ BCA</span>
                  <p>HackBCA will return soon!</p>
                  <p>Visit frequently to see updates, including planned events and projects from other attendees.</p>
                  <p>Log in with Google to register, plan your schedule, and propose or volunteer for projects.</p>

                </div>
                <div class="card-action">
                  <a href="/events.html">See what's happening (Events)</a>
                </div>
                <div class="card-action">
                  <a href="/attendees.html">See who's coming (Attendees)</a>
                </div>
                <div class="card-action">
                  <a href="/projects.html">See what's being built (Projects)</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

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
            © 2021 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>

      <script src="/js/materialize.min.js"></script>

      <script> M.AutoInit();</script>

    </body></>
  );
}

export default App;
