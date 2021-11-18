import React from 'react';
import BottomFooter from './BottomFooter';
import Navbar from './Navbar';
import './styles/main.css';
import './styles/index.css';
import 'materialize-css/dist/css/materialize.min.css';

const ProjectInfoNew = (name, team, info) => {
    return ( 
        <div>
        <Navbar/>
        <body>
            <h1>{name}</h1>
            <h5>{team}</h5>
            <h2></h2>
            <h6>Description:</h6>
            <p>{info}</p>
        </body>
        <BottomFooter/>
        </div>
     );
}
 
export default ProjectInfoNew;