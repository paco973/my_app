import {Link} from "react-router-dom";

const bold = {'fontWeight': 'bold'}

export function Project({project}){
    return <div className="column">
                                    <div className="card project">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <Link to={`/project/${project.id}`} className="project">
                                            <img className="project__thumbnail" src={project.image}
                                                 alt="project thumbnail"/>
                                            <div className="card__body">
                                                <h3 className="project__title">{project.title}</h3>
                                                <p><Link className="project__author" to={`/project/${project.id}`}>By  {project.userDetails.username}</Link></p>
                                                <p className="project--rating">
                                                    {/* eslint-disable-next-line react/style-prop-object */}
                                                    <span style={bold}>{project.vote_ration}%</span> Postitive
                                                    Feedback ({project.vote_total} Votes)
                                                </p>
                                                <div className="project__tags">
                        <span className="tag tag--pill tag--main">
                          <small>NextJS</small>
                        </span>
                                                    <span className="tag tag--pill tag--main">
                          <small>GraphQL</small>
                        </span>
                                                    <span className="tag tag--pill tag--main">
                          <small>TypeScript</small>
                        </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
}
