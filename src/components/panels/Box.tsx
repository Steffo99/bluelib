import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {Panel, PanelProps} from "./Panel";
import mergeClassNames from "classnames"


export interface BoxProps extends PanelProps {}


export function Box({todo, warn = true, ...props}: BoxProps): JSX.Element {
    if(todo && warn) {
        console.warn(`TODO: ${props.children}`)
    }

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "panel-box", todo ? "todo" : "")

    return (
        <Panel {...props}/>
    )
}
