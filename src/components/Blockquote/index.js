import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"
import Panel from "../Panel"


export default function Blockquote({children, className, ...props}) {
    return (
        <Panel kind={"blockquote"} className={useBluelibClassNames(["panel-box", "panel-blockquote"], className)} {...props}>
            {children}
        </Panel>
    )
}


Blockquote.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
