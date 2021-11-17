import ReactDOM from 'react-dom';
import React from 'react';
import BottomFooter from './BottomFooter';
import Navbar from './Navbar';
import './styles/main.css';
import './styles/index.css';
import 'materialize-css/dist/css/materialize.min.css';

const Projectinfo1 = () => {
    return ( 
        <div>
        <Navbar/>
        <body>
            <h1>Flappy Golf (remaster)</h1>
            <h5>By: MJD Industries</h5>
            <h2></h2>
            <h6>Description:</h6>
            <p>Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description 
            Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description 
            Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description 
            Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description 
            Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description 
            Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description Random Description 
            </p>
        </body>
        <BottomFooter/>
        </div>
     );
}
 
export default Projectinfo1;