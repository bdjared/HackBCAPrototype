import ReactDOM from 'react-dom';
import React from 'react';
import './styles/main.css';
import './styles/index.css';
import 'materialize-css/dist/css/materialize.min.css';
import BottomFooter from './BottomFooter';
import Navbar from './Navbar';
import ProjectBody from './ProjectBody';

function Projects() {
    return(
        <div>
        <Navbar/>
        <ProjectBody/>
        <BottomFooter/>
        </div>
    );
}

export default Projects;