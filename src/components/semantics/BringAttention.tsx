import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface BringAttentionProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function BringAttention({...props}: BringAttentionProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-b")

    return (
        <BaseElement kind={"b"} {...props}/>
    )
}
