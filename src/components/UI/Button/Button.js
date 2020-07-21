import React from 'react';

const Button = props => {
    const cls = [
        "btn",
        "btn-outline-secondary"
    ]

    if (!props.isValid) {
        cls.push("text-danger")
    } else {
        cls.push("text-success")
    }

    return (
        <>
            <button 
                className={cls.join(' ')} 
                disabled={!props.isValid}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </>
    )
}

export default Button