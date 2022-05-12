import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Message} from "../../component/Message";
import Loader from "../../component/Loader";
import {AddReview} from "./component/addReview";
import {Review} from "./component/Review";
import {projectDetails} from "../../action/projectActions";

export function SingleProject() {
    const dispatch = useDispatch()
    const {id} = useParams()



    const userDetails = useSelector(state => state.projectDetails)
    const {error,success, loading, project} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (!project || id != project.id) {
            dispatch(projectDetails(id))
        }

    }, [dispatch, id, project, success])


    return <main className="singleProject my-md">
        { error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        {project && success? <div className="container">
            <div className="layout">
                <div className="column column--1of3">
                    <h3 className="singleProject__subtitle">{project.title}</h3>
                    <div className="singleProject__toolStack">

                        {project.tags.map(tag => {
                            return <span key={tag.id} className="tag tag--pill tag--sub tag--lg">
                        <small>tag</small>
                    </span>
                        })}
                    </div>

                    <a className="singleProject__liveLink" href={project.source_link} target="_blank" rel="noreferrer"><i
                        className="im im-external-link"></i>Source
                        Code
                    </a>

                    <a className="singleProject__liveLink" href={project.demo_link} target="_blank" rel="noreferrer"><i
                        className="im im-external-link"></i>Live Demo</a>
                </div>
                <div className="column column--2of3">
                    <img className="singleProject__preview" src={project.userDetails.photo} alt="portfolio thumbnail"/>
                    <Link to={`/developer/${project.userDetails.id}`}
                          className="singleProject__developer"> {project.userDetails.username}</Link>
                    <h2 className="singleProject__title">{project.title}</h2>
                    <h3 className="singleProject__subtitle">About the Project</h3>
                    <div className="singleProject__info">
                        {project.description}
                    </div>
                    <div className="comments">
                        <h3 className="singleProject__subtitle">Feedback</h3>
                        <h5 className="project--rating">
                            Positive Feedback {project.vote_total} Vote(s)
                        </h5>
                        {userInfo && userInfo.user.id !== project.userDetails.id && !project.reviews.find(review => review.id === userInfo.user.id)? <AddReview id={project.id}/> : ''}
                        <div className="commentList">
                            {project.reviews.map(review => {
                                return <Review key={review.id} review={review}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>: ''}
    </main>
}