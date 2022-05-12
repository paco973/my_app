import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createPojectReview, projectDetails} from "../../../action/projectActions";
import {Message} from "../../../component/Message";
import Loader from "../../../component/Loader";


export function AddReview({id}) {

    const dispatch = useDispatch()
    const [comment, setComment] = useState('')

    const projectReview = useSelector(state => state.projectReviewCreate)
    const {success, error, loading} = projectReview
    useEffect(() => {

        if (success) {
            dispatch(projectDetails(id))
        }
    }, [dispatch, error, id, loading, success])


    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(createPojectReview(id, comment))
    }
    return <form className="form" onSubmit={ handlerSubmit} method="POST">
        {error && <Message>{error}</Message>}
        {loading && <Loader/>}
        <div className="form__field">
            <label htmlFor="formInput#textarea">Comment</label>
            <div className="form__field">
                <label htmlFor="formInput#text"></label>
                <textarea rows={10} required value={comment} onChange={(e) => setComment(e.target.value)}
                          className="input input--text"/>
            </div>
        </div>

        <input className="btn btn--sub btn--lg" type="submit" value="Add Review"/>
    </form>
}