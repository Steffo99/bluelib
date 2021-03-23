import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Split({children, className, ...props}) {
    return (
        <div className={useBluelibClassNames("panel panel-split", className)} {...props}>
            {children}
        </div>
    )
}


Split.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
