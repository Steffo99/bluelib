import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"


export default function Blockquote({children, className, ...props}) {
    return (
        <blockquote className={useBluelibClassNames("panel panel-box panel-blockquote", className)} {...props}>
            {children}
        </blockquote>
    )
}


Blockquote.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
