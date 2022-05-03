export function ProjectList({children}){
    return  <div className="devInfo">
                            <h3 className="devInfo__title">Projects</h3>
                            <div className="grid grid--two">
                                {children}
                            </div>
                        </div>
}
