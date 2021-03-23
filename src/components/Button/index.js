import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import classNames from "classnames"


export default function Button({children, className, disabled, ...props}) {
    return (
        <button className={useBluelibClassNames(classNames("button", disabled ? "status-disabled" : "status-clickable"), className)} {...props}>
            {children}
        </button>
    )
}
