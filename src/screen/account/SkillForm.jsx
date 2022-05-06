export function SkillForm(){
   return <main className="formPage my-xl">
        <div className="content-box">
            <div className="formWrapper">
                <a className="backButton" href="#"><i className="im im-angle-left"></i></a>
                <br/>

                    <form className="form" method="POST" action="">

                        <div className="form__field">
                            <label htmlFor="formInput#text"> field.label</label>
                            field
                        </div>


                        <button className="btn btn--sub btn--lg  my-md" >Submit</button>
                    </form>
            </div>
        </div>
    </main>
}