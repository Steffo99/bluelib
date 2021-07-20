import React from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames"
import PropTypes from "prop-types"
import Title from "../Title"


export default function Panel({kind = "div", children, className, title, ...props}) {
    const Kind = kind;

    return (
        <Kind className={useBluelibClassNames("panel", className)} {...props}>
            {title ?
                <Title size={"l"}>
                    {title}
                </Title>
            : null}
            {children}
        </Kind>
    )
}


Panel.propTypes = {
    kind: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
}
