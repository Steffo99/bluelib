import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"
import Panel from "../Panel"


export default function Aside({children, className, ...props}) {
    return (
        <Panel kind={"aside"} className={useBluelibClassNames( ["panel-box", "panel-aside"], className)} {...props}>
            {children}
        </Panel>
    )
}


Aside.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
