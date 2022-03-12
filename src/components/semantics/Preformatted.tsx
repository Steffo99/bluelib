import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface PreformattedProps extends Types.BluelibHTMLProps<HTMLPreElement> {}


export function Preformatted({...props}: PreformattedProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-pre")

    return (
        <BaseElement kind={"pre"} {...props}/>
    )
}
