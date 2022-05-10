import {Link} from "react-router-dom";
import {deleteSkillUser} from "../../../action/skillActions";
import {useDispatch} from "react-redux";
import {getUserCurrent} from "../../../action/userActions";


export function Skill({skill}) {
    const dispatch = useDispatch()

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this skill?')) {
            dispatch(deleteSkillUser(id))

            dispatch(getUserCurrent())
        }
    }



    return <tr>
        <td className="settings__tableInfo">
            <h4>{skill.name}</h4>
            <p>
                {skill.description}
            </p>
        </td>
        <td className="settings__tableActions">
            <Link className="tag tag--pill tag--main settings__btn"
              to={'/paco:'}><i
                className="im im-edit"></i> Edit</Link>
            <button className="tag tag--pill tag--main settings__btn" onClick={() => deleteHandler(skill.id)}
            ><i
                className="im im-x-mark-circle-o"></i>
                Delete
            </button>
        </td>
    </tr>
}