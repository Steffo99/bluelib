import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Underline({children, className}) {
    return (
        <u className={useBluelibClassNames("style-underline", className)}>
            {children}
        </u>
    )
}


Underline.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
