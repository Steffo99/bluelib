import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Separator({className}) {
    return (
        <hr className={useBluelibClassNames("element-separator", className)}/>
    )
}


Separator.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
