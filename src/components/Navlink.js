function NavLink({ link, text, children }) {
    return (
        <li className="navlink-container">
            <a className="navlink" href={link}>{text}</a>
            <span className="navlink-icon">{children}</span>
        </li>
    )
}

export default NavLink;