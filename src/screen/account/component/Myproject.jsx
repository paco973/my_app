export function Myproject({project})
{
    return <tr>
        <td className="settings__thumbnail">
            <a href=""><img src={project.image}
                            alt={project.title}/></a>
        </td>
        <td className="settings__tableInfo">
            <a href="">{project.title}</a>
            <p>
                {project.description}
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
}