import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"


export default function Box({children, className, ...props}) {
    return (
        <section className={useBluelibClassNames("panel panel-box", className)} {...props}>
            {children}
        </section>
    )
}


Box.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
