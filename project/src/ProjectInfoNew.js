import React from 'react';
import BottomFooter from './BottomFooter';
import Navbar from './Components/Navbar';
import './styles/main.css';
import './styles/index.css';
import 'materialize-css/dist/css/materialize.min.css';

const ProjectInfoNew = (props) => {
    return ( 
        <div>
        <Navbar/>
        <body>
            <h1>{props.name}</h1>
            <h5>By: {props.team}</h5>
            <h2></h2>
            <h6>Description:</h6>
            <p>{props.info}</p>
        </body>
        <BottomFooter/>
        </div>
     );
}
 
export default ProjectInfoNew;