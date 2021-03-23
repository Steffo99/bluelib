import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"


export default function Italic({children, className, ...props}) {
    return (
        <i className={useBluelibClassNames("style-italic", className)} {...props}>
            {children}
        </i>
    )
}


Italic.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
