function NavLink({ link, text, children }) {
    return (
        <li className="navlink-container">
            <span className="navlink-icon">{children}</span>
            <a className="navlink" href={link}>{text}</a>
        </li>
    )
}

export default NavLink;