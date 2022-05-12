import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Message} from "../../component/Message";
import Loader from "../../component/Loader";
import {getUserCurrent} from "../../action/userActions";
import {createProject} from "../../action/projectActions";


export function ProjectForm() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [iamege, setImage] = useState('')
    const [demoLink, setDemoLink] = useState('')
    const [sourceLink, setSourceLink] = useState('')


    const skillCreate = useSelector(state => state.projectCreate)
    const {error, loading, success, project} = skillCreate

    const history = useNavigate()
    useEffect(() => {

        if (success) {
            dispatch(getUserCurrent())
            history('/account')
        }
    }, [dispatch, error, history, loading, project, success])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProject(name, description, demoLink, sourceLink, iamege))
    }
    return <main className="formPage my-xl">
        {success && <Message variant='danger'>{project.name} created</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading ? <Loader/> : <div className="content-box">
            <div className="formWrapper">
                <Link className="backButton" to={"/account"}><i className="im im-angle-left">Reour</i></Link>
                <br/>

                <form className="form" method="POST" onSubmit={submitHandler}>

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
                        <textarea rows={10} required value={description}
                                  onChange={(e) => setDescription(e.target.value)}
                                  className="input input--text" type="text"/>
                    </div>


                    <button className="btn btn--sub btn--lg  my-md">Submit</button>
                </form>
            </div>
        </div>}

    </main>
}