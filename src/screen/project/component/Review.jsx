import {Link} from "react-router-dom";

export function Review({review}){
   return <div className="comment">
        <Link to={`/developer/${review.userDetails.id}`}>
            <img className="avatar avatar--md" src={review.userDetails.photo} alt="user"/>
        </Link>
        <div className="comment__details">
            <Link to={`/developer/${review.userDetails.id}`}
                  className="comment__author">{review.userDetails.username}</Link>
            <p className="comment__info">{review.body}</p>
        </div>
    </div>
}