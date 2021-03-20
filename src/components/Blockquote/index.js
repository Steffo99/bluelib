import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Blockquote({children, className}) {
    return (
        <blockquote className={useBluelibClassNames("panel panel-box panel-blockquote", className)}>
            {children}
        </blockquote>
    )
}


Blockquote.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
