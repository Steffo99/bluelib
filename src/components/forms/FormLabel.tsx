import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Types from "../../types"
import {BaseElement} from "../BaseElement"
import mergeClassNames from "classnames"


export interface FormLabelProps extends Types.BluelibHTMLProps<HTMLLabelElement> {}


export function FormLabel({...props}: FormLabelProps): JSX.Element {
    props.bluelibClassNames = mergeClassNames(props.bluelibClassNames, "form-label")

    return (
        <BaseElement kind={"label"} {...props}/>
    )
}
