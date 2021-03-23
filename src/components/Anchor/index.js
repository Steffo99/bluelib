import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Anchor({children, className, href, ...props}) {
    return (
        <a className={useBluelibClassNames(`element-anchor`, className)} href={href} {...props}>
            {children}
        </a>
    )
}


Anchor.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string
}
