import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface StrongProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Strong({...props}: StrongProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-strong")

    return (
        <BaseElement kind={"strong"} {...props}/>
    )
}
