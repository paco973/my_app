export function Me({user}){
    return <div className="column column--1of3">
                        <div className="card text-center">
                            <div className="card__body dev">
                                <img className="avatar avatar--xl"
                                     src={user.image}/>
                                <h2 className="dev__name">{user.username}</h2>
                                <p className="dev__title">{user.title}</p>
                                <p className="dev__location">Based in {user.location}</p>
                                <ul className="dev__social">
                                    <li>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a title="Github" href="#" target="_blank"><i className="im im-github"/></a>
                                    </li>
                                    <li>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a title="Stackoverflow" href="#" target="_blank"><i
                                            className="im im-stackoverflow"/></a>
                                    </li>
                                    <li>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a title="Twitter" href="#" target="_blank"><i
                                            className="im im-twitter"/></a>
                                    </li>
                                    <li>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a title="LinkedIn" href="#" target="_blank"><i className="im im-linkedin"/></a>
                                    </li>
                                    <li>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a title="Personal Website" href="#" target="_blank"><i
                                            className="im im-globe"/></a>
                                    </li>
                                </ul>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}

                            </div>
                        </div>
                    </div>
}
