import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface CodeProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Code({...props}: CodeProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-code")

    return (
        <BaseElement kind={"code"} {...props}/>
    )
}
