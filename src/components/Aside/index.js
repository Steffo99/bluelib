import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Aside({children, className}) {
    return (
        <aside className={useBluelibClassNames("panel panel-aside", className)}>
            {children}
        </aside>
    )
}


Aside.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
