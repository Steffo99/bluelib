import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface EmphasisProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Emphasis({...props}: EmphasisProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-em")

    return (
        <BaseElement kind={"em"} {...props}/>
    )
}
