export function Login(){
    return <form action="src/screen/auth/component/Login#" className="form auth__form">

        <div className="form__field">
            <label htmlFor="formInput#text">Username: </label>
            <input className="input input--text" id="formInput#text" type="text" name="username"
                   placeholder="Enter your username..."/>
        </div>
        <div className="form__field">
            <label htmlFor="formInput#password">Password: </label>
            <input className="input input--password" id="formInput#passowrd" type="password" name="password"
                   placeholder="••••••••"/>
        </div>
        <div className="auth__actions">
            <input className="btn btn--sub btn--lg" type="submit" value="Log In"/>
            <a href="forgetpassword.html">Forget Password?</a>
        </div>
    </form>
}