import {useEffect, useState} from "react";
import {login} from "../../../action/userActions";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../../component/Loader";
import {Message} from "../../../component/Message";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

        const history = useNavigate()

    const dispatch = useDispatch()


    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history('/account')
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    return <>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <form onSubmit={submitHandler} className="form auth__form">

        <div className="form__field">
            <label htmlFor="formInput#text">Username: </label>
            <input className="input input--text" id="formInput#text"  type='text'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="Enter your username..."/>
        </div>
        <div className="form__field">
            <label htmlFor="formInput#password">Password: </label>
            <input className="input input--password" id="formInput#passowrd" type='password'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   placeholder="••••••••"/>
        </div>
        <div className="auth__actions">
            <input className="btn btn--sub btn--lg" type="submit" value="Log In"/>
            <p>Do not have an Account?</p>
            <Link to="/register">register</Link>
        </div>
    </form>
        </>
}