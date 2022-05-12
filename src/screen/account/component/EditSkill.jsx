import {useState} from "react";
import { updateSkill} from "../../../action/skillActions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserCurrent} from "../../../action/userActions";
import {Message} from "../../../component/Message";
import Loader from "../../../component/Loader";
import {useNavigate} from "react-router-dom";

export function EditSkill({skill}) {
    const [name, setName] = useState(skill ? skill.name : '')
    const [description, setDescription] = useState(skill ? skill.description : '')
    const dispatch = useDispatch()
    const skillUpdate = useSelector(state => state.skillUpdate)
    const {error, loading, success} = skillUpdate
    const history = useNavigate()
    useEffect(() => {

        if (success) {
            dispatch(getUserCurrent())
            history('/account')
        }


    }, [dispatch, error, history, loading, success])
    const submitHandler = (e) => {
        e.preventDefault()
        if (skill.id) {
            skill.name = name
            skill.description = description
            dispatch(updateSkill(skill))
        }

    }
    return <form className="form" method="POST" onSubmit={submitHandler}>
        {success && <Message variant='danger'>{skill.name} created</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <div className="form__field">
            <label htmlFor="formInput#text">Name</label>
            <input required value={name} onChange={(e) => setName(e.target.value)}
                   className="input input--text" type="text"/>
        </div>

        <div className="form__field">
            <label htmlFor="formInput#text">Descrition</label>
            <input required value={description} onChange={(e) => setDescription(e.target.value)}
                   className="input input--text" type="text"/>
        </div>


        <button className="btn btn--sub btn--lg  my-md">Submit</button>
    </form>
}