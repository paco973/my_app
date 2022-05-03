import {Component} from "react";
import {Nav} from "../main/component/Nav";
import {Me} from "./component/Me";
import {About} from "./component/About";
import {Skill} from "./component/Skill";
import {ProjectList} from "./component/PorjectList";
import {Project} from "./component/Project";


export class Developper extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
     
            <main className="profile my-md">
                <div className="container">
                    <div className="layout">
                        <Me/>
                        <div className="column column--2of3">
                            <About/>
                            <Skill/>
                            <ProjectList><Project/></ProjectList>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    }
}
