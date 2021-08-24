import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface SideProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Side({...props}: SideProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-small")

    return (
        <BaseElement kind={"small"} {...props}/>
    )
}
