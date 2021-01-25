import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function ListItem({children, className}) {
    return (
        <li className={useBluelibClassNames("element-list-item", className)}>
            {children}
        </li>
    )
}


ListItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
