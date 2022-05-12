import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import { getSkillDetails, updateSkill} from "../../action/skillActions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Message} from "../../component/Message";
import Loader from "../../component/Loader";
import {getUserCurrent} from "../../action/userActions";
import {EditSkill} from "./component/EditSkill";



export function EditSkillForm() {
    const dispatch = useDispatch()
    const skillDetails = useSelector(state => state.skillDetails)
    let {skill} = skillDetails
    const {id} = useParams()


    useEffect(() => {
        if (!skill){
            dispatch(getSkillDetails(id))
        }
    }, [dispatch, id, skill])


    return <main className="formPage my-xl">

        <div className="content-box">
            <div className="formWrapper">
                <Link className="backButton" to={"/account"}><i className="im im-angle-left">Retour</i></Link>
                <br/>
                {skill ? <EditSkill skill={skill} />: <Loader/>}
            </div>
        </div>

    </main>
}