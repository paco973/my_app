import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Project} from "../developper/component/Project";
import {ProjectList} from "../developper/component/PorjectList";
import Loader from "../../component/Loader";
import {Message} from "../../component/Message";
import {listProject} from "../../action/projectActions";




export function Projects() {

    const dispatch = useDispatch()
    const projectList = useSelector(state => state.projectList)
    const { loading, error, projects } = projectList


    useEffect(() => {
      if (projects >= 0){
          dispatch(listProject())
      }
    }, [dispatch, projects, error, loading]);




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
        {error && <Message>{error}</Message>}
        { loading ? <Loader/> :<section className="projectsList">
            <div className="container">
                <div className="grid grid--three">
                    <ProjectList>
                        {projects ? projects.map(project => <Project key={project.id} project={project} /> ): ''}
                    </ProjectList>
                </div>
            </div>
        </section>}

    </main>
}