import React from "react"
import useBluelibClassNames from "../../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"


export default function FormLabel({children, className, ...props}) {
    return (
        <label className={useBluelibClassNames("form-label", className)} {...props}>
            {children}
        </label>
    )
}


FormLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
