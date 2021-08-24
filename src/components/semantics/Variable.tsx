import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface VariableProps extends Types.BluelibHTMLProps<HTMLElement> {}


export function Variable({...props}: VariableProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "semantic-var")

    return (
        <BaseElement kind={"var"} {...props}/>
    )
}
