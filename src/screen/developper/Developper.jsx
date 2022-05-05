import {Component} from "react";

import {Me} from "./component/Me";
import {About} from "./component/About";
import {Skill} from "./component/Skill";
import {ProjectList} from "./component/PorjectList";
import {Project} from "./component/Project";
import {USER} from "../../user";
import {useParams} from "react-router-dom";






export function Developer()  {
         let { id } = useParams()


    let user = USER.filter(profile => profile.id == id)[0]

        return <main className="profile my-md">
                <div className="container">
                    <div className="layout">
                        <Me user={user}/>
                        <div className="column column--2of3">
                            <About>{user.bio}</About>
                            <Skill/>
                            <ProjectList>
                            {user.projects.map(project => <Project key={project.id} project={project}/> )}
                            </ProjectList>
                        </div>
                    </div>
                </div>
            </main>

    }

