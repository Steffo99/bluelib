import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"


export default function Paragraph({children, className, ...props}) {
    return (
        <p className={useBluelibClassNames("element-paragraph", className)} {...props}>
            {children}
        </p>
    )
}


Paragraph.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
