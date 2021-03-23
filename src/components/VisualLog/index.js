import React from "react";
import Color from "../Color";
import PropTypes from "prop-types";


const COLORS = {
    "error": "red",
    "warning": "yellow",
    "info": "blue",
    "debug": "magenta",
}

const EMOJIS = {
    "error": "⛔️",
    "warning": "⚠️",
    "info": "ℹ️",
    "debug": "🐛",
}


export default function VisualLog({children, level}) {
    return (
        <Color builtin={COLORS[level]}>
            <span>
                {EMOJIS[level]} {children}
            </span>
        </Color>
    )
}


VisualLog.propTypes = {
    children: PropTypes.node,
    level: PropTypes.oneOf(["error", "warning", "info", "debug"])
}