import ReactDOM from 'react-dom';
import React from 'react';
import './styles/main.css';
import './styles/index.css';
import 'materialize-css/dist/css/materialize.min.css';
import BottomFooter from './BottomFooter';
import Navbar from './Navbar';

function Projects() {
    return(
        <div>
        <Navbar/>
        
        

        <footer class="projects">
        <BottomFooter/>
        </footer>
        </div>
    );
}

export default Projects;