export function ProfileForm(){
    return <main className="formPage my-xl">
        <div className="content-box">
            <div className="formWrapper">
                <a className="backButton" href="www.pacodjo.fr"><i className="im im-angle-left"></i></a>
                <br/>

                    <form className="form" method="POST"
                          encType="multipart/form-data">

                        <div className="form__field">
                            <label htmlFor="formInput#text">field.label</label>
                            field
                        </div>


                        <button className="btn btn--sub btn--lg  my-md" >Submit</button>
                    </form>
            </div>
        </div>
    </main>
}