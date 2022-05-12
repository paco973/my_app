import {Link} from "react-router-dom";
import {truncateString} from "../../../constant/functionConstant";



export  function Dev({profile}) {

    return (<div className="column card">
        <div className="dev">
            <Link  className="card__body" to={`/developer/${profile.id}`} >
                <div className="dev__profile">
                    <img className="avatar avatar--md"
                         src={profile.photo} alt={profile.username}/>
                    <div className="dev__meta">
                        <h3>{profile.username}</h3>
                        <h5>{profile.description}</h5>
                    </div>
                </div>
                <p className="dev__info">
                    {truncateString(profile.bio , 79)}
                </p>
                <div className="dev__skills">
                    { profile.skills.map(skill => (
                        <span key={skill.id} className="tag tag--pill tag--main">
                    <small>{
                        skill.name
                    }</small>
                  </span>)) }
                </div>
            </Link>
        </div>
    </div>)
}
