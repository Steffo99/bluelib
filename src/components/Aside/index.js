import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Aside({children, className, ...props}) {
    return (
        <aside className={useBluelibClassNames("panel panel-box panel-aside", className)} {...props}>
            {children}
        </aside>
    )
}


Aside.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
