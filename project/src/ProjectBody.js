import ReactDOM from 'react-dom';
import React from 'react';
import './styles/main.css';
import './styles/index.css';
import ProjectInfoNew from './ProjectInfoNew';
import { Container } from './Container';
import 'materialize-css/dist/css/materialize.min.css';
import Sort from '@material-ui/icons/Sort';
import FilterList from '@material-ui/icons/FilterList';
import Delete from '@material-ui/icons/Delete';
import StarBorder from '@material-ui/icons/StarBorder';
import Edit from '@material-ui/icons/Edit';
import { Component } from 'react';
let projectList = [];

class ProjectBody extends Component {
    render(){ 
        const addProject = (event) => {
            event.preventDefault(event);
            // TODO: Add dateAdded as new Date() rather than just plain text. Alternatively, could just check what they are entering matches a specific criteria (XX-XX-XXXX)
            projectList.push({projectName:event.target.projectName.value, teamName:event.target.teamName.value, dateAdded:event.target.dateAdded.value, type:event.target.type.value,moreInfo:event.target.moreInfo.value});
            this.forceUpdate();
        }

        function newProjectInfo(name, team, info){
            ReactDOM.render(
            <ProjectInfoNew name={name} team={team} info={info}/>,
            document.getElementById('root')
            );
        }

        return ( 

            <body>
            <div class="container">
                <h1>Projects</h1>

                <blockquote>
                    Click on the "???" for more details!
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
                        <th></th>
                        <th>Project Name</th>
                        <th>Team Name</th>
                        <th>Date Proposed</th>
                        <th>Type</th>
                        <th>More Info</th>
                    </thead>

                    <tbody>
                        {projectList.map((project =>
                        <tr>
                            <td>
                                <a href='/' onClick='toggleInterest(this, "{{ event_id }}")'
                                    class="btn-floating btn-small waves-effect waves-light scale-transition scale-in blue"><StarBorder/></a>
                            </td>
                            <td>{project.projectName}</td>
                            <td>{project.teamName}</td>
                            <td>{project.dateAdded}</td>
                            <td>{project.type}</td>
                            <td>{<button class="info" onClick={() => {newProjectInfo(project.projectName, project.teamName, project.moreInfo)}}>???</button>}</td>
                            <td nowrap>
                                <a class="btn-floating btn-small waves-effect waves-light green lighten-1" href="/eventform.html"><Edit/></a>
                                <a href='/' class="btn-floating waves-effect waves-light red"
                                    onClick='confirmDelete("Opening Ceremony","{{ event_id}}", ".")'>
                                        <Delete/></a>
                            </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
                <Container triggerText={"Add Project"} onSubmit={addProject}/>
            </div>
            </body>
        );
    }
}
 
export default ProjectBody;