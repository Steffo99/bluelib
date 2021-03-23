import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"


export default function Title({children, className, size, ...props}) {
    return (
        <div className={useBluelibClassNames(`element-title size-${size}`, className)} {...props}>
            {children}
        </div>
    )
}


Title.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(["xxl", "xl", "l", "m", "s", "xs", "xxs"])
}
