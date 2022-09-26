function NavLink(props) {
    return (
        <li>
            <a class="navlink" href={props.link}>{props.text}</a>
        </li>
    )
}

export default NavLink;