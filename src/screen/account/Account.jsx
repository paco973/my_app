import {Component} from "react";

export class Account extends Component{
    render() {

        return <main className="settingsPage profile my-md">
            <div className="container">
                <div className="layout">
                    <div className="column column--1of3">
                        <div className="card text-center">
                            <div className="card__body dev">
                                <a className="tag tag--pill tag--main settings__btn" href=""><i
                                    className="im im-edit"></i>
                                    Edit</a>
                                <img className="avatar avatar--xl dev__avatar" src=""/>
                                <h2 className="dev__name">Paco DJO</h2>
                                <p className="dev__title">Expirance FullStack Developer, Youtuber and Instructor</p>
                                <p className="dev__location">Based in Lyon</p>




                            </div>
                        </div>
                    </div>
                    <div className="column column--2of3">
                        <div className="devInfo">
                            <h3 className="devInfo__title">About Me</h3>
                            <p className="devInfo__about">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illum ipsum iusto consequatur. Totam, dolorum fugiat, debitis facere illo nostrum nesciunt maxime, deserunt enim voluptatibus modi natus velit voluptatum. Dicta eritatis exercitationem ut quos a placeat obcaecati? Architecto illum!
                                Amet consectetur adipisicing elit. Veritatis exercitationem ut quos a placeat obcaecati? Architecto illum, atque delectus nemo dolorem inventore ab facilis? Dolor placeat vel delectus ipsam ullam.


                            </p>
                        </div>
                        <div className="settings">
                            <h3 className="settings__title">Skills</h3>
                            <a className="tag tag--pill tag--sub settings__btn tag--lg" href=""><i
                                className="im im-plus"></i> Add Skill</a>
                        </div>

                        <table className="settings__table">

                            <tr>
                                <td className="settings__tableInfo">
                                    <h4>JavaScript</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae neque voluptatum ut? Quaerat, ea cumque! Dolorum provident esse molestias commodi odit sapiente quod quasi corrupti obcaecati? Nobis ex temporibus quaerat!
                                    </p>
                                </td>
                                <td className="settings__tableActions">
                                    <a className="tag tag--pill tag--main settings__btn"
                                       href=""><i
                                        className="im im-edit"></i> Edit</a>
                                    <a className="tag tag--pill tag--main settings__btn"
                                       href=""><i
                                        className="im im-x-mark-circle-o"></i>
                                        Delete</a>
                                </td>
                            </tr>

                        </table>

                        <div className="settings">
                            <h3 className="settings__title">Projects</h3>
                            <a className="tag tag--pill tag--sub settings__btn tag--lg"
                               href=""><i
                                className="im im-plus"></i> Add Project</a>
                        </div>

                        <table className="settings__table">

                            <tr>
                                <td className="settings__thumbnail">
                                    <a href=""><img src=""
                                                                                  alt="Project Thumbnail"/></a>
                                </td>
                                <td className="settings__tableInfo">
                                    <a href="">What is Lorem Ipsum?</a>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </td>
                                <td className="settings__tableActions">
                                    <a className="tag tag--pill tag--main settings__btn"
                                       href=""><i
                                        className="im im-edit"></i> Edit</a>
                                    <a className="tag tag--pill tag--main settings__btn"
                                       href=""><i
                                        className="im im-x-mark-circle-o"></i>
                                        Delete</a>
                                </td>
                            </tr>


                        </table>
                    </div>
                </div>
            </div>
        </main>
    }
}