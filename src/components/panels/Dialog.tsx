import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {Panel} from "./Panel";
import mergeClassNames from "classnames"


interface DialogProps {
    [props: string]: any,
}


export function Dialog({...props}: DialogProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "panel-dialog")

    return (
        <Panel {...props}/>
    )
}
