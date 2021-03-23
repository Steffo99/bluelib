import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"


export default function Bold({children, className, ...props}) {
    return (
        <b className={useBluelibClassNames("style-bold", className)} {...props}>
            {children}
        </b>
    )
}


Bold.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
