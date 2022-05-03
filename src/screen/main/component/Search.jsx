import {SearchBar} from "./SearchBar";

export function Search({filtre, handleSeardev}){
    return <section className="hero-section text-center">
                    <div className="container container--narrow">
                        <div className="hero-section__box">
                            <h2>CONNECT WITH <span>DEVELOPERS</span></h2>
                            <h2>FROM AROUND THE WORLD</h2>
                        </div>
                        <SearchBar filtre={filtre} handleSeardev={handleSeardev}/>
                    </div>
                </section>
}
