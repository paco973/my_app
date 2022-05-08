import {Me} from "./component/Me";
import {About} from "./component/About";
import {Skill} from "./component/Skill";
import {ProjectList} from "./component/PorjectList";

import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserDetail} from "../../action/userActions";
import {Message} from "../../component/Message";
import Loader from "../../component/Loader";
import {useEffect} from "react";



export function Developer() {
    const {id} = useParams()

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails

    useEffect(() => {
            if (user.id.toString() !== id)
            {

                dispatch(getUserDetail(id))
            }

    }, [dispatch, id, user])




    console.log(user)
    return <main className="profile my-md">
        { error && <Message variant='danger'>{error}</Message>}
        {loading ? <Loader/> : user.username ?<div className="container">  <div className="layout">
            <Me user={user}/>
            <div className="column column--2of3">
                <About>{user ? user.bio : ''}</About>
                <Skill skills={user.skills}/>
                <ProjectList>
                    {/*{user.projects.map(project => <Project key={project.id} project={project}/>)}*/}
                </ProjectList>
            </div>
        </div>
        </div>:<Message variant='danger'>error  </Message>
           }

    </main>

}

