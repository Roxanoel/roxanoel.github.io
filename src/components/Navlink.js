function NavLink(props) {
    return (
        <li className="navlink-container">
            <a className="navlink" href={props.link}>{props.text}</a>
        </li>
    )
}

export default NavLink;