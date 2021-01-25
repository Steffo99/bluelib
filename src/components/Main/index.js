import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Main({children, className}) {
    return (
        <main className={useBluelibClassNames("container-main", className)}>
            {children}
        </main>
    )
}


Main.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
