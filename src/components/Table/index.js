import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";


export default function Table({children, className}) {
    return (
        <table className={useBluelibClassNames("panel panel-table", className)}>
            {children}
        </table>
    )
}


Table.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
