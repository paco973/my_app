import {Component, useEffect} from "react";
import {SkillsList} from "./component/SkillsList";
import {Skill} from "./component/Skill";
import {MyProjectList} from "./component/MyProjectList";
import {Myproject} from "./component/Myproject";
import {useDispatch, useSelector} from "react-redux";
import {getUserDetails} from "../../action/userActions";
import Loader from "../../component/Loader";
import {Message} from "../../component/Message";



export function Account({history}) {

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            dispatch(getUserDetails())
        }
    }, [dispatch, history, userInfo, user])

    return <main className="settingsPage profile my-md">

        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <div className="container">
            <div className="layout">
                <div className="column column--1of3">
                    <div className="card text-center">
                        <div className="card__body dev">
                            <a className="tag tag--pill tag--main settings__btn" href=""><i
                                className="im im-edit"></i>
                                Edit</a>
                            <img className="avatar avatar--xl dev__avatar" src="paco.png"/>
                            <h2 className="dev__name">{user.username}</h2>
                            <p className="dev__title">Expirance FullStack Developer, Youtuber and Instructor</p>
                            <p className="dev__location">Based in Lyon</p>
                        </div>
                    </div>
                </div>
                <div className="column column--2of3">
                    <div className="devInfo">
                        <h3 className="devInfo__title">About Me</h3>
                        <p className="devInfo__about">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illum ipsum iusto consequatur.
                            Totam, dolorum fugiat, debitis facere illo nostrum nesciunt maxime, deserunt enim
                            voluptatibus modi natus velit voluptatum. Dicta eritatis exercitationem ut quos a placeat
                            obcaecati? Architecto illum!
                            Amet consectetur adipisicing elit. Veritatis exercitationem ut quos a placeat obcaecati?
                            Architecto illum, atque delectus nemo dolorem inventore ab facilis? Dolor placeat vel
                            delectus ipsam ullam.


                        </p>
                    </div>
                    <div className="settings">
                        <h3 className="settings__title">Skills</h3>
                        <a className="tag tag--pill tag--sub settings__btn tag--lg" href=""><i
                            className="im im-plus"></i> Add Skill</a>
                    </div>


                    <SkillsList>
                        {[1].map((test, index) => <Skill key={index}/>)}
                    </SkillsList>

                    <div className="settings">
                        <h3 className="settings__title">Projects</h3>
                        <a className="tag tag--pill tag--sub settings__btn tag--lg"
                           href="www.pacodjo.fr"><i
                            className="im im-plus"></i> Add Project</a>
                    </div>

                    <MyProjectList><Myproject/></MyProjectList>
                </div>
            </div>
        </div>
    </main>

}