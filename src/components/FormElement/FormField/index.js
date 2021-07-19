import React from "react"
import useBluelibClassNames from "../../../hooks/useBluelibClassNames"
import InputField from "../../InputField"
import PropTypes from "prop-types"


export default function FormField({children, className, disabled, ...props}) {
    return (
        <InputField
            disabled={disabled}
            className={useBluelibClassNames("form-field", className)}
            {...props}
        >
            {children}
        </InputField>
    )
}


FormField.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
