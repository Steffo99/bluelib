import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {Panel, PanelProps} from "./Panel";
import mergeClassNames from "classnames"


export interface DialogProps extends PanelProps {}


export function Dialog({todo, warn = true, ...props}: DialogProps): JSX.Element {
    if(todo && warn) {
        console.warn(`TODO: ${props.children}`)
    }

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "panel-dialog", todo ? "todo" : "")

    return (
        <Panel {...props}/>
    )
}
