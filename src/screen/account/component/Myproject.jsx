import {useDispatch} from "react-redux";
import {deleteSkillUser} from "../../../action/skillActions";
import {getUserCurrent} from "../../../action/userActions";
import {deleteProject} from "../../../action/projectActions";
import {Link} from "react-router-dom";

export function Myproject({project})
{

    const dispatch = useDispatch()

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this skill?')) {
            dispatch(deleteProject(id))

            dispatch(getUserCurrent())
        }
    }
    return <tr>
        <td className="settings__thumbnail">
            <Link to={`/project/${project.id}`}><img src={project.image}
                            alt={project.title}/></Link>
        </td>
        <td className="settings__tableInfo">
            <Link to={`/project/${project.id}`} >
                {project.title}
            </Link>
            <p>
                {project.description}
            </p>
        </td>
        <td className="settings__tableActions">
            <Link className="tag tag--pill tag--main settings__btn"
                  to={`/account/editProject/${project.id}`}><i
                className="im im-edit"></i> Edit</Link>
            <button className="tag tag--pill tag--main settings__btn"
             onClick={() => deleteHandler(project.id)}><i
                className="im im-x-mark-circle-o"></i>
                Delete</button>
        </td>
    </tr>
}