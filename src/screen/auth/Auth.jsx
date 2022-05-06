import {Component} from "react";
//import {Login} from "./component/Login";
// import {Singup} from "./component/Singup";
import {Login} from "./component/Login";

export class Auth extends Component{

    render() {
        //return <Singup/>
        return <div className="auth">
            <div className="card">
            <Login/>
            </div>
        </div>
    }
}