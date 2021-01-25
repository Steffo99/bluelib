import React from "react";
import useBluelibClassNames from "../../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function BluelibContainer({children, className}) {
    return (
        <div className={useBluelibClassNames("bluelib", className)}>
            {children}
        </div>
    )
}


BluelibContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
