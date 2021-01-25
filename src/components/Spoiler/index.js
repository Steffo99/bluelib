import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Spoiler({children, className}) {
    return (
        <div className={useBluelibClassNames("spoiler", className)}>
            {children}
        </div>
    )
}


Spoiler.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
