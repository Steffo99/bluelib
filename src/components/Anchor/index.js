import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"
import { disable, disableClass } from "../../utils/disable"


export default function Anchor({children, className, disabled, href, ...props}) {
    className = useBluelibClassNames([`element-anchor`, disableClass(disabled)], [className])

    return (
        <a href={disable(disabled, href)} className={className} {...props}>
            {children}
        </a>
    )
}


Anchor.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
}
