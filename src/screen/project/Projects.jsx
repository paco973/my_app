import {Link} from "react-router-dom";

export function Projects() {
    const bold = {fontWeight: 'bold'
}
    return <main className="projects">
        <section className="hero-section text-center">
            <div className="container container--narrow">
                <div className="hero-section__box">
                    <h2>Search for <span>Projects</span></h2>
                </div>

                <div className="hero-section__search">
                    <form id='searchForm' className="form" action="" method="get">
                        <div className="form__field">
                            <label htmlFor="formInput#search">Search By Projects </label>
                            <input className="input input--text" id="formInput#search" type="text" name="search_query"
                                   placeholder="Search by Project Title"/>
                        </div>
                        <input className="btn btn--sub btn--lg" type="submit" value="Search"/>
                    </form>
                </div>
            </div>
        </section>

        <section className="projectsList">
            <div className="container">
                <div className="grid grid--three">


                    <div className="column">
                        <div className="card project">
                            <Link to="" className="project">
                                <img className="project__thumbnail" src="jnnjed.png" alt="project thumbnail"/>
                                <div className="card__body">
                                    <h3 className="project__title">TITRE</h3>
                                    <p><Link className="project__author" to="#">By
                                        PACO DJO</Link>
                                    </p>
                                    <p className="project--rating">
                                        <span style={bold}>12%</span> Positive
                                        Feedback (12) Vote(s)
                                    </p>
                                    <div className="project__tags">
                                        <span className="tag tag--pill tag--main">
                                        <small>,k,kkedknejdnejdenjde</small>
                                    </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
}