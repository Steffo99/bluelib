import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Separator({className, ...props}) {
    return (
        <hr className={useBluelibClassNames("element-separator", className)} {...props}/>
    )
}


Separator.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
