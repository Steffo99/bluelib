import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Style from "./index.module.css"


export default function Todo({ children, block }) {
    useEffect(() => {
        console.debug("TODO:", { children })
    }, [])

    if(block) {
        return (
            <div className={Style.Todo}>{children}</div>
        )
    }
    else {
        return (
            <span className={Style.Todo}>🚧 {children}</span>
        )
    }
}

Todo.propTypes = {
    children: PropTypes.node,
    block: PropTypes.bool,
}
