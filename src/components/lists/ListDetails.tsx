import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface ListDetailsProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function ListDetails({...props}: ListDetailsProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "list-description-details")

    return (
        <BaseElement kind={"dd"} {...props}/>
    )
}
