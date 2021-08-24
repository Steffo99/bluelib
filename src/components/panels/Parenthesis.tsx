import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {Panel, PanelProps} from "./Panel";
import mergeClassNames from "classnames"


export interface ParenthesisProps extends PanelProps {}


export function Parenthesis({...props}: ParenthesisProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "panel-parenthesis")

    return (
        <Panel {...props}/>
    )
}
