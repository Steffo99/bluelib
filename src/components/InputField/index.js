import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"


export default function InputField(
    {
        children,
        className,
        type = "text",
        disabled = false,
        onChange,
        ...props
    }) {
    return (
        <input
            type={type}
            className={
                useBluelibClassNames(
                    [
                        "input-field",
                        disabled ? "status-disabled" : null,
                    ],
                    className,
                )
            }
            disabled={disabled}
            onChange={disabled ? null : onChange}
            {...props}
        >
            {children}
        </input>
    )
}


InputField.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
}
