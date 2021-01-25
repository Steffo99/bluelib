import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Box({children, className}) {
    return (
        <section className={useBluelibClassNames("panel panel-box", className)}>
            {children}
        </section>
    )
}


Box.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
