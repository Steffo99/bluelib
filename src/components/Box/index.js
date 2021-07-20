import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"
import Panel from "../Panel"


export default function Box({children, className, ...props}) {
    return (
        <Panel kind={"section"} className={useBluelibClassNames("panel-box", className)} {...props}>
            {children}
        </Panel>
    )
}


Box.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
