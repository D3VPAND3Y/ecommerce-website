import "./button.styles.scss"

export const BUTTON_TYPES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    custom: 'custom-button'
}

const Button = ({ children, typeOf,...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPES[typeOf]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;