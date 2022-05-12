import {Link, useParams} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {EditProject} from "./component/EditProject";
import Loader from "../../component/Loader";
import {projectDetails} from "../../action/projectActions";



export function EditProjectForm() {
    const dispatch = useDispatch()
    const {id} = useParams()

    const projectDetail = useSelector(state => state.projectDetails)
    let {project} = projectDetail

    useEffect(() => {

        if (!project) {
            dispatch(projectDetails(id))
        }

    }, [dispatch, project, id])


    return <main className="formPage my-xl">
      <div className="content-box">
            <div className="formWrapper">
                <Link className="backButton" to={"/account"}><i className="im im-angle-left">Retour</i></Link>
                <br/>

                {project? <EditProject project={project}/> : <Loader/>}
            </div>
        </div>

    </main>
}