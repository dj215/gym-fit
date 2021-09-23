import React from 'react'
import ButtonWrapper from './button.style'
const Button = (props) => {
    const {
        label,
        className,
        disabled = false,
        style,
        type = "button",
        onClick,
    } = props;
    return(
        <ButtonWrapper info={{...props}} className="text-center">
            <button
                onClick={onClick}
                type={type}
                style={style && style}
                disabled={disabled}
                className={className && className}
            >
                {label}
            </button>
        </ButtonWrapper>
    )
}

export default Button