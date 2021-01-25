import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Paragraph({children, className}) {
    return (
        <p className={useBluelibClassNames("element-paragraph", className)}>
            {children}
        </p>
    )
}


Paragraph.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
