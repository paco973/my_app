import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Message} from "../../../component/Message";
import Loader from "../../../component/Loader";
import { updateProject} from "../../../action/projectActions";
import {getUserCurrent} from "../../../action/userActions";
import {useNavigate} from "react-router-dom";


export function EditProject({project}) {
    const [name, setName] = useState(project ? project.title : '')
    const [description, setDescription] = useState(project ? project.description : '')
    const [iamege, setImage] = useState(project ? project.image : '')
    const [demoLink, setDemoLink] = useState(project ? project.demo_link : '')
    const [sourceLink, setSourceLink] = useState(project ? project.source_link :'')
    const dispatch = useDispatch()

    const projectUpdate = useSelector(state => state.projectUpdate)
    const {error, loading, success} = projectUpdate
    const history = useNavigate()
    useEffect(() => {
        if (success) {
            dispatch(getUserCurrent())
            history('/account')
        }

    }, [dispatch, error, history, loading, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if (project.id) {
            project.title = name
            project.description = description
            project.demo_link = demoLink
            project.source_link = sourceLink
            project.image = iamege
            dispatch(updateProject(project))
        }

    }
    return  <form className="form" method="POST" onSubmit={submitHandler}>
        {success && <Message variant='danger'>{project.title} created</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <div className="form__field">
            <label htmlFor="formInput#text">Name</label>
            <input required value={name} onChange={(e) => setName(e.target.value)}
                   className="input input--text" type="text"/>
        </div>
        <div className="form__field">
            <label htmlFor="formInput#text">Image Link</label>
            <input required value={iamege} onChange={(e) => setImage(e.target.value)}
                   className="input input--text" type="text"/>
        </div>
        <div className="form__field">
            <label htmlFor="formInput#text">Demo Link</label>
            <input required value={demoLink} onChange={(e) => setDemoLink(e.target.value)}
                   className="input input--text" type="text"/>
        </div>
        <div className="form__field">
            <label htmlFor="formInput#text">Source Link</label>
            <input required value={sourceLink} onChange={(e) => setSourceLink(e.target.value)}
                   className="input input--text" type="text"/>
        </div>

        <div className="form__field">
            <label htmlFor="formInput#text">Descrition</label>
            <textarea rows={10} required value={description} onChange={(e) => setDescription(e.target.value)}
                      className="input input--text" type="text"/>
        </div>


        <button className="btn btn--sub btn--lg  my-md">Submit</button>
    </form>
}

