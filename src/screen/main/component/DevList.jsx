

export function DevList({children}){
    return    <section className="devlist">
                    <div className="container">
                        <div className="grid grid--three">
                            {children}
                        </div>
                    </div>
                </section>
}
