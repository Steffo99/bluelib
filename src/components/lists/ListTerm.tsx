import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface ListTermProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function ListTerm({...props}: ListTermProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "list-description-term")

    return (
        <BaseElement kind={"dt"} {...props}/>
    )
}
