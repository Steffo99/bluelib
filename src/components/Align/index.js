import React from "react"
import PropTypes from "prop-types"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"


export default function Align({children, className, value, ...props}) {
    return (
        <div className={useBluelibClassNames(`align-${value}`, className)} {...props}>
            {children}
        </div>
    )
}


Align.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    value: PropTypes.oneOf(["left", "center", "right"])
}
