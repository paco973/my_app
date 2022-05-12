import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../action/userActions";


export function Nav() {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const handleClick = () => {
        dispatch(logout())
    }

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
                    {userInfo &&
                        <li className="header__menuItem">
                            <Link to="/account">Account</Link>
                        </li>
                    }
                    {userInfo &&
                        <li onClick={()=> handleClick()} className="header__menuItem">
                            <div  className="btn btn--sub">Logout</div>
                        </li>
                    }
                    {!userInfo ?
                        <li className="header__menuItem">
                            <Link to="/login" className="btn btn--sub">Login/Sign Up</Link>
                        </li> :
                        <li>{userInfo.user.username}<br/>{userInfo.user.role ==='ROLE_ADMIN' ? 'ADMIN': ''}</li>
                    }
                </ul>
            </nav>
            {/*<Outlet/>*/}
        </div>
    </header>
}
