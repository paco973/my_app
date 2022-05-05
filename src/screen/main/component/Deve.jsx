import {Link} from "react-router-dom";

export  function Dev({profile}) {
    return <div className="column card">
        <div className="dev">
            <Link  className="card__body" to={`/developer/${profile.id}`} >
                <div className="dev__profile">
                    <img className="avatar avatar--md"
                         src="https://avatars.githubusercontent.com/u/22437186" alt="image"/>
                    <div className="dev__meta">
                        <h3>{profile.username}</h3>
                        <h5>{profile.title}</h5>
                    </div>
                </div>
                <p className="dev__info">
                    {profile.bio}
                </p>
                <div className="dev__skills">
                    {profile.tags.map((tag, index) => (
                        <span key={tag.id} className="tag tag--pill tag--main">
                    <small>{
                        tag.name
                    }</small>
                  </span>))}
                </div>
            </Link>
        </div>
    </div>


}
