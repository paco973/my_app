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


const paco = [{
    id: 1,
    name: 'Shahriar P. Shuvo',
    title: 'FullStack Web Designer & Developer',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, ducimus inventore! Sunt, veniam veritatis? Veritatis placeat, deleniti iure tempore veniam perspiciatis, soluta cupiditate animi, exercitationem molestias nam doloremque architecto odit.',
    tag: ['JavaScript', 'React', 'Scss', 'Nodejs', 'Express', 'GrapQl']
}, {
    id: 2,
    name: 'paco',
    title: 'FullStack Web Designer & Developer',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, ducimus inventore! Sunt, veniam veritatis? Veritatis placeat, deleniti iure tempore veniam perspiciatis, soluta cupiditate animi, exercitationem molestias nam doloremque architecto odit.',
    tag: ['JavaScript', 'React', 'Scss', 'Nodejs', 'Express', 'GrapQl']
}, {
    id: 3,
    name: 'djo',
    title: 'FullStack Web Designer & Developer',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, ducimus inventore! Sunt, veniam veritatis? Veritatis placeat, deleniti iure tempore veniam perspiciatis, soluta cupiditate animi, exercitationem molestias nam doloremque architecto odit.',
    tag: ['JavaScript', 'React', 'Scss', 'Nodejs', 'Express', 'GrapQl']
}, {
    id: 4,
    name: 'Nestor',
    title: 'FullStack Web Designer & Developer',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, ducimus inventore! Sunt, veniam veritatis? Veritatis placeat, deleniti iure tempore veniam perspiciatis, soluta cupiditate animi, exercitationem molestias nam doloremque architecto odit.',
    tag: ['JavaScript', 'React', 'Scss', 'Nodejs', 'Express', 'GrapQl']
}]

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

                    {paco.filter(profile => {
                        return profile.name.toLowerCase().includes(this.state.filtre.toLowerCase());
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
