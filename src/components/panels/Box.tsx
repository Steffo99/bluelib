import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {Panel, PanelProps} from "./Panel";
import mergeClassNames from "classnames"


export interface BoxProps extends PanelProps {}


export function Box({...props}: BoxProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "panel-box")

    return (
        <Panel {...props}/>
    )
}
