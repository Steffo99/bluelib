import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";
import { Link, useMatch } from "@reach/router"


export default function BaseLink({children, className, href, disabled, ...props}) {
    const locationMatch = useMatch(href);

    const activeClassNames = useBluelibClassNames("style-bold", className);
    if(locationMatch) {
        return (
            <span className={activeClassNames} {...props}>
                {children}
            </span>
        )
    }

    const disabledClassNames = useBluelibClassNames("element-anchor status-disabled", className);
    if(disabled) {
        return (
            <span className={disabledClassNames} {...props}>
                {children}
            </span>
        )
    }

    const enabledClassNames = useBluelibClassNames("element-anchor", className)
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
