import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {Panel} from "./Panel";
import mergeClassNames from "classnames"


interface BoxProps {
    [props: string]: any,
}


export function Box({...props}: BoxProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "panel-box")

    return (
        <Panel {...props}/>
    )
}
