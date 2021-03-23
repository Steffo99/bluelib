import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import classNames from "classnames"
import Button from "../Button"


export default function ButtonToggle({children, className, disabled, value, ...props}) {
    return (
        <Button
            className={useBluelibClassNames(
                classNames(
                    "button",
                    "button-toggle",
                    value ? "button-toggle-on" : "button-toggle-off",
                    disabled ? "status-disabled" : "status-clickable",
                ), className
            )}
            {...props}
        >
            {children}
        </Button>
    )
}
