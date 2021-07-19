import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"
import Button from "../Button"


export default function FormSubmit({children, className, ...props}) {
    return (
        <Button className={useBluelibClassNames("form-submit", className)} {...props}>
            {children}
        </Button>
    )
}


FormSubmit.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}
