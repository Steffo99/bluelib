import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface QuoteProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Quote({...props}: QuoteProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-q")

    return (
        <BaseElement kind={"q"} {...props}/>
    )
}
