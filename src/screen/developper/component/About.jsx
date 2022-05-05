export function About({children}){
    return   <div className="devInfo">
                            <h3 className="devInfo__title">About Me</h3>
                            <p className="devInfo__about">
                                {children}
                            </p>
                        </div>
}
