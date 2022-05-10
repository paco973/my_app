import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {SkillsList} from "./component/SkillsList";
import {Skill} from "./component/Skill";
import {MyProjectList} from "./component/MyProjectList";
import {Myproject} from "./component/Myproject";
import Loader from "../../component/Loader";
import {getUserCurrent} from "../../action/userActions";
import {deleteSkillUser} from "../../action/skillActions";





export function Account() {


    const history = useNavigate()

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const {usercurrent} = useSelector(state => state.userCurent)


    useEffect(() => {
        if (!userInfo) {
            history('/login')
        }else if(usercurrent && !usercurrent.id){
                dispatch(getUserCurrent())
        }
    }, [dispatch, history, userInfo, usercurrent])




    return <main className="settingsPage profile my-md">


        {usercurrent && usercurrent.id ? <div className="container">
            <div className="layout">
                <div className="column column--1of3">
                    <div className="card text-center">
                        <div className="card__body dev">
                            <Link className="tag tag--pill tag--main settings__btn" to={'/account/editProfile'}><i
                                className="im im-edit"></i>
                                Edit</Link>
                            <img className="avatar avatar--xl dev__avatar" src={usercurrent.photo} alt={usercurrent.username}/>
                            <h2 className="dev__name">{usercurrent.username}</h2>
                            <p className="dev__title">{usercurrent.description}</p>
                            <p className="dev__location">Based in {usercurrent.location}</p>
                        </div>
                    </div>
                </div>
                <div className="column column--2of3">
                    <div className="devInfo">
                        <h3 className="devInfo__title">About Me</h3>
                        <p className="devInfo__about">
                            {usercurrent.bio}
                        </p>
                    </div>
                    <div className="settings">
                        <h3 className="settings__title">Skills</h3>
                        <Link className="tag tag--pill tag--sub settings__btn tag--lg"   to={"/account/addSkill"}><i
                            className="im im-plus"></i> Add Skill</Link>
                    </div>


                    <SkillsList>
                        {usercurrent.skills.map((skill, index) => <Skill key={index}  skill={skill}/>)}
                    </SkillsList>

                    <div className="settings">
                        <h3 className="settings__title">Projects</h3>
                        <Link className="tag tag--pill tag--sub settings__btn tag--lg"
                          to={"/account/addSkill"}>
                            <i className="im im-plus"></i> Add Project</Link>
                    </div>

                    <MyProjectList>
                        {usercurrent.projects.map(project => {

                            return <Myproject key={project.id} project={project}/>
                        })}
                    </MyProjectList>
                </div>
            </div>
        </div>: <Loader/>}
    </main>

}