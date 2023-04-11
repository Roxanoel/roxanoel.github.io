function Button({ children, customClass }) {
    return (
        <button className={`button ${customClass}`}>
            {children}
        </button>
    )
}

export default Button;