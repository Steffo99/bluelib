import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {Panel} from "./Panel";
import mergeClassNames from "classnames"


interface ParenthesisProps {
    [props: string]: any,
}


export function Parenthesis({...props}: ParenthesisProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "panel-parenthesis")

    return (
        <Panel {...props}/>
    )
}
