import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";
import { Link, useMatch } from "@reach/router"


export default function BaseLink({children, className, href, disabled}) {
    const locationMatch = useMatch(href);

    const activeClassNames = useBluelibClassNames("style-bold", className);
    if(locationMatch) {
        return (
            <span className={activeClassNames}>
                {children}
            </span>
        )
    }

    const disabledClassNames = useBluelibClassNames("element-anchor status-disabled", className);
    if(disabled) {
        return (
            <span className={disabledClassNames}>
                {children}
            </span>
        )
    }

    const enabledClassNames = useBluelibClassNames("element-anchor", className)
    return (
        <Link to={href} className={enabledClassNames}>
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
