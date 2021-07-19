import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"


export default function Form({children, className, ...props}) {
    return (
        <form className={useBluelibClassNames("form", className)} {...props}>
            {children}
        </form>
    )
}


Form.Buttons = function FormButtons({children, className, ...props}) {
    return (
        <div className={useBluelibClassNames("form-buttons", className)} {...props}>
            {children}
        </div>
    )
}


Form.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}


Form.Buttons.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}