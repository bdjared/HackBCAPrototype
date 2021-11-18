import ReactDOM from 'react-dom';
import React from 'react';
import './styles/main.css';
import './styles/index.css';
import Projectinfo1 from './Projectinfo1';
import ProjectInfo2 from './ProjectInfo2';

import 'materialize-css/dist/css/materialize.min.css';
import Sort from '@material-ui/icons/Sort';
import FilterList from '@material-ui/icons/FilterList';
import Star from '@material-ui/icons/Star';
import Create from '@material-ui/icons/Create';
import Delete from '@material-ui/icons/Delete';
import StarBorder from '@material-ui/icons/StarBorder';
import Edit from '@material-ui/icons/Edit';


const ProjectBody = () => {

    function openProjectInfo1(){
        ReactDOM.render(
          <Projectinfo1/>,
          document.getElementById('root')
        );
      }

      function openProjectInfo2(){
        ReactDOM.render(
          <ProjectInfo2/>,
          document.getElementById('root')
        );
      }

    return ( 

        <body>
        <div class="container">
            <h1>Projects</h1>

            <blockquote>
                Click on the project for more details!
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
                        <th>Project Name</th>
                        <th>Team Name<a href="?sort=location">
                            <Sort/></a>
                            <FilterList/>
                        </th>
                        <th>Date proposed
                            <a href="?sort=datetime"><Sort/></a>
                        </th>
                        <th>Type</th>
                        <th>More Info</th>
                        
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <a href='/' onClick='toggleInterest(this, "{{ event_id }}")'
                                class="btn-floating btn-small waves-effect waves-light scale-transition scale-in blue"><StarBorder/></a>
                        </td>
                        <td>Flappy Golf (remastered)</td>
                        <td>MJD Industries</td>
                        <td>May 1 (Sat)</td>
                        <td>JavaFX Game</td>
                        <td><button class="info" onClick={openProjectInfo1}>???</button></td>
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
                        <td><a href='?filter=date:05-02-2021'>May 2 (Sun)</a></td>
                        <td>Website</td>
                        <td> <button class="info" onClick={openProjectInfo2}>???</button></td>
                        
                        <td nowrap>
                            <a class="btn-floating btn-small waves-effect waves-light green lighten-1" href="./eventform.html"><Edit/></a>
                            <a href='/' class="btn-floating waves-effect waves-light red"
                                onClick='confirmDelete("Opening Ceremony","{{ event_id}}")'><Delete/></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </body>
     );
}
 
export default ProjectBody;