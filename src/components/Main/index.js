import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"


export default function Main({children, className, ...props}) {
    return (
        <main className={useBluelibClassNames("container-main", className)} {...props}>
            {children}
        </main>
    )
}


Main.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
