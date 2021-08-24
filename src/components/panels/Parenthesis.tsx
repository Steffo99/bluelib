import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {Panel, PanelProps} from "./Panel";
import mergeClassNames from "classnames"


export interface ParenthesisProps extends PanelProps {}


export function Parenthesis({todo, ...props}: ParenthesisProps): JSX.Element {
    if(todo) {
        console.warn(`TODO: ${props.children}`)
    }

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "panel-parenthesis", todo ? "todo" : "")

    return (
        <Panel {...props}/>
    )
}
