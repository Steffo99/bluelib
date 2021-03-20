import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Color({children, className, value}) {
    return (
        <span className={useBluelibClassNames(`color-${value}`, className)}>
            {children}
        </span>
    )
}


Color.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    value: PropTypes.oneOf(["red", "orange", "yellow", "lime", "cyan", "blue", "magenta", "gray"]),
}
