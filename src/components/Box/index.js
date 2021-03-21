import React from "react";
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";
import Color from "color";
import {isString} from "../../utils"


export default function Box({children, className, color}) {
    let style = {}
    if(color !== undefined) {
        if(isString(color)) {
            color = new Color(color)
        }
        style["--bluelib-color-r"] = color.red()
        style["--bluelib-color-g"] = color.green()
        style["--bluelib-color-b"] = color.blue()
    }

    return (
        <section className={useBluelibClassNames("panel panel-box", className)} style={style}>
            {children}
        </section>
    )
}


Box.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
