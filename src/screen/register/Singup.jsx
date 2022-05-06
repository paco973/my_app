import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Message} from "../../component/Message";
import Loader from "../../component/Loader";
import {register} from '../../action/userActions'
import {Link} from "react-router-dom";

export function Singup({location, history}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    // const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const {error, loading, userInfo} = userRegister

    // useEffect(() => {
    //     if (userInfo) {
    //         history.push(redirect)
    //     }
    // }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }

    }

    return <div className="auth">
        <div className="card">
            <div className="auth__header text-center">
                <a href="/Users/pacodjo/Documents/react/react/my-app/public">

                    <img src="images/icon.svg" alt="icon"/>

                </a>

                <h3>Account SignUp</h3>

                <p>Create a new developer account</p>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader/>}

            </div>
            <form onSubmit={submitHandler} className="form auth__form">


                <div className="form__field">

                    <label htmlFor="formInput#text">Full Name: </label>

                    <input className="input input--text" id="formInput#text" name="text"
                           required
                           type='text'
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           placeholder="e.g. Paco DJO"/>

                </div>


                <div className="form__field">

                    <label htmlFor="formInput#email">Email Address: </label>

                    <input className="input input--email" id="formInput#email" required
                           type='email'
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="e.g. user@domain.com"/>

                </div>


                <div className="form__field">

                    <label htmlFor="formInput#password">Password: </label>

                    <input className="input input--password" id="formInput#passowrd" type="password" type='password'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder="••••••••"/>

                </div>


                <div className="form__field">

                    <label htmlFor="formInput#confirm-password">Confirm Password: </label>

                    <input className="input input--password" id="formInput#confirm-passowrd"
                           required
                           type='password'
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                           placeholder="••••••••"/>
                </div>

                <div className="auth__actions">
                    <input className="btn btn--sub btn--lg" type="submit" value="Sign  In"/>
                </div>
            </form>

            <div className="auth__alternative">
                <p>Already have an Account?</p>
                <Link to="/login">Log In</Link>
            </div>
        </div>
    </div>


}