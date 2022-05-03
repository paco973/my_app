import {Component} from "react";

export class Auth extends Component{

    render() {
        return <div className="auth">
            <div className="card">
                <div className="auth__header text-center">
                    <a href="/">
                        <img src="images/icon.svg" alt="icon"/>
                    </a>
                    <h3>Account SignUp</h3>
                    <p>Create a new developer account</p>
                </div>

                <form action="#" className="form auth__form">

                    <div className="form__field">
                        <label htmlFor="formInput#text">Full Name: </label>
                        <input className="input input--text" id="formInput#text" type="text" name="text"
                               placeholder="e.g. Dennis Ivanov"/>
                    </div>

                    <div className="form__field">
                        <label htmlFor="formInput#email">Email Address: </label>
                        <input className="input input--email" id="formInput#email" type="email" name="email"
                               placeholder="e.g. user@domain.com"/>
                    </div>


                    <div className="form__field">
                        <label htmlFor="formInput#password">Password: </label>
                        <input className="input input--password" id="formInput#passowrd" type="password" name="password"
                               placeholder="••••••••"/>
                    </div>

                    <div className="form__field">
                        <label htmlFor="formInput#confirm-password">Confirm Password: </label>
                        <input className="input input--password" id="formInput#confirm-passowrd" type="password"
                               name="confirm-password"
                               placeholder="••••••••"/>
                    </div>
                    <div className="auth__actions">
                        <input className="btn btn--sub btn--lg" type="submit" value="Sign  In"/>
                    </div>
                </form>
                <div className="auth__alternative">
                    <p>Already have an Account?</p>
                    <a href="login.html">Log In</a>
                </div>
            </div>
        </div>
    }
}