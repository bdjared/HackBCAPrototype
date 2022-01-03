import ReactDOM from 'react-dom';
import React from 'react';
import './styles/main.css';
import './styles/index.css';
import 'materialize-css/dist/css/materialize.min.css';
import BottomFooter from './BottomFooter';
import Navbar2 from './Components/Navbar2';
import ProjectBody from './ProjectBody';

function Projects() {
    return(
        <div>
        <Navbar2/>
        {/* <ProjectBody/>
        <BottomFooter/> */}
        </div>
    );
}

export default Projects;