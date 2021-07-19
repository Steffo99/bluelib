import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import classNames from "classnames"


export default function Button({children, className, disabled, onClick, ...props}) {
    return (
        <button
            className={
                useBluelibClassNames(
                    "button",
                    disabled ? "status-disabled" : "status-clickable",
                    className,
                )
            }
            onClick={disabled ? null : onClick}
            {...props}
        >
            {children}
        </button>
    )
}
