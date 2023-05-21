import "./button.styles.scss"

const BUTTON_TYPES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    custom: 'custom-button'
}

const Button = ({ children, type,...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPES[type]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;