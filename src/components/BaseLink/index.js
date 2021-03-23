import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"
import {Link, useRouteMatch} from "react-router-dom"


export default function BaseLink({children, className, href, disabled, ...props}) {
    const locationMatch = useRouteMatch({
        path: href,
        strict: true,
    })

    const activeClassNames = useBluelibClassNames("style-bold", className)
    const disabledClassNames = useBluelibClassNames("element-anchor status-disabled", className)
    const enabledClassNames = useBluelibClassNames("element-anchor", className)

    if (locationMatch) {
        return (
            <span className={activeClassNames} {...props}>
                {children}
            </span>
        )
    }

    if (disabled) {
        return (
            <span className={disabledClassNames} {...props}>
                {children}
            </span>
        )
    }

    return (
        <Link to={href} className={enabledClassNames} {...props}>
            {children}
        </Link>
    )
}


BaseLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    disabled: PropTypes.bool,
}
