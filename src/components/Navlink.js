function NavLink({ link, text }) {
    return (
        <li className="navlink-container">
            <a className="navlink" href={link}>{text}</a>
        </li>
    )
}

export default NavLink;