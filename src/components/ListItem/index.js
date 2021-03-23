import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function ListItem({children, className, ...props}) {
    return (
        <li className={useBluelibClassNames("element-list-item", className)} {...props}>
            {children}
        </li>
    )
}


ListItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
