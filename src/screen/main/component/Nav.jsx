import {Link} from "react-router-dom";


export function Nav() {

    return <header className="header">
        <div className="container container--narrow">
            <Link to={'/'} className="header__logo">
                <img src="" alt="DevSearch Logo"/>
            </Link>
            <nav className="header__nav">
                <input type="checkbox" id="responsive-menu"/>
                <label htmlFor="responsive-menu" className="toggle-menu">
                    <span>Menu</span>
                    <div className="toggle-menu__lines"/>
                </label>
                <ul className="header__menu">
                    <li className="header__menuItem">
                        <Link to="/">Developers</Link>
                    </li>
                    <li className="header__menuItem">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="header__menuItem">
                        <Link to="/account">Account</Link>
                    </li>
                    <li className="header__menuItem">
                        <Link to="/paco" className="btn btn--sub">Logout</Link>
                    </li>
                    <li className="header__menuItem">
                        <Link to="/login" className="btn btn--sub">Login/Sign Up</Link>
                    </li>
                </ul>
            </nav>
            {/*<Outlet/>*/}
        </div>
    </header>
}
