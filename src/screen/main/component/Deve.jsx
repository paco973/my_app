export  function Dev({profile}) {
    return <div className="column card">
        <div className="dev">
            <a href="#" className="card__body">
                <div className="dev__profile">
                    <img className="avatar avatar--md"
                         src="https://avatars.githubusercontent.com/u/22437186" alt="image"/>
                    <div className="dev__meta">
                        <h3>{profile.name}</h3>
                        <h5>{profile.title}</h5>
                    </div>
                </div>
                <p className="dev__info">
                    {profile.description}
                </p>
                <div className="dev__skills">
                    {profile.tag.map((e, index) => (
                        <span key={index} className="tag tag--pill tag--main">
                    <small>{e}</small>
                  </span>))}
                </div>
            </a>
        </div>
    </div>


}
