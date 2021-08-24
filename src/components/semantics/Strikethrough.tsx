import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface StrikethroughProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Strikethrough({...props}: StrikethroughProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-s")

    return (
        <BaseElement kind={"s"} {...props}/>
    )
}
