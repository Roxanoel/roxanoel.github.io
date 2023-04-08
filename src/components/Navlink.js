function NavLink(props) {
    return (
        <li>
            <a className="navlink" href={props.link}>{props.text}</a>
        </li>
    )
}

export default NavLink;