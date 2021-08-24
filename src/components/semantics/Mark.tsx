import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface MarkProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Mark({...props}: MarkProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-mark")

    return (
        <BaseElement kind={"mark"} {...props}/>
    )
}
