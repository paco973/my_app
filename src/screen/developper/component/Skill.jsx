export function Skill({skills}) {
    return <div className="devInfo">
        <h3 className="devInfo__title">Skills</h3>


        <div className="devInfo__skills">
            {skills.map((skill, index) => {
                return index < 3 ? <div key={index} className="devSkill">
                    <h4 className="devSkill__title">{skill.name}</h4>
                    <p key={skill.id} className="devSkill__info">
                        {skill.description}
                    </p>
                </div> : ''
            })}

            <div>
                {skills.length > 3 ? <h3 className="devInfo__subtitle">Other Skills</h3> : ''}
                <div className="devInfo__otherSkills">
                    {skills.map((skill, index) => {
                        return index > 2 ? <span key={skill.id} className="tag tag--pill tag--sub tag--lg">
                  <small key={index.toString()}>{skill.name}</small>
                </span> : ''
                    })}


                </div>
            </div>
        </div>
    </div>


}
