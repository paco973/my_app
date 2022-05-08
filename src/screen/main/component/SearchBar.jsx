export function SearchBar() {
    return (<div className="hero-section__search">
        <form className="form" action="#" method="get">
            <div className="form__field">
                <label htmlFor="formInput#search">Search Developers </label>
                <input className="input input--text" id="formInput#search" type="text" name="text"
                       placeholder="Search by developer name" />
            </div>

            <input className="btn btn--sub btn--lg" type="submit" value="Search"/>
        </form>
    </div>)
}
