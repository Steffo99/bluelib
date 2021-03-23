import React, {Fragment} from "react"
import useBluelibClassNames from "../../hooks/useBluelibClassNames";
import PropTypes from "prop-types";
import classNames from "classnames"
import color from "color"


export default function Color({children, builtin, custom}) {
    if(builtin && custom) {
        throw new Error("<Color> tags may only have one prop between `builtin` and `custom`.")
    }

    let extraClassName = "";
    let extraStyle = {};

    if(builtin !== undefined) {
        extraClassName = useBluelibClassNames(`color-${builtin}`)

    }
    if(custom !== undefined) {
        let c = color(custom);
        extraStyle["--bluelib-color-r"] = c.red()
        extraStyle["--bluelib-color-g"] = c.green()
        extraStyle["--bluelib-color-b"] = c.blue()
    }

    children = React.Children.map(children, child => {
        if(!child.props) {
            return child;
        }
        return React.cloneElement(child, {
            className: classNames(child.props.className, extraClassName),
            style: {...child.props.style, ...extraStyle},
        })
    })

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}


Color.propTypes = {
    children: PropTypes.node,
    builtin: PropTypes.oneOf(["red", "orange", "yellow", "lime", "cyan", "blue", "magenta", "gray"]),
    custom: PropTypes.string,
}
