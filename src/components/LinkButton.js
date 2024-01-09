function Button({ children, link, text }) {
    return (
        <button className={`link-button`}>
            <span className="link-button-icon">{children}</span>
            <a className="link-button-text" href={link}>{text}</a>
        </button>
    )
}

export default Button;