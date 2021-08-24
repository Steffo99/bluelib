import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface PanelProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Panel({...props}: PanelProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "panel")

    return (
        <BaseElement kind={"section"} {...props}/>
    )
}
