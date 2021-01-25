import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Help({children, className, text}) {
    return (
        <abbr className={useBluelibClassNames("status-hoverable", className)} title={text}>
            {children}
        </abbr>
    )
}


Help.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    text: PropTypes.string,
}
