import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface InputLabelProps extends Types.BluelibHTMLProps<HTMLLabelElement> {}


export function InputLabel({...props}: InputLabelProps): JSX.Element {
    return (
        <BaseElement kind={"label"} {...props}/>
    )
}
