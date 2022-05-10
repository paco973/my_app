import {Link} from "react-router-dom";
import {useState} from "react";
import {createSkill} from "../../action/skillActions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Message} from "../../component/Message";
import Loader from "../../component/Loader";
import {getUserCurrent} from "../../action/userActions";


export function SkillForm() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')


    const skillCreate = useSelector(state => state.skillCreate)
    const {error, loading, success, skill} = skillCreate



    useEffect(() => {

if (success){
    dispatch(getUserCurrent())
}
    }, [dispatch, error, loading, skill, success,])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createSkill(name, description))
    }
    return <main className="formPage my-xl">
        {success && <Message variant='danger'>{skill.name} created</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading ? <Loader/> : <div className="content-box">
            <div className="formWrapper">
                <Link className="backButton" to={"account"}><i className="im im-angle-left"></i></Link>
                <br/>

                <form className="form" method="POST" onSubmit={submitHandler}>

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
            </div>
        </div>}

    </main>
}