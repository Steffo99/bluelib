import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface CiteProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Cite({...props}: CiteProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-cite")

    return (
        <BaseElement kind={"cite"} {...props}/>
    )
}
