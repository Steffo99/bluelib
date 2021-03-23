import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Size({children, className, value, ...props}) {
    return (
        <span className={useBluelibClassNames(`size-${value}`, className)} {...props}>
            {children}
        </span>
    )
}


Size.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    value: PropTypes.oneOf(["xxl", "xl", "l", "m", "s", "xs", "xxs"])
}
