import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface DefinitionProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Definition({...props}: DefinitionProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-dfn")

    return (
        <BaseElement kind={"dfn"} {...props}/>
    )
}
