import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface PanelProps extends Types.BluelibHTMLProps<HTMLElement> {
    todo?: boolean,
    warn?: boolean,
}


export function Panel({todo, warn = true, ...props}: PanelProps): JSX.Element {
    if(todo && warn) {
        console.warn(`TODO: ${props.children}`)
    }

    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "panel", todo ? "todo" : "")

    return (
        <BaseElement kind={"section"} {...props}/>
    )
}
