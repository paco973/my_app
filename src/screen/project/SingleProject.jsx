import {Link} from "react-router-dom";

export function SingleProject() {
    return <main class="singleProject my-md">
        <div class="container">
            <div class="layout">
                <div class="column column--1of3">
                    <h3 class="singleProject__subtitle">Tools & Stacks</h3>
                    <div class="singleProject__toolStack">

                        <span class="tag tag--pill tag--sub tag--lg">
                        <small>tag</small>
                    </span>
                    </div>

                    <a class="singleProject__liveLink" href="http://www.pacodjo.fr" target="_blank"><i
                        class="im im-external-link"></i>Source
                        Code
                    </a>

                    <a class="singleProject__liveLink" href="http://www.pacodjo.fr" target="_blank"><i
                        class="im im-external-link"></i>Live Demo</a>
                </div>
                <div class="column column--2of3">
                    <img class="singleProject__preview" src="joo.png" alt="portfolio thumbnail"/>
                    <Link href="paco"
                          class="singleProject__developer">project.owner.name</Link>
                    <h2 class="singleProject__title">project.title</h2>
                    <h3 class="singleProject__subtitle">About the Project</h3>
                    <div class="singleProject__info">
                        project.description
                    </div>
                    <div class="comments">
                        <h3 class="singleProject__subtitle">Feedback</h3>
                        <h5 class="project--rating">
                            project.vote_ratio% Positive Feedback (project.vote_total
                            Vote(s)
                        </h5>
                        <form class="form" action="{% url 'project' project.id %}" method="POST">

                            <div class="form__field">
                                <label for="formInput#textarea">field.label}}</label>
                                field
                            </div>

                            <input class="btn btn--sub btn--lg" type="submit" value="Add Review"/>
                        </form>
                        <div class="commentList">
                            <div class="comment">
                                <a href="">
                                    <img class="avatar avatar--md" src="psdp.png" alt="user"/>
                                </a>
                                <div class="comment__details">
                                    <a href="#"
                                       class="comment__author">review.owner.name</a>
                                    <p class="comment__info">review.body|linebreaksbr</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</main>
}