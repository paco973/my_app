export function PorjectForm(){
    return <main className="formPage my-xl">
        <div className="content-box">
            <div className="formWrapper">
                <a className="backButton" href="https://www.google.fr/"><i className="im im-angle-left"></i></a>
                <br/>

                    <form className="form" method="POST" encType="multipart/form-data">
                        <div className="form__field">
                            <label htmlFor="formInput#text">field.label</label>
                            field
                        </div>


                        <div className="form__field">

                            <div className="project-tag tag tag--pill tag--main" data-tag="tag.id"
                                 data-project="project.id">tag.name &#215;</div>

                        </div>

                        <div className="form__field">
                            <label htmlFor="formInput#text">Tags</label>
                            <textarea className="input" name="newtags" placeholder="Add tags here..."></textarea>
                        </div>
                        <input className="btn btn--sub btn--lg  my-md" type="submit" value="Submit"/>
                    </form>
            </div>
        </div>
    </main>
}