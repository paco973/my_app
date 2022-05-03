const bold = {'font-weight': 'bold'}

export function Project(){
    return <div className="column">
                                    <div className="card project">
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className="project">
                                            <img className="project__thumbnail" src=""
                                                 alt="project thumbnail"/>
                                            <div className="card__body">
                                                <h3 className="project__title">DevSearch UI Design</h3>
                                                <p><a className="project__author" href="">By Shahriar P.
                                                    Shuvo</a></p>
                                                <p className="project--rating">
                                                    {/* eslint-disable-next-line react/style-prop-object */}
                                                    <span style={bold}>92%</span> Postitive
                                                    Feedback (62 Votes)
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
                                        </a>
                                    </div>
                                </div>
}
