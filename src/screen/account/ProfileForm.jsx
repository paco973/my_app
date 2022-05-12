import {useEffect, useState} from "react";
import {getUserCurrent, updateUserProfile} from "../../action/userActions";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../component/Loader";
import {useNavigate} from "react-router-dom";
import {USER_UPDATE_PROFILE_RESET} from "../../constant/userConstant";
import {deleteSkillUser} from "../../action/skillActions";
import {Message} from "../../component/Message";



export function ProfileForm(){
    const dispatch = useDispatch()
    const history = useNavigate()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    let {user} = userInfo



    const [location, setLocation] = useState(user ?  user.location ? user.location :'':'')
    const [bio, setBio] = useState(user ? user.bio ? user.bio : '':'')
    const [photo, setPhoto] = useState(user ? user.photo? user.photo:'' :'')
    const [description, setDescription] = useState(user ? user.description? user.description:'' :'')


    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success, error } = userUpdateProfile



    useEffect(() => {
        if (!userInfo) {
            history('/login')
        } else {
            if (!user || !user.username || success || userInfo.user.id !== user.id) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserCurrent())
            }
        }
    }, [dispatch, history, userInfo, user, success, error])


    const submitHandler = (e) => {
        e.preventDefault()
        if (user) {
            user.location = location
            user.photo = photo
            user.bio = bio
user.description = description
            dispatch(updateUserProfile(user))
        }
    }


    return<main className="formPage my-xl">
        {success && <Message  variant='succes'>profile updated</Message>}
        {success && <Message  variant='succes'>{error}</Message>}
        {  location !== null ?  <div className="content-box">
            <div className="formWrapper">
                <a className="backButton" href="www.pacodjo.fr"><i className="im im-angle-left"></i></a>
                <br/>

                <form className="form" onSubmit={submitHandler} method="POST"
                      encType="multipart/form-data">

                    <div className="form__field">
                        <label htmlFor="formInput#text">Location</label>
                        <input required value={location}     onChange={(e) => setLocation(e.target.value)} className="input input--text" type="text"/>
                    </div>

                    <div className="form__field">
                        <label htmlFor="formInput#text">Description</label>
                        <input required value={description}     onChange={(e) => setDescription(e.target.value)} className="input input--text" type="text"/>
                    </div>


                    <div className="form__field">
                        <label htmlFor="formInput#text">Photo</label>
                        <input required value={photo}     onChange={(e) => setPhoto(e.target.value)} className="input input--text" type="text"/>
                    </div>

                    <div className="form__field">
                        <label htmlFor="formInput#text">Bio</label>
                        <textarea required value={bio}  rows={10}   onChange={(e) => setBio(e.target.value)} className="input input--text" type="text"/>
                    </div>


                    <button className="btn btn--sub btn--lg  my-md" >Submit</button>
                </form>
            </div>
        </div>: <Loader/>}

        </main>
}