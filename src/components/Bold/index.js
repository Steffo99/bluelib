import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Bold({children, className}) {
    return (
        <b className={useBluelibClassNames("style-bold", className)}>
            {children}
        </b>
    )
}


Bold.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
