import {Component} from "react";
import {Me} from "../developper/component/Me";
import {About} from "../developper/component/About";
import {Skill} from "../developper/component/Skill";
import {ProjectList} from "../developper/component/PorjectList";
import {Project} from "../developper/component/Project";
import {Nav} from "./component/Nav";
import {DevList} from "./component/DevList";
import {Dev} from "./component/Deve";
import {Search} from "./component/Search";
import {USER} from "../../user";


export class Main extends Component {


    constructor(props) {
        super(props);

        this.state = {filtre: ''}
        this.handleSeardev = this.handleSeardev.bind(this)
    }

    handleSeardev(e) {
        this.setState({filtre: e.target.value})
    }

    render() {
        return <div>
            <main className="home">
                <Search filtre={this.state.filtre} handleSeardev={this.handleSeardev}/>
                <DevList>

                    {USER.filter(user => {
                        return user.username.toLowerCase().includes(this.state.filtre.toLowerCase());
                    }).map((pro) => {
                            return <Dev key={pro.id} profile={pro}/>
                        }
                    )
                    }
                </DevList>
            </main>
        </div>

    }
}
